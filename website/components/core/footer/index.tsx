import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { createClassName } from "../../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../../lib/helpers/sanity-helpers";
import { GlobalType } from "../../../lib/types/base/global.type";
import { LocationType } from "../../../lib/types/types/location.type";

export const Footer: FC<{
    global?: GlobalType;
    locations?: LocationType[];
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { global, locations, ...filteredProps } = props;

    const router = useRouter();

    return (
        <footer {...filteredProps} className={createClassName(props, "flex items-center justify-center w-full bg-black ")}>
            <div className="p-4 w-full max-w-page h-auto">
                <div className="flex flex-col gap-12 my-8 md:flex-row w-full justify-between">
                    <div >
                        <img src={global?.footerLogo ? imageUrlFor(global.footerLogo) : "/logo.svg"} className="h-8" />
                        <img src="/flame-grilled.svg" className="h-2 mt-4" />
                        <div className="flex row gap-4 mt-4">
                            <a href="https://www.facebook.com/letsgofranggo/" target={'_blank'} rel='noreferrer'>
                                <img src="/social/facebook.svg" className=" cursor-pointer hover:scale-105 active:scale-95 transition-all h-8" />
                            </a>
                            <a href="https://www.instagram.com/letsgofranggo/" target={'_blank'} rel='noreferrer'>
                                <img src="/social/instagram.svg" className=" cursor-pointer hover:scale-105 active:scale-95 transition-all h-8" />
                            </a>
                        </div>
                    </div>

                    <div className=" flex flex-col gap-2" >
                        <p className="font-heading text-2xl text-white uppercase">Pages</p>
                        <Link href="/menu">
                            <p className={`transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white ${router.pathname === "/menu" ? " text-franggo-orange" : ""}`}>Menu</p>
                        </Link>
                        <Link href="/locations">
                            <p className={`transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white ${router.pathname === "/locations" ? " text-franggo-orange" : ""}`}>Locations</p>
                        </Link>
                        <Link href="/about">
                            <p className={`transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white ${router.pathname === "/about" ? " text-franggo-orange" : ""}`}>About us</p>
                        </Link>
                        <Link href="/career">
                            <p className={`transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white ${router.pathname === "/career" ? " text-franggo-orange" : ""}`}>Career</p>
                        </Link>
                        <Link href="/faq">
                            <p className={`transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white ${router.pathname === "/faq" ? " text-franggo-orange" : ""}`}>FAQ</p>
                        </Link>
                        {/* <Link href="/allergies">
                            <p className={`transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white ${router.pathname === "/allergies" ? " text-franggo-orange" : ""}`}>Voedsel / allergieen</p>
                        </Link> */}
                        <Link href="/contact">
                            <p className={`transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white ${router.pathname === "/contact" ? " text-franggo-orange" : ""}`}>Contact</p>
                        </Link>
                    </div>

                    {/* TODO  */}
                    <div className="flex flex-col gap-2 text-white">
                        <p className="font-heading text-2xl uppercase">Locations</p>
                        <div className="flex flex-col sm:flex-row gap-8">
                            {props.locations?.map((location, i) => {
                                return (
                                    <div key={i} className="flex flex-col gap-2">
                                        <p className="font-medium font-heading text-xl">{location.title}</p>
                                        <a href={`https://maps.google.com/maps?q=${location.street}-${location.city}`} className="cursor-pointer" target="_blank" rel="noreferrer">
                                            <p>{location.street}</p>
                                            <p>{location.zip}</p>
                                        </a>
                                        <div>
                                            {/* opening times is not a string[]! */}
                                            {/* <p>{location.openingTimes.map((time, i) => {
                                            return (
                                                <p key={i}>{time}</p>
                                            )
                                        })}</p> */}
                                        </div>
                                        <div>
                                            <a className="hover:text-franggo-orange transition-all" href={`tel: ${location?.phone}`}>
                                                <p>{location?.phone}</p>
                                            </a>
                                            <a className="hover:text-franggo-orange transition-all" href={`mailto: ${location?.email}`}>
                                                <p>{location?.email}</p>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>

                <div>
                    <div className="w-full h-[1px] bg-white "></div>
                    <div className="flex justify-between w-full mt-4">
                        <p className=" text-white font-body ">© 2022 Franggo - All rights reserved </p>
                    </div>
                </div>
            </div>
        </footer>
    )

}