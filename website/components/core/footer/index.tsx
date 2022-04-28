import React, { FC } from "react";
import { createClassName } from "../../../lib/helpers/react-helpers";

export const Footer: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    return (
        <footer className={createClassName(props, "flex items-center justify-center w-full h-24 border-t")}>
            <a
                className="flex items-center justify-center"
                href="https://wearemiles.nl"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <img src="/miles.svg" alt="Miles Logo" className="h-4 ml-2" />
            </a>
        </footer>
    )

}