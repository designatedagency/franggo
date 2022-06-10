import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";
import { LocationType } from "../../lib/types/types/location.type";
import { Button } from "../core/button";

export const Locaties: FC<{
    locations?: LocationType[];
    hideText?: boolean;
    hideButton?: boolean;
    sticker?: boolean;
    showMap?: boolean;
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { locations, hideText, hideButton, sticker, showMap, ...filteredProps } = props;

    return (
        <div {...filteredProps} className={createClassName(props, "flex flex-col items-center justify-center bg-franggo-orange relative")}>

            <img className="h-full rotate-180 w-auto absolute top-0 left-0 bottom-0" src="/graphic/right.svg" />
            {!hideText ?
                <div className="w-full max-w-page flex justify-start pt-8 px-8">
                    <img className="h-[80px]" src="/locaties-text.svg" />
                </div>
                : null}
            <div className="w-full max-w-page p-8 z-10">
                <div className={`bg-white p-8 grid ${showMap ? `grid-cols-1 ` : `grid-cols-1 md:grid-cols-2`}  gap-8`}>
                    {locations?.map((location, i) => {
                        return (
                            <div key={i} className={`grid  gap-8 ${showMap ? `grid-cols-1 md:grid-cols-2 ` : `grid-cols-1 `}`}>
                                <div className="flex">
                                    <img className="w-full h-64 md:h-full md:aspect-[3/2] object-cover" src={imageUrlFor(location.image)} /></div>
                                <div className="flex flex-col justify-between">
                                    <div className="flex flex-col gap-4">
                                        <p className="uppercase font-heading">Restaurant</p>
                                        <div className="flex flex-col sm:flex-row w-full justify-between gap-4 items-start sm:items-center">
                                            <h3 className="font-medium">{location.title}</h3>
                                            <div className="flex flex-row gap-4">
                                                {hideButton ? null : <Button variant="secondary">Meer info</Button>}
                                                <a href="#ft-open">
                                                    <Button variant="primary">Reserveren</Button>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <p>{location.street}</p>
                                            <p>{`${location.zip}, ${location.city}`}</p>
                                        </div>
                                    </div>
                                    {showMap ? <div className="h-[250px] mt-8">
                                        <iframe style={{ border: 0 }} width="100%" height="100%" src={`https://maps.google.com/maps?q=${location.street}-${location.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
                                    </div> : null}
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
            <img className="h-full w-auto absolute top-0 right-0 bottom-0" src="/graphic/right.svg" />

        </div>
    )
}