import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";
import { DoubleBlockType } from "../../lib/types/components/double-block.type";
import { Button } from "../core/button";
import { RichText } from "../core/rich-text";

export const DoubleBlock: FC<{
    doubleBlock?: DoubleBlockType;
    backgroundPattern?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { doubleBlock, backgroundPattern, ...filteredProps } = props;

    return (
        <div {...filteredProps} className={createClassName(props, `flex justify-center ${backgroundPattern ? `bg-[url(/tiles.svg)] bg-repeat-x bg-cover bg-top` : `bg-franggo-orange`}  relative`)}>
            {backgroundPattern ? null : <img className="h-full rotate-180 w-auto absolute top-0 left-0 bottom-0" src="/graphic/right.svg" />}

            <div className="w-full max-w-page p-8 z-10">
                <div className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-8 justify-between">
                        <div className=" h-fit">
                            <p className="uppercase font-heading">{doubleBlock?.tag}</p>
                            <h1 className=" font-heading font-bold ">{doubleBlock?.title}</h1>
                        </div>
                        <div className="flex flex-col gap-8 h-fit">
                            <RichText richText={doubleBlock?.text} />
                            {doubleBlock?.label ? <a href={doubleBlock?.url} rel="noreferrer" target={doubleBlock?.url?.includes("http") ? "_blank" : "_self"}><Button className="w-fit" variant="secondary">{doubleBlock?.label}</Button></a> : null}
                        </div>

                    </div>
                    <div>
                        <img className="h-full w-full object-cover" src={imageUrlFor(doubleBlock?.image)} />
                    </div>
                </div>
            </div>
            {backgroundPattern ? null : <img className="h-full w-auto absolute top-0 right-0 bottom-0" src="/graphic/right.svg" />}

        </div>
    )
}