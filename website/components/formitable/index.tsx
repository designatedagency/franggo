import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";
import { ContactBlockType } from "../../lib/types/components/contact-block.type";
import { FaqItemType } from "../../lib/types/components/faq-item.type";
import { Button } from "../core/button";

import Script from 'next/script'

export const Formitable: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    return (
        <div className={createClassName(props, `relative`)}>

            <div className="ft-widget-b2" data-restaurant="aaab3fa3" data-open="1500" data-open-mobile="false" data-color="#f37529" data-language="auto" data-tag="Website" data-toolbar="true" data-toolbar-mobile="true"></div>

            <Script
                id="will-fail"
                src="/formitable.js"
                onError={(e) => {
                    console.error('Script failed to load', e)
                }}
            />

        </div>
    )
}