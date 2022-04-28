import React, { FC } from "react";
import { createClassName } from "../../../lib/helpers/react-helpers";

export const Card: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
    return <div className={createClassName(props, "p-4 border rounded-lg border-black border-opacity-10 shadow")}>{props.children}</div>
}