import { SanityAsset } from "@sanity/asset-utils";
import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";
import { Button } from "../core/button";

export const SmallHero: FC<{
    title?: string;
    description?: string;
    image?: SanityAsset;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { title, description, image, ...filteredProps } = props;

    console.log(imageUrlFor(image))

    return (
        <div {...filteredProps} className={createClassName(props, "relative min-h-[70vh] sm:min-h-[50vh] flex justify-center")}>
            <div className="flex justify-center flex-col w-full max-w-page p-8 z-10 relative text-white">
                <h1 className="mb-5">{title}</h1>
                <p className="max-w-[500px]">{description}</p>
            </div>
            <img className="absolute object-cover left-0 top-0 w-full h-full" src={imageUrlFor(image)} />
            <div className="absolute left-0 top-0 w-full h-full bg-black/25" />
        </div>
    )
}