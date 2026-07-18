import React, { FC } from "react";
import { createClassName } from "../../../lib/helpers/react-helpers";
import { CareerItemType } from "../../../lib/types/components/career-item.type";
import { Button } from "../button";

export const JobBlock: FC<{
    block?: CareerItemType;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { block, ...filteredProps } = props;

    return <div {...filteredProps} className={createClassName(props, "relative")}>
        <div className="flex flex-col gap-5 justify-between sm:items-center sm:flex-row p-8 w-full max-w-page mx-auto">
            <div>
                <h2 className="mb-2">{block?.title}</h2>
                <p>{`${block?.location} | ${block?.hours}`}</p>
            </div>
            <a href={block?.url} target="_blank" rel="noreferrer">
                <Button className="bg-black text-white" variant="primary">Solliciteren</Button>
            </a>
        </div>
    </div>
}