import React, { FC } from "react";
import { createClassName } from "../../../lib/helpers/react-helpers";

type ButtonProps = {
    variant: "primary" | "secondary" | "tertiary" | "unstyled";
    loading?: boolean | undefined;
}

export const Button: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const { variant, loading, ...filteredProps } = props;

    const variantClassNames = props.variant === "primary" ?
        // Primary
        `bg-franggo-orange text-white border-black border border-opacity-10 hover:brightness-110 active:brightness-90` :
        props.variant === "secondary" ?
            // Secondary
            `text-black border-black border hover:bg-black hover:text-white active:bg-black` :
            // Tertiary
            props.variant === "tertiary" ?
                `text-purple-500 text-sm font-normal border-none py-0 hover:brightness-110 active:brightness-90` :
                // unstyled
                `text-black text-sm font-normal border-none py-0 hover:brightness-110 active:brightness-90`;

    return (
        <button
            {...filteredProps}
            disabled={props.disabled || props.loading}
            className={createClassName(props, `flex select-none items-center justify-center disabled:opacity-50 px-3 py-2 font-bold font-heading w-fit focus:outline-1 focus:outline-gray-300 transition-all ${variantClassNames}`)}
        >
            {/* Loading icon */}
            {props.loading ? <img alt="loading" src="/ui/loader-round.svg" className="w-6 h-6 mr-2 invert" /> : null}

            {/* Children */}
            {props.children}
        </button>
    )
}