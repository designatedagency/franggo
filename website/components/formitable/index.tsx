import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import Script from 'next/script'

export const Formitable: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
  return (<div className={ createClassName(props, `relative`) }>
    <div
      className="zc-widget-config"
      data-multivenue="opid_RJ0KQ0ZN"
      data-filter-rids="386075,385673"
    ></div>
    <Script
      id="zenchef-sdk"
      src="https://sdk.zenchef.com/v1/sdk.min.js"
      strategy="lazyOnload"
      onError={ ( e ) => {
        console.error('Script failed to load', e)
      } }
    />
  </div>)
}