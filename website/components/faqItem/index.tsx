import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";
import { ContactBlockType } from "../../lib/types/components/contact-block.type";
import { FaqItemType } from "../../lib/types/components/faq-item.type";
import { Button } from "../core/button";

export const FaqItem: FC<{
    faq?: FaqItemType;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { faq, ...filteredProps } = props;

    return (
        <div {...filteredProps} className={createClassName(props, `relative w-full p-4 md:p-8 md:py-4`)}>

            <details>
                <summary>
                    <h3 className="mb-2 ">{faq?.question}</h3>
                </summary>
                <div>
                    <p>{faq?.answer}</p>
                </div>
            </details>

        </div>
    )
}