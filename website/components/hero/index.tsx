import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { Button } from "../core/button";

export const Hero: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div className={createClassName(props, "h-[60vh] flex justify-center bg-cover bg-[url(https://s3-alpha-sig.figma.com/img/c815/fd92/dca93ee907df338d6097e45268e62a7c?Expires=1652659200&Signature=NMnuyN5dv1kbsv3q1mzD-5znsyhK6yKOZRtAPzkvf-aAwOxBQUWZsF7p3zO0cVqPnWej1zVCJZ5SJ-zXmFGd1QJPtY2vhi8agDkdAvCdKuD9rFhr43nTkHr5LiwOS66-vblK7O~FKZP-ZKtJmrNuSD5bycipSo2FjbiMuPcKaIfMy7bS71MdnPpP7rFpT-xwec-DAFFFIxXNwg9i~P~dpMQiE8dQhqa4vDpoQzikU~Zq54jB2c3IlYVVpX9HwGeONnE0el8Ef5Gn2hexY~bSvcWhjmgjY3scrqSSgl~LGDuQtr0m5aTk0QqobXoVHRo0XC7MuONl5gHNEyQ6USoRNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)]")}>
            <div className="flex justify-center w-full max-w-page p-8 z-10 relative">
                <img className="w-full md:w-[70%] object-contain" src="/hero-logo.svg" />
                <div className="absolute w-[200px] h-[200px] right-12 bottom-12">
                    <img className="w-[100px] object-contain absolute left-[50px] top-[0px]" src="/chicken.svg" />
                    <img className="animate-spin-slow w-[200px] object-contain absolute left-0 bottom-0" src="/scrolldown.svg" />
                </div>
            </div>

        </div>
    )
}