import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";
import { ContactBlockType } from "../../lib/types/components/contact-block.type";
import { Button } from "../core/button";

export const ContactBlock: FC<{
    block?: ContactBlockType;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { block, ...filteredProps } = props;

    return (
        <div {...filteredProps} className={createClassName(props, `relative`)}>

            <div className={`w-full max-w-page z-10`}>
                <div className="p-8 gap-4 grid grid-cols-1 md:grid-cols-2 md:gap-8">

                    <div className="md:hidden">
                        <p className="uppercase font-heading text-franggo-blue">{block?.tag}</p>
                        <h1 className=" font-heading font-bold ">{block?.title}</h1>
                    </div>
                    <div>
                        <img className="h-full w-full object-cover" src={imageUrlFor(block?.image)} />
                    </div>
                    <div className="flex flex-col justify-between gap-5">
                        <div className="flex flex-col gap-4">
                            <div className="justify-between items-center hidden md:flex">
                                <div>
                                    <p className="uppercase font-heading text-franggo-blue">{block?.tag}</p>
                                    <h1 className=" font-heading font-bold ">{block?.title}</h1>
                                </div>
                                <a href={block?.buttonUrl} target={block?.buttonUrl?.includes("http") ? "_blank" : "_self"} rel="noreferrer">
                                    <Button variant="primary" className="bg-black text-white h-fit">{block?.buttonName}</Button>
                                </a>
                            </div>

                            <div className="flex gap-5 items-center justify-between">
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="">{block?.streetName}</p>
                                        <p className="">{block?.postalCode} {block?.city}</p>
                                    </div>

                                    <div>
                                        {block?.openingHours?.map((hours, i) => {
                                            return (
                                                <p key={i}>{hours}</p>
                                            )
                                        })}
                                    </div>

                                    <div>
                                        <a className="hover:text-franggo-orange transition-all" href={`tel: ${block?.phoneNumber}`}>
                                            <p>{block?.phoneNumber}</p>
                                        </a>
                                        <a className="hover:text-franggo-orange transition-all" href={`mailto: ${block?.email}`}>
                                            <p>{block?.email}</p>
                                        </a>
                                    </div>
                                </div>
                                {block?.sticker ?
                                    <img className="w-[150px] hidden sm:block" src={imageUrlFor(block.sticker)} />
                                    : null}
                            </div>

                        </div>
                        <div>
                            <div className="overflow-hidden h-[250px] mt-sectionPaddingMobile">
                                <iframe style={{ border: 0 }} width="100%" height="100%" src={`https://maps.google.com/maps?q=${block?.googleMapName}&t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
                            </div>
                            <a className="md:hidden" href={block?.buttonUrl} target={block?.buttonUrl?.includes("http") ? "_blank" : "_self"} rel="noreferrer">
                                <Button variant="primary" className="bg-black text-white h-fit w-full">{block?.buttonName}</Button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}