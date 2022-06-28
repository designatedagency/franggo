import { SanityAsset } from "@sanity/asset-utils";
import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";

export const Hero: FC<{
    image?: SanityAsset;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
    const { image, ...filteredProps } = props;



    return (
        <div {...filteredProps} className={createClassName(props, `h-[700px] sm:h-[800px] flex justify-center  bg-cover bg-center`)} style={{ backgroundImage: `url(${imageUrlFor(image)})` }}>
            <div className={`flex justify-center w-full max-w-page p-8 z-10 relative`} >
                <img className="w-full md:w-[70%] object-contain" src="/hero-logo.svg" />
                <div className="absolute w-[200px] h-[200px] right-12 bottom-12">
                    <img className="w-[100px] object-contain absolute left-[50px] top-[0px]" src="/chicken.svg" />
                    <img className="animate-spin-slow w-[200px] object-contain absolute left-0 bottom-0" src="/scrolldown.svg" />
                </div>
            </div>
        </div>
    )
}