import React, { FC } from "react";
import { createClassName } from "../../../lib/helpers/react-helpers";

type ButtonProps = {
    variant: "primary" | "secondary" | "tertiary" | "unstyled" | 'logo';
    textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
    fullsize?: boolean;
    loading?: boolean | undefined;  
}

export const Button: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const { variant, loading, textTransform,  ...filteredProps } = props;

    const variantClassNames = props.variant === "primary" ?
        // Primary
        `bg-franggo-orange text-white border-black border border-opacity-10 hover:brightness-110 active:brightness-90` :
        props.variant === "secondary" ?
            // Secondary
            `text-black border-stone-300 bg-stone-300 border hover:brightness-110 active:brightness-90` :
            // Tertiary
            props.variant === "tertiary" ?
                `text-purple-500 text-sm font-normal border-none py-0 hover:brightness-110 active:brightness-90` :
                // Logo
                props.variant === "logo" ?
                    `border-stone-300 border py-0.5 rounded-lg hover:brightness-110 active:brightness-90` :
                    // unstyled
                    `text-black text-sm font-normal border-none py-0 hover:brightness-110 active:brightness-90`;

    const textTransformClassNames = props.textTransform === "uppercase" ? 
        `uppercase` :
        props.textTransform === "lowercase" ?
            `lowercase` :
            props.textTransform === "capitalize" ?
                `capitalize` :
                `none`; 

    const fullsizeClassNames = props.fullsize ? `w-full` : ``;

    return (
        <button
            {...filteredProps}
            disabled={props.disabled || props.loading}
            className={createClassName(props, `flex rounded-lg select-none items-center justify-center disabled:opacity-50 px-5 py-4 font-extrabold leading-[18px] text-lg font-heading w-fit focus:outline-1 focus:outline-gray-300 transition-all ${variantClassNames} ${textTransformClassNames} ${fullsizeClassNames}`)}
        >
            {/* Loading icon */}
            {props.loading ? <img alt="loading" src="/ui/loader-round.svg" className="w-6 h-6 mr-2 invert" /> : null}

            {/* Children */}
            {props.children}
        </button>
    )
}