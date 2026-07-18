import { SanityAsset } from "@sanity/asset-utils";
import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";

export const SmallHero: FC<{
    title?: string;
    description?: string;
    image?: SanityAsset;
    small?: boolean;
    outlineBottom?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { title, small, outlineBottom, description, image, ...filteredProps } = props;


    return (
        <div {...filteredProps} className={createClassName(props, `relative ${small ? 'min-h-[390px]' : 'min-h-[70vh]'} sm:min-h-[50vh] flex justify-center`)}>
            <div className={`flex ${outlineBottom ? 'justify-end md:justify-center pb-[43px]' : 'justify-center'} flex-col w-full max-w-page p-8 z-10 relative text-white`}>
                <h1 className="mb-5 uppercase text-[43px] mb-4">{title}</h1>
                <p className="max-w-[500px] text-sm md:text-base">{description}</p>
            </div>
            <img className="absolute object-cover left-0 top-0 w-full h-full" src={imageUrlFor(image)} />
            <div className="absolute left-0 top-0 w-full h-full bg-black/30" />
        </div>
    )
}