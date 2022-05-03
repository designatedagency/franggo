import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { LocationType } from "../../lib/types/types/location.type";
import { Button } from "../core/button";

export const Locaties: FC<{
    locations?: LocationType[];
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { locations, ...filteredProps } = props;

    return (
        <div {...filteredProps} className={createClassName(props, "flex flex-col items-center justify-center bg-franggo-orange relative")}>
            <img className="h-full rotate-180 w-auto absolute top-0 left-0 bottom-0" src="/graphic/right.svg" />
            <div className="w-full max-w-page flex justify-start px-8">
                <img className="h-[80px]" src="/locaties-text.svg" />
            </div>
            <div className="w-full max-w-page p-8 z-10">
                <div className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {locations?.map((location, i) => {
                        return (
                            <div key={i} className="flex flex-col gap-8">
                                <img className="w-full" src="https://s3-alpha-sig.figma.com/img/f960/4325/8f8ad64015b7096c4239b993fbb8d6c1?Expires=1652659200&Signature=CvdmJZBTQ6cFst-VpMajYwDO9Ur4pYrqI-8zfIEXw~S2qnI4R~f6mzSyknqEerVad9SnPjTc6haX0c8uy286upTZJtdbJMVkPEMaXrZZV58yL~oDxxpK10ckWfguFjB0wnBm1VJ-nzRNcKwugRs3kbWd5qpfaWrVk8y8bRCmzTDH049IHrA6H-4WLgeeOwQCVZhnUnnN21pwd7kiQKT6AMrchuR6urnFyeWuHJ562ivZFlBIZWWfKor1ulNHyMQ0R0v0xq0g8aVZMxio4ybs5ebTFHNKFWnEEjN9OEZ-os9kRmTasHV9rnf0AcdzEm~sAyp5-KLmeDAssgkg30uikg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                                <div className="flex flex-col gap-4">
                                    <p className="uppercase font-heading">Restaurant</p>
                                    <div className="flex flex-col sm:flex-row w-full justify-between gap-4 items-start sm:items-center">
                                        <h3 className="font-medium">{location.title}</h3>
                                        <div className="flex flex-row gap-4">
                                            <Button variant="secondary">Meer info</Button>
                                            <Button variant="primary">Reserveren</Button>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{location.street}</p>
                                        <p>{`${location.zip}, ${location.city}`}</p>
                                    </div>
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