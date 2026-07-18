import _ from "lodash";
import { GetStaticPropsContext } from "next";
import { createClient } from 'next-sanity';
import { useEffect, useRef, useState } from "react";
import { queries } from "../constants/sanity-queries";

export type SanityQuery = {
    groq: string;
    expectArray?: boolean;
}

export type SanityNextStaticPropsOptions = {
    context: GetStaticPropsContext;
    queries: {
        [key: string]: SanityQuery;
    };
}

export type SanityNextStaticProps<T> = {
    data: T;
    locale?: string;
    preview?: boolean;
    queries: {
        [key: string]: SanityQuery;
    };
}

export type SanitySlugDocument = {
    slug?: {
        current: string
    }
}

export const sanityConfig = {
    projectId: process.env.SANITY_PROJECT_ID!,
    dataset: process.env.SANITY_DATASET!,
    useCdn: false,
    withCredentials: true
};

export async function getSanityNextProps<T>(options: SanityNextStaticPropsOptions): Promise<SanityNextStaticProps<T>> {

    const queryKeys = Object.keys(options.queries);
    let data = {} as T;

    for (let i = 0; i < queryKeys.length; i++) {
        const queryKey = queryKeys[i];
        data = Object.assign({}, { ...data, [queryKey]: await performSanityQuery(options.queries[queryKey].groq, options.queries[queryKey].expectArray || false) })
    }

    translateObject(data, options.context.locale);

    return {
        locale: options.context.locale,
        preview: options.context.preview || false,
        data,
        queries: options.queries
    }
}

export async function getSanityNextStaticPaths(options: {
    schemaType: string;
    slugName: string;
}): Promise<{
    paths: { params: { [key: string]: string } }[],
    fallback: boolean;
}> {
    const items = await performSanityQuery(queries.byType(options.schemaType), true);
    return {
        paths: items.map((item: SanitySlugDocument) => ({
            params: { [options.slugName]: item.slug?.current }
        })),
        fallback: true
    }
}

export const getNextRevalidation = () => {
    return parseInt(process.env.NEXT_REVALIDATE || "5");
}

export const useSanityPreview = <T>(props: SanityNextStaticProps<T>) => {
    if (!props.preview) return props.data;
    const queryKeys = Object.keys(props.queries);
    // @ts-ignore
    const subs = queryKeys.map(queryKey => useQueryListener(props.queries[queryKey].groq, props.data[queryKey]));
    const newData: { [key: string]: T } = {};
    _.cloneDeep(subs).forEach((sub, i) => newData[queryKeys[i]] = sub.data)
    translateObject(newData, props.locale);
    return newData as unknown as T;
}

const translateObject = (object: any, locale: string = "en") => {
    Object.keys(object).forEach(key => {
        if (typeof object[key] === "object") {
            if (object[key].hasOwnProperty("_type") && object[key]._type.includes("_locale")) {
                object[key] = _.get(object[key], locale) || []
            } else {
                translateObject(object[key], locale);
            }
        }
    })
}

export const readClient = createClient(sanityConfig);

export const performSanityQuery = async (query: string, isArray: boolean = false) => {

    try {
        console.log("QUERY", query.trim());

        const result = await readClient.fetch(query);

        // Shouldnt be a array and first element is non existant so return empty object
        if (!isArray && result.length === 0) return {};

        // Should be array just return raw result
        else if (isArray) {
            return result;
        }

        // Shouldnt be array but is array so lets return first object if it exists
        else if (!isArray && Array.isArray(result) && result[0]) {
            return result[0] || {};
        }

        // Return null so next's props don't cry
        else return {};
    } catch (error) {
        console.log("Failed a Sanity Query", error);
        return {};
    }
}

export const useQueryListener = <T>(query: string, defaultData: T) => {
    const [data, setData] = useState<T>(defaultData);
    const debounced = useRef<_.DebouncedFuncLeading<any>>();

    const getData = async () => {
        const newData = await readClient.fetch(query);
        if (newData && newData[0])
            setData(newData[0])
    }

    useEffect(() => {
        debounced.current = _.debounce(getData, 1000);

        const subscription = readClient.listen(query).subscribe((update) => {
            if (update.type === "mutation") {
                if (debounced.current) {
                    debounced.current?.cancel()
                    debounced.current();
                }
            }
        })

        return () => {
            subscription.unsubscribe();
        }
    }, [])

    return { data }
}