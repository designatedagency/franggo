import { SanityAsset } from "@sanity/asset-utils";
import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";
import { Button } from '../../lib/types/components/button.type';
import { Button as HtmlButton } from "../core/button";

export const Hero: FC<{
    image?: SanityAsset;
    logo?: SanityAsset;
    primaryButton?: Button;
    secondaryButton?: Button;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
    const { image, logo, primaryButton, secondaryButton, ...filteredProps } = props;

    return (
        <div {...filteredProps} className={createClassName(props, `h-[550px] sm:h-[800px] flex relative justify-center  bg-cover bg-center`)} style={{ backgroundImage: `url(${imageUrlFor(image)})` }}>
            <div className="w-full h-full bg-black/30 z-10 flex items-center justify-center">
                <div className={`flex justify-center w-full h-full max-w-page p-8`} >
                    <div className="wrapper flex flex-col gap-9 justify-center">
                        <img className="w-full mx-auto md:w-[70%] object-contain" src={imageUrlFor(logo)} />
                        <div className="buttons-wrapper flex gap-4 flex-wrap justify-center">
                            {primaryButton?.link ? (
                                <a target={primaryButton.link.includes("http") ? "_blank" : "_self"} rel="noreferrer" href={primaryButton.link}>
                                    <HtmlButton textTransform="uppercase" variant="primary">{primaryButton.name || "Reserveren"}</HtmlButton>
                                </a>
                            ) : (
                                <HtmlButton data-zc-action="open" textTransform="uppercase" variant="primary">{primaryButton?.name || "Reserveren"}</HtmlButton>
                            )}
                            {secondaryButton?.link ? (
                                <a target={secondaryButton.link.includes("http") ? "_blank" : "_self"} rel="noreferrer" href={secondaryButton.link}>
                                    <HtmlButton textTransform="uppercase" variant="secondary">{secondaryButton.name || "Reserveren"}</HtmlButton>
                                </a>
                            ) : (
                                <HtmlButton data-zc-action="open" textTransform="uppercase" variant="secondary">{secondaryButton?.name || "Reserveren"}</HtmlButton>
                            )}
                        </div>
                    </div>
                    <div className="absolute w-[130px] h-[130px] left-0 -bottom-2">
                        <img className="w-[130px] object-contain absolute left-[0px] top-[0px]" src="/uber-eats-award.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}