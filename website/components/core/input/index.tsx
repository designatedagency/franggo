import React, { FC } from "react";
import { createClassName } from "../../../lib/helpers/react-helpers";

type InputProps = {
    disabled?: boolean;
    errorMessage?: string;
}

export const Input: FC<InputProps & React.HTMLProps<HTMLInputElement>> = (props) => {
    const { disabled, errorMessage, ...filteredProps } = props;
    return (
        <div className={createClassName(props, "flex flex-col")}>
            {errorMessage ? <p className="text-xs text-red-500 mb-2">{errorMessage}</p> : null}
            <input {...filteredProps} disabled={disabled || filteredProps.readOnly} className="px-3 py-2 border rounded-lg border-black border-opacity-10 focus:outline-1 shadow focus:outline-purple-500 w-full read-only:focus:outline-none" />
        </div>
    )
}