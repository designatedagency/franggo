import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";
import { CTABlockType } from "../../lib/types/components/cta-block.type";
import { Button } from "../core/button";

export const CTA: FC<{
    ctaBlock?: CTABlockType;
    small?: boolean;
    orangeBackground?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
    const { ctaBlock, orangeBackground, small, ...filteredProps } = props;

    const getBackground = !orangeBackground ? {
        background: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/tiles.svg')`
    } : {};

    return (
        <div {...filteredProps} style={getBackground} className={createClassName(props, `flex justify-center bg-repeat-x bg-cover  bg-top ${orangeBackground ? 'bg-franggo-orange' : ''}`)}>
            <div className="w-full max-w-page px-8 py-16 z-10">
                <div className={` ${small ? 'max-w-[600px] mx-auto' : ''} bg-white p-8 grid grid-cols-1 gap-8`}>
                    <div className="flex flex-col gap-8 justify-between">
                        <div className=" h-fit">
                            <h1 className=" font-heading font-extrabold uppercase mb-4 font-[34px]">{ctaBlock?.title}</h1>
                            <p className="font-light text-base">{ctaBlock?.description}</p>
                        </div>
                        <div className="flex flex-col gap-2.5 w-full">
                            {ctaBlock?.button_one?.link ? (
                                <a className="w-full" target={ctaBlock.button_one.link.includes("http") ? "_blank" : "_self"} rel="noreferrer" href={ctaBlock.button_one.link}>
                                    <Button fullsize textTransform="uppercase" variant="primary">{ctaBlock.button_one.name || "Reserveren"}</Button>
                                </a>
                            ) : (
                                <Button data-zc-action="open" fullsize textTransform="uppercase" variant="primary">{ctaBlock?.button_one?.name || "Reserveren"}</Button>
                            )}
                            {ctaBlock?.button_two?.link ? (
                                <a className="w-full" target={ctaBlock.button_two.link.includes("http") ? "_blank" : "_self"} rel="noreferrer" href={ctaBlock.button_two.link}>
                                    <Button fullsize textTransform="uppercase" variant="secondary">{ctaBlock.button_two.name || "Reserveren"}</Button>
                                </a>
                            ) : (
                                <Button data-zc-action="open" fullsize textTransform="uppercase" variant="secondary">{ctaBlock?.button_two?.name || "Reserveren"}</Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}