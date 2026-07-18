import { Cross as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { setLanguage } from '../../../lib/helpers/language-helpers';
import { createClassName } from "../../../lib/helpers/react-helpers";
import { imageUrlFor } from '../../../lib/helpers/sanity-helpers';
import { GlobalType } from '../../../lib/types/base/global.type';
import { Button } from '../button';

export const Header: FC<{
    global?: GlobalType;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

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

    const { global, ...filteredProps } = props;

    return (
        <header {...filteredProps} className={createClassName(props, "sticky top-0 z-30 w-[100%] sm:py-4  bg-black ")}>
            <img src='/decor.svg' className='hidden lg:block w-full h-[82px] object-cover absolute right-0 top-0 left-0 bottom-0' />
            <div className="flex flex-col justify-between select-none p-4 mx-auto max-w-page z-10 relative  sm:py-0 sm:px-4 lg:flex-row">

                {/* mobile holder */}
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <img className="cursor-pointer h-8" src={global?.headerLogo ? imageUrlFor(global.headerLogo) : "/hor-logo.svg"} />
                    </Link>
                    <div className="flex lg:hidden">
                        <Hamburger color={"white"} duration={0.2} size={30} toggled={mobileNavOpened} toggle={switchNav} />
                    </div>
                </div>

                {/* links */}
                <div
                    className={`flex gap-5 ${mobileNavOpened ? "translate-x-[0%]" : "translate-x-[120%]"} bg-black lg:bg-transparent flex-col fixed p-5  h-[calc(100vh-80px)] top-[80px] left-0 w-[100%] transition-transform  lg:top-[initial] lg:translate-x-[initial] lg:h-auto lg:relative lg:flex-row lg:items-center lg:w-auto lg:p-0`}
                >

                    <Link href="/">
                        <p className={` transition-all text-3xl lg:text-xl font-heading font-medium hover:text-franggo-orange cursor-pointer ${router.pathname === "/" ? " text-franggo-orange " : "text-white"}`}>Home</p >
                    </Link>
                    <Link href="/menu">
                        <p className={` transition-all text-3xl lg:text-xl font-heading font-medium hover:text-franggo-orange cursor-pointer ${router.pathname === "/menu" ? " text-franggo-orange " : "text-white"}`}>Menu</p >
                    </Link>
                    <Link href="/locations">
                        <p className={`transition-all text-3xl lg:text-xl font-heading font-medium hover:text-franggo-orange cursor-pointer ${router.pathname === "/locations" ? " text-franggo-orange " : "text-white"}`}>Locations</p >
                    </Link>
                    <Link href="/order">
                        <p className={`transition-all text-3xl lg:text-xl font-heading font-medium hover:text-franggo-orange cursor-pointer ${router.pathname === "/order" ? " text-franggo-orange " : "text-white"}`}>Order</p >
                    </Link>
                    <Link href="/about">
                        <p className={`transition-all text-3xl lg:text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer ${router.pathname === "/about" ? " text-franggo-orange " : "text-white"}`}>About us</p >
                    </Link>
                    {/* <Link href="/career">
                        <p className={`transition-all text-3xl lg:text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer ${router.pathname === "/career" ? " text-franggo-orange " : "text-white"}`}>Career</p >
                    </Link>
                    <Link href="/faq">
                        <p className={`transition-all text-3xl lg:text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer ${router.pathname === "/faq" ? " text-franggo-orange " : "text-white"}`}>Faq</p >
                    </Link>
                    <Link href="/allergies">
                        <p className={`transition-all text-3xl lg:text-xl font-heading font-medium whitespace-nowrap hover:text-franggo-orange cursor-pointer ${router.pathname === "/allergies" ? " text-franggo-orange " : "text-white"}`}>Allergies</p >
                    </Link> */}
                    <Link href="/contact">
                        <p className={`transition-all text-3xl lg:text-xl font-heading font-medium hover:text-franggo-orange cursor-pointer ${router.pathname === "/contact" ? "text-franggo-orange" : "text-white"}`}>Contact</p >
                    </Link>

                    {hasTranslations ?
                        <div className="flex gap-2 items-center">
                            <p className={`cursor-pointer ${router.locale === "nl" ? "text-me-pink" : "text-black"}`} onClick={() => setLanguage("nl", router.locale)}>NL</p>
                            <p>|</p>
                            <p className={`cursor-pointer ${router.locale === "en" ? "text-me-pink" : "text-black"}`} onClick={() => setLanguage("en", router.locale)}>EN</p>
                        </div>
                        : null}

                    <div className='block lg:hidden'>
                        <Link href={'/order'} >
                            <Button className="w-auto text-3xl !text-white !p-0 mb-5" variant="unstyled">
                                <div className="relative mr-2 w-5 h-5">
                                    <img className="w-5 h-5 absolute transition-all left-0 group-hover:left-1" src="/icons/shopping-card.svg" />
                                </div>
                                <p className='font-heading font-bold text-3xl lg:text-xl '>
                                    Order
                                </p>
                            </Button>
                        </Link>

                        <a href="#zc-action-open">
                            <Button className="w-auto text-3xl " variant="primary">Reserve</Button>
                        </a>
                    </div>

                </div>
                <div className='hidden lg:flex gap-5 items-center justify-center'>
                    <Link href={'/order'} >
                        <Button className="w-auto text-3xl !text-white !p-0" variant="unstyled">
                            <div className="relative mr-2 w-5 h-5">
                                <img className="w-5 h-5 absolute transition-all left-0 group-hover:left-1" src="/icons/shopping-card.svg" />
                            </div>
                            <p className='font-heading font-bold text-3xl lg:text-xl '>
                                Order
                            </p>
                        </Button>
                    </Link>
                    <a href="#zc-action-open">
                        <Button className="w-auto text-xl" variant="primary">Reserve</Button>
                    </a>
                </div>
            </div>
        </header>
    )

}