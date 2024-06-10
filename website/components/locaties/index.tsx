import Link from "next/link";
import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";
import { LocationType } from "../../lib/types/types/location.type";
import { Button } from "../core/button";

export const Locaties: FC<{
    locations?: LocationType[];
    hideText?: boolean;
    hideButton?: boolean;
    sticker?: boolean;
    showMap?: boolean;
    paddingY?: boolean;
    hasDescription?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { locations, hideText, hideButton, sticker, showMap, paddingY, hasDescription, ...filteredProps } = props;

    return (
        <div {...filteredProps} id="locations" className={createClassName(props, `flex flex-col px-5 pb-10 ${paddingY ? 'py-10' : ''} items-center justify-center bg-white relative`)}>

            {!hideText ?
                <div className="w-full max-w-page flex justify-start mb-8 pt-[53px]">
                    <h2 className="font-extrabold text-4xl uppercase">Our locations</h2>
                </div>
                : null}
            <div className="w-full max-w-page  z-10">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
                    {locations?.map((location, i) => {
                        return (
                            <div key={i} className={`flex flex-col`}>
                                <div className="flex relative">
                                    <img className="w-full aspect-[5/4] md:aspect-[3/2] object-cover" src={imageUrlFor(location.image)} />
                                    { location.comingSoon && (
                                        <div className="absolute w-[101px] h-[101px] -top-[14px] -right-[14px] rounded-full bg-[#FFEF5D] flex items-center justify-center text-center">
                                            <span className="font-heading font-extrabold text-[21px] leading-[21px]">COMING SOON</span>
                                        </div>
                                    ) }
                                </div>
                                <div className="flex flex-col flex-1 justify-between border px-5 py-6 rounded-b-lg">
                                    <div className="flex flex-col gap-4">
                                        {/* <p className="uppercase text-[28px] font-extrabold font-heading">{location.street.includes("Sweelinckstraat") ? "Walk in" : "Restaurant"}</p> */}
                                        <div className="flex flex-col w-full justify-between gap-4 items-start ">
                                            <h3 className="font-extrabold font-heading text-[28px] uppercase">{location.title}</h3>
                                            <div className="flex flex-col gap-4 mb-4">
                                                { hasDescription && (
                                                    <div>
                                                        <p className="text-base font-light mb-2">{location.description}</p>
                                                    </div>
                                                ) }
                                                <div>
                                                    <p className="text-base underline font-light">{location.street}</p>
                                                    <p className="text-base underline font-light flex gap-2">
                                                        {`${location.zip}, ${location.city}`} 
                                                        <img src="/icons/external-link.svg" width={11} height={10} alt="external link icon" />
                                                    </p>
                                                </div>
                                                <div>
                                                    <a href={`tel:${location.phone}`} className="cursor-pointer underline text-base font-light">{location.phone}</a>
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-4 w-full mb-10">
                                                {hideButton ? null : <Link href='/locations'><Button variant="secondary">Meer info</Button></Link>}
                                                {location.title === 'Franggo De Pijp' ? 
                                                        <div className="flex flex-col gap-2 w-full">
                                                            <a target={'_blank'} className="w-full" rel="noreferrer" href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c609920ca4d593:0x864c464fd816962a?source=g.page.share">
                                                                <Button variant="primary" fullSize={true}>Walk in</Button>
                                                            </a>
                                                            <p className="text-xs font-light">Feel free to walk in and enjoy our chicken</p>
                                                        </div>
                                                        : 
                                                        <div className="flex flex-col gap-2 w-full">
                                                            <a href="#ft-open" className="w-full">
                                                                <Button variant="primary" fullSize={true}>BOOK A TABLE</Button>
                                                            </a>
                                                            <p className="text-xs font-light">Feel free to walk in and enjoy our chicken</p>
                                                        </div>
                                                    }

                                            </div>
                                            <div className="order-now-section w-full">
                                                <h4 className="uppercase font-extrabold font-heading text-xl mb-[26px]">Order now</h4>
                                                <div className="flex flex-col gap-2.5">
                                                    <a target={'_blank'} className="w-full" rel="noreferrer" href={location.uberEatsUrl ?? 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c609920ca4d593:0x864c464fd816962a?source=g.page.share'}>
                                                        <Button variant="logo" fullSize={true}>
                                                            <img className="h-[46px] object-cover" alt="uber ets logo" src="uber-eats-logo.png" />
                                                        </Button>
                                                    </a>

                                                    <a target={'_blank'} className="w-full" rel="noreferrer" href={location.thuisbezorgdUrl ?? 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c609920ca4d593:0x864c464fd816962a?source=g.page.share'}>
                                                        <Button variant="logo" fullSize={true}>
                                                            <img className="h-[46px] object-cover" alt="thuisbezorgd logo" src="thuisbezorgd-logo.png" />
                                                        </Button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                           
                                    </div>
                                    {showMap ? <div className="h-[250px] mt-8">
                                        <iframe style={{ border: 0 }} width="100%" height="100%" src={`https://maps.google.com/maps?q=${location.street}-${location.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
                                    </div> : null}
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
            {/* <img className="h-full w-auto absolute top-0 right-0 bottom-0" src="/rightnew.png" /> */}

        </div>
    )
}