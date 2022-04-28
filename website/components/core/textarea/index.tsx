import React, { FC } from "react";
import { createClassName } from "../../../lib/helpers/react-helpers";

type InputProps = {
    disabled?: boolean;
    errorMessage?: string;
}

export const TextArea: FC<InputProps & React.HTMLProps<HTMLTextAreaElement>> = (props) => {
    const { disabled, errorMessage, ...filteredProps } = props;
    return (
        <textarea {...filteredProps} disabled={disabled || filteredProps.readOnly} className={createClassName(props, "px-3 py-2 border rounded-lg border-black border-opacity-10 focus:outline-1 shadow focus:outline-purple-500 w-full read-only:focus:outline-none")}>{props.children || props.defaultValue}</textarea>
    )
}