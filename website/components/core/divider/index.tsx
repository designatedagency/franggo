import React, { FC } from "react"
import { createClassName } from "../../../lib/helpers/react-helpers"

export const Divider: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div className={createClassName(props, "flex w-full items-center")}>
            <div className="w-full h-px bg-black opacity-10" />
            <span className="mx-4 whitespace-nowrap text-sm font-medium">{props.children}</span>
            <div className="w-full h-px bg-black opacity-10" />
        </div>
    )
}