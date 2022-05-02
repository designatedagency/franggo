import { Squash as Hamburger } from 'hamburger-react'
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { setLanguage } from '../../../lib/helpers/language-helpers';
import { createClassName } from "../../../lib/helpers/react-helpers";
import { Button } from '../button';

export const Header: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const [mobileNavOpened, setMobileNavOpened] = useState(false);
    const [ready, setReady] = useState(false);
    const router = useRouter();

    const hasTranslations = false;

    function setBodyOverflow(active: boolean) {
        if (!ready) return;

        if (active && mobileNavOpened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }

    function switchNav() {
        setMobileNavOpened(!mobileNavOpened);
        setBodyOverflow(!mobileNavOpened);
    }

    useEffect(() => { setReady(true) }, []);

    return (
        <header className={createClassName(props, "sticky top-0 z-10 w-[100%] sm:py-4  bg-black ")}>
            <img src='/decor.svg' className='w-full h-[82px] object-cover absolute right-0 top-0 left-0 bottom-0' />
            <div className="flex flex-col justify-between select-none p-4 mx-auto max-w-page z-10 relative  sm:py-0 sm:px-4 md:flex-row">

                {/* mobile holder */}
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <img className="cursor-pointer " src="/full-logo.svg" />
                    </Link>
                    <div className="flex md:hidden">
                        <Hamburger color={"white"} duration={0.2} size={30} toggled={mobileNavOpened} toggle={switchNav} />
                    </div>
                </div>

                {/* links */}
                <div
                    className={`flex gap-5 ${mobileNavOpened ? "translate-x-[0%]" : "translate-x-[120%]"} bg-black md:bg-transparent flex-col fixed p-5  h-[calc(100vh-82px)] top-[82px] left-0 w-[100%] transition-transform  md:top-[initial] md:translate-x-[initial] md:h-auto md:relative md:flex-row md:items-center md:w-auto md:p-0`}
                >

                    <Link href="/menu">
                        <p className={` transition-all text-3xl md:text-xl font-heading font-medium hover:text-franggo-orange cursor-pointer ${router.pathname === "/menu" ? " text-franggo-orange " : "text-white"}`}>Menu</p >
                    </Link>
                    <Link href="/locations">
                        <p className={`transition-all text-3xl md:text-xl font-heading font-medium hover:text-franggo-orange cursor-pointer ${router.pathname === "/locations" ? " text-franggo-orange " : "text-white"}`}>Locations</p >
                    </Link>
                    <Link href="/about-us">
                        <p className={`transition-all text-3xl md:text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer ${router.pathname === "/about-us" ? " text-franggo-orange " : "text-white"}`}>About us</p >
                    </Link>
                    <Link href="/contact">
                        <p className={`transition-all text-3xl md:text-xl font-heading font-medium hover:text-franggo-orange cursor-pointer ${router.pathname === "/contact" ? "text-franggo-orange" : "text-white"}`}>Contact</p >
                    </Link>

                    {hasTranslations ?
                        <div className="flex gap-2 items-center">
                            <p className={`cursor-pointer ${router.locale === "nl" ? "text-me-pink" : "text-black"}`} onClick={() => setLanguage("nl", router.locale)}>NL</p>
                            <p>|</p>
                            <p className={`cursor-pointer ${router.locale === "en" ? "text-me-pink" : "text-black"}`} onClick={() => setLanguage("en", router.locale)}>EN</p>
                        </div>
                        : null}

                    <div className='block md:hidden'><Button className="w-auto text-3xl " variant="primary">Reserveren</Button></div>

                </div>
                <div className='hidden md:block'>
                    <Button className="w-auto text-xl" variant="primary">Reserveren</Button></div>
            </div>
        </header>
    )

}