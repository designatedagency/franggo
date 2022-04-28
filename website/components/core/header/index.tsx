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

    const hasTranslations = true;

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
        <div className={createClassName(props, "sticky top-0 z-10 w-[100%] sm:py-5 sm:px-12 bg-white")}>
            <div className="flex flex-col justify-between select-none p-5 mx-auto max-w-page bg-white sm:p-0  md:flex-row">

                {/* mobile holder */}
                <div className="flex justify-between items-center w-[100%]">
                    <Link href="/">
                        <img className="cursor-pointer max-h-6" src="/miles.svg" />
                    </Link>
                    <div className="flex md:hidden">
                        <Hamburger color={"black"} duration={0.2} size={30} toggled={mobileNavOpened} toggle={switchNav} />
                    </div>
                </div>

                {/* links */}
                <div
                    className={`flex gap-5 ${mobileNavOpened ? "translate-x-[0%]" : "translate-x-[120%]"} flex-col bg-white fixed p-5  h-[calc(100vh-88px)] top-[88px] left-0 w-[100%] transition-transform sm:w-[calc(100%-60px)] sm:left-[30px] md:top-[initial] md:translate-x-[initial] md:h-auto md:relative md:flex-row md:items-center md:w-auto md:p-0`}
                >

                    <Link href="/">
                        <p className={`cursor-pointer ${router.pathname === "/" ? "text-me-pink" : "text-black"}`}>Home</p >
                    </Link>
                    <Link href="/about">
                        <p className={`cursor-pointer ${router.pathname === "/about" ? "text-me-pink" : "text-black"}`}>About</p >
                    </Link>

                    {hasTranslations ?
                        <div className="flex gap-2 items-center">
                            <p className={`cursor-pointer ${router.locale === "nl" ? "text-me-pink" : "text-black"}`} onClick={() => setLanguage("nl", router.locale)}>NL</p>
                            <p>|</p>
                            <p className={`cursor-pointer ${router.locale === "en" ? "text-me-pink" : "text-black"}`} onClick={() => setLanguage("en", router.locale)}>EN</p>
                        </div>
                        : null}

                    <Button className="w-auto" variant="primary">Contact</Button>
                </div>
            </div>
        </div>
    )

}