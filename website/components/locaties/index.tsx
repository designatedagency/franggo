import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { LocationType } from "../../lib/types/types/location.type";
import { Location } from "./location";

export const Locaties: FC<{
    locations?: LocationType[];
    hideText?: boolean;
    hideButton?: boolean;
    sticker?: boolean;
    showMap?: boolean;
    paddingY?: boolean;
    hasDescription?: boolean;
    showAsAccordion?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { locations, hideText, hideButton, sticker, showMap, paddingY, hasDescription, ...filteredProps } = props;

    return (
        <div {...filteredProps} id="locations" className={createClassName(props, `flex flex-col px-5 pb-10 ${paddingY ? 'py-10' : ''} items-center justify-center bg-white relative`)}>

            {!hideText ?
                <div className="w-full max-w-page flex justify-start mb-8 pt-[53px]">
                    <h2 className="font-extrabold text-4xl uppercase">Our locations</h2>
                </div>
                : null}
            <div className="w-full max-w-page  z-10">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
                    {locations?.sort((a, b) => b.comingSoon ? -1 : 0)?.map((location, i) => <Location key={i} showMap={showMap} hideButton={hideButton}  hasDescription={hasDescription} location={location}></Location>)}
                </div>
            </div>
            {/* <img className="h-full w-auto absolute top-0 right-0 bottom-0" src="/rightnew.png" /> */}

        </div>
    )
}