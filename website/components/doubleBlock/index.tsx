import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";
import { DoubleBlockType } from "../../lib/types/components/double-block.type";
import { Button } from "../core/button";
import { RichText } from "../core/rich-text";

export const DoubleBlock: FC<{
    doubleBlock?: DoubleBlockType;
    backgroundPattern?: boolean;
    flipped?: boolean;
    transparant?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { doubleBlock, backgroundPattern, flipped, transparant, ...filteredProps } = props;

    return (
        <div {...filteredProps} className={createClassName(props, `flex justify-center ${backgroundPattern && !transparant ? `bg-[url(/tiles.svg)] bg-repeat-x bg-cover bg-top` : transparant ? "" : `bg-franggo-orange`}  relative`)}>
            {/* {backgroundPattern || transparant ? null : <img className="h-full rotate-180 w-auto absolute top-0 left-0 bottom-0" src="/graphic/right.svg" />} */}

            <div className={`w-full max-w-page px-5 py-[50px] z-10`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>

                    {flipped ?
                        <div>
                            <img className="h-full w-full object-cover" src={imageUrlFor(doubleBlock?.image)} />
                        </div>
                        : null}
                    <div className="flex flex-col gap-2 justify-start md:justify-center">
                        <div className=" h-fit">
                            <p className="uppercase font-heading text-white">{doubleBlock?.tag}</p>
                            <h1 className=" font-heading uppercase text-white leading-[34px] text-[34px] font-extrabold">{doubleBlock?.title}</h1>
                        </div>
                        <div className="flex flex-col gap-8 h-fit">
                            <RichText className="!text-white !font-medium" richText={doubleBlock?.text} />
                            {doubleBlock?.label ? <a href={doubleBlock?.url} rel="noreferrer" target={doubleBlock?.url?.includes("http") ? "_blank" : "_self"}><Button className="w-fit" variant="secondary">{doubleBlock?.label}</Button></a> : null}
                        </div>
                    </div>
                    {!flipped ?
                        <div>
                            <img className="h-full w-full object-cover aspect-square" src={imageUrlFor(doubleBlock?.image)} />
                        </div>
                        : null}
                </div>
            </div>
            {/* {backgroundPattern || transparant ? null : <img className="h-full w-auto absolute top-0 right-0 bottom-0" src="/graphic/right.svg" />} */}

        </div>
    )
}