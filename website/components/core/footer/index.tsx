import React, { FC } from "react";
import { createClassName } from "../../../lib/helpers/react-helpers";

export const Footer: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    return (
        <footer className={createClassName(props, "flex items-center justify-center w-full bg-black ")}>
            <div className="p-4 w-full max-w-page h-auto">
                <div className="flex flex-col gap-12 my-8 md:flex-row w-full justify-between">
                    <div >
                        <img src="/logo.svg" className="h-8" />
                        <img src="/flame-grilled.svg" className="h-2 mt-4" />
                        <div className="flex row gap-4 mt-4">
                            <img src="/social/facebook.svg" className=" cursor-pointer hover:scale-105 active:scale-95 transition-all h-8" />
                            <img src="/social/instagram.svg" className=" cursor-pointer hover:scale-105 active:scale-95 transition-all h-8" />
                        </div>
                    </div>

                    <div className=" flex flex-col gap-2" >
                        <p className="font-heading text-2xl text-white uppercase">Pages</p>
                        <p className="transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white">Menu</p>
                        <p className="transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white">Locations</p>
                        <p className="transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white">About us</p>
                        <p className="transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white">Contact</p>
                        <p className="transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white">Career</p>
                        <p className="transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white">FAQ</p>
                        <p className="transition-all text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer text-white">Voedsel / allergieen</p>
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