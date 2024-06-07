import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";
import { CTABlockType } from "../../lib/types/components/cta-block.type";
import { Button } from "../core/button";

export const CTA: FC<{
    ctaBlock?: CTABlockType;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { ctaBlock, ...filteredProps } = props;
    return (
        <div {...filteredProps} className={createClassName(props, "flex justify-center bg-[url(/tiles.svg)] bg-repeat-x bg-cover  bg-top")}>
            <div className="w-full max-w-page px-8 py-16 z-10">
                <div className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-8 justify-between">
                        <div className=" h-fit">
                            <h1 className=" font-heading font-extrabold uppercase mb-4 font-[34px]">{ctaBlock?.title}</h1>
                            <p className="uppercase font-heading text-base">{ctaBlock?.description}</p>
                        </div>
                        <div className="flex flex-col gap-2.5 w-full">
                            <a className="w-full" target={ctaBlock?.button_one?.link?.includes("http") ? "_blank" : "_self"} rel="noreferrer" href={ctaBlock?.button_one?.link ? ctaBlock?.button_one.link : "#ft-open"}>
                                <Button fullSize={true} textTransform="uppercase" variant="primary">{ctaBlock?.button_one?.name ? ctaBlock?.button_one?.name : "Reserveren"}</Button>
                            </a>
                            <a className="w-full" target={ctaBlock?.button_two?.link?.includes("http") ? "_blank" : "_self"} rel="noreferrer" href={ctaBlock?.button_two?.link ? ctaBlock?.button_two.link : "#ft-open"}>
                                <Button fullSize={true} textTransform="uppercase" variant="secondary">{ctaBlock?.button_two?.name ? ctaBlock?.button_two?.name : "Reserveren"}</Button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}