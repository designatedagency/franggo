import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { imageUrlFor } from "../../lib/helpers/sanity-helpers";
import { MenuGroupType } from "../../lib/types/types/menu-group.type";
import { Button } from "../core/button";

export const Menu: FC<{
    menuGroups?: MenuGroupType[];
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { menuGroups, ...filteredProps } = props;

    return (
        <div {...filteredProps} className={createClassName(props, "flex flex-col items-center justify-center bg-white relative")}>
            <img className="h-full w-[40px] sm:w-auto absolute top-0 rotate-180 left-0 bottom-0" src="/graphic/right-black.svg" />
            <div className="w-full max-w-page flex flex-col md:flex-row items-start md:items-center gap-8 justify-between pt-8 px-8">
                <img className="h-[80px]" src="/menu-text.svg" />
                <p className="">Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.</p>
            </div>
            <div className="w-full max-w-page p-8 z-10">
                <div className=" p-0 md:p-8 grid grid-cols-1  gap-8">
                    {menuGroups?.map((menuGroup, i) => {
                        return (
                            <div key={i} className="flex w-full gap-8 items-center justify-end border-b border-black pb-8">

                                <div className="flex flex-col sm:flex-row w-full gap-12 justify-start items-start sm:items-center">
                                    <div className="flex flex-col gap-4">
                                        <p className=" text-center font-bold text-xl font-heading whitespace-nowrap">{menuGroup.title}</p>
                                        <img className="w-[150px] h-[150px] max-w-none object-cover" src={imageUrlFor(menuGroup.image)} /></div>
                                    <div className="flex flex-col gap-4 w-full">
                                        {menuGroup.menuItems.map((menuItem, i) => {
                                            return (
                                                <div key={i} className="flex flex-col md:flex-row justify-between gap-2 md:gap-8 items-start md:items-center ">
                                                    <h4 className="text-3xl">{menuItem.title}</h4>
                                                    <p className="font-heading text-xl whitespace-nowrap">€ {menuItem.price}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <img className="h-full w-[40px] sm:w-auto absolute top-0 right-0 bottom-0" src="/graphic/right-black.svg" />

        </div>
    )
}