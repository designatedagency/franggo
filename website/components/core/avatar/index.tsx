import React, { FC } from "react"
import { createClassName } from "../../../lib/helpers/react-helpers"

export const Avatar: FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return (
        <img {...props} alt="avatar" className={createClassName(props, "w-8 h-8 rounded-full object-cover")} />
    )
}