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
            <div className="w-full max-w-page p-8 z-10">
                <div className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-8 justify-between">
                        <div className=" h-fit">
                            <p className="uppercase font-heading">{ctaBlock?.tag}</p>
                            <h1 className=" font-heading font-bold ">{ctaBlock?.title}</h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 h-fit">
                            {ctaBlock?.ctaItems.map((ctaItem, i) => {
                                return (
                                    <div key={i} className="flex flex-col gap-8">
                                        <div className="flex gap-4 items-center">
                                            <img src={imageUrlFor(ctaItem.icon)} className="w-8 h-8" />
                                            <h4 className="font-medium">{ctaItem.title}</h4>
                                        </div>
                                        <p>{ctaItem.description}</p>
                                        <a href="#ft-open">
                                            <Button variant="primary">Reserveren</Button>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div>
                        <img className="h-full w-full object-cover" src={imageUrlFor(ctaBlock?.image)} />
                    </div>
                </div>
            </div>

        </div>
    )
}