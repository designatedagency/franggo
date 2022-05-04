import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { createClassName } from "../../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../../lib/helpers/sanity-helpers";
import { GlobalType } from "../../../lib/types/base/global.type";

export const Footer: FC<{
    global?: GlobalType;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { global, ...filteredProps } = props;

    const router = useRouter();

    return (
        <footer {...filteredProps} className={createClassName(props, "flex items-center justify-center w-full bg-black ")}>
            <div className="p-4 w-full max-w-page h-auto">
                <div className="flex flex-col gap-12 my-8 md:flex-row w-full justify-between">
                    <div >
                        <img src={global?.footerLogo ? imageUrlFor(global.footerLogo) : "/logo.svg"} className="h-8" />
                        <img src="/flame-grilled.svg" className="h-2 mt-4" />
                        <div className="flex row gap-4 mt-4">
                            <img src="/social/facebook.svg" className=" cursor-pointer hover:scale-105 active:scale-95 transition-all h-8" />
                            <img src="/social/instagram.svg" className=" cursor-pointer hover:scale-105 active:scale-95 transition-all h-8" />
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
                        <Link href="/allergies">
                            <p className={`transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white ${router.pathname === "/allergies" ? " text-franggo-orange" : ""}`}>Voedsel / allergieen</p>
                        </Link>
                        <Link href="/contact">
                            <p className={`transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white ${router.pathname === "/contact" ? " text-franggo-orange" : ""}`}>Contact</p>
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2" >
                        <p className="font-heading text-2xl text-white uppercase">Locaties</p>
                        <p className="transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white">Menu</p>
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