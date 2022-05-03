import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { Button } from "../core/button";

export const CTA: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div className={createClassName(props, "flex justify-center bg-[url(/tiles.svg)] bg-repeat-x bg-cover  bg-top")}>
            <div className="w-full max-w-page p-8 z-10">
                <div className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-8 justify-between">
                        <div className=" h-fit">
                            <p className="uppercase font-heading">Over ons</p>
                            <h1 className=" font-heading font-bold ">Franggo zelf proeven</h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 h-fit">
                            <div className="flex flex-col gap-8">
                                <div className="flex gap-4 items-center">
                                    <img src='/box.svg' className="w-8 h-8" />
                                    <h4 className="font-medium">Reserveren</h4>
                                </div>
                                <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
                                <Button variant="primary">Reserveren</Button>
                            </div>
                            <div className="flex flex-col gap-8 ">
                                <div className="flex gap-4 items-center">
                                    <img src='/truck.svg' className="w-8 h-8" />
                                    <h4 className="font-medium">Reserveren</h4>
                                </div>
                                <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
                                <Button variant="primary">Reserveren</Button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <img className="h-full w-full object-cover" src="https://s3-alpha-sig.figma.com/img/6b7d/8be0/3c0c6802a24ee58d67a8687f36c77602?Expires=1652659200&Signature=JEEiJPideDUh8BnGKkrkgmWSnFlhMKlcBjseBoNXHaOP2TP4SmpWHnN5hHHYOg3wm4iiGBPycnDLbdo7FzcrZgr9vzqAjltm-Z9CfB4fkTdaPlS9UHE0~xPe~87~x7rc-HwM04MXCevZ8xPp7RFbm3iovH3Xo0ztllETKWbdi6UsqTqNlt6f612~WTSBmAsX348vh-e4tLwBZ5GnOhi0j8x-B1H4iDEBmUiv8~drCARo19w4Bp-qXwE0LDvZp7Lfn7wwRTxB~fIsersGqtyJyFkFn5TY85rOWRIyCo5no8lmWrzT2NnDIvk5dVDm7Tgx5egPq4xr7kWJijWSY9~m8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                    </div>
                </div>
            </div>

        </div>
    )
}