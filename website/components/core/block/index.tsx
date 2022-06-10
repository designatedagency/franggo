import React, { FC } from "react";
import { createClassName } from "../../../lib/helpers/react-helpers";

export const Block: FC<{
    small?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { small, ...filteredProps } = props;

    return <div {...filteredProps} className={createClassName(props, "relative")}>
        <div className={`absolute h-full object-cover w-[50px] z-10 top-0 left-0 hidden md:block bg-contain ${small ? "bg-[url('/block/left-small.svg')]" : "bg-[url('/sides.png')]"} bg-repeat-y`} />
        <div className="z-20 relative">
            {props.children}
        </div>
        <div className={`absolute h-full object-cover w-[50px] z-10 top-0 right-0 hidden md:block bg-contain ${small ? "bg-[url('/block/right-small.svg')]" : "bg-[url('/sides.png')]"}  bg-repeat-y`} />
    </div>
}