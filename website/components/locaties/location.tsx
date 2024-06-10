import React, { FC } from "react";

import Accordion from 'react-bootstrap/Accordion';

import Link from "next/link";

import { imageUrlFor } from "../../lib/helpers/sanity-helpers";
import { LocationType } from "../../lib/types/types/location.type";
import { Button } from "../core/button";

export const Location: FC<{
    location: LocationType;
    hasDescription?: boolean;
    hideButton?: boolean;
    showMap?: boolean;
}> = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { location, hasDescription, hideButton, showMap } = props;

    return (
        <div className={`flex flex-col`}>
            <div className="flex relative">
                <img className="w-full hidden md:block aspect-[5/4] md:aspect-[3/2] object-cover" alt="location image" src={imageUrlFor(location.image)} />
                { location.comingSoon && (
                    <div className="absolute hidden md:flex w-[101px] h-[101px] -top-[14px] -right-[14px] rounded-full bg-[#FFEF5D] items-center justify-center text-center">
                        <span className="font-heading font-extrabold text-[21px] leading-[21px]">COMING SOON</span>
                    </div>
                ) }
            </div>
            <div className="flex flex-col flex-1 justify-between border px-5 py-6 rounded-b-lg rounded-t-lg md:rounded-t-none">
                <div className="flex flex-col gap-4">
                    {/* <p className="uppercase text-[28px] font-extrabold font-heading">{location.street.includes("Sweelinckstraat") ? "Walk in" : "Restaurant"}</p> */}
                    <div className={`flex flex-col w-full justify-between items-start`}>
                        <div className="heading flex justify-between items-center w-full" onClick={() => { setIsOpen(prev => !prev); }}>
                            <h3 className="font-extrabold font-heading text-[28px] uppercase">{location.title}</h3>
                            <div className={`chevron block md:hidden duration-300 ${isOpen && 'rotate-180'}`}>
                                <img src="/icons/chevron-down.svg" alt="chevron down"  width="20" height="20"/>
                            </div>
                        </div>
                        <div className="body w-full duration-300 md:!max-h-min overflow-hidden" style={{ maxHeight: isOpen ? '750px' : '0px' }}>
                            <div className="flex flex-col gap-4 mb-4 pt-4">
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
                            {showMap ? <div className="h-[250px] mt-8">
                                <iframe style={{ border: 0 }} width="100%" height="100%" src={`https://maps.google.com/maps?q=${location.street}-${location.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
                            </div> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
