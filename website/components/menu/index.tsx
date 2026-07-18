import React, { FC } from "react";
import { createClassName } from "../../lib/helpers/react-helpers";
import { MenuPageType } from "../../lib/types/pages/menu-page";
import { MenuGroupType } from "../../lib/types/types/menu-group.type";

export const Menu: FC<{
    page?: MenuPageType
    menuGroups?: MenuGroupType[];
} & React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {

    const { menuGroups, page, ...filteredProps } = props;

    console.log(page);


    return (
        <div {...filteredProps} className={createClassName(props, "flex flex-col items-center justify-center bg-white relative")}>

            <div className="my-5 md:hidden" />
            <div className="w-full h-[40px] absolute left-0 top-5 bg-[url('/sides-mobile.svg')] bg-repeat-x bg-contain md:hidden " />

            <div className="w-full max-w-page flex flex-col md:flex-row items-start md:items-center gap-8 justify-between px-8 py-16 pb-2.5">
                <img className="h-[80px]" src="/menu-text.svg" />
            </div>
            <div className="relative w-full max-w-page p-8 z-10">

                <div className="hidden h-full w-[60px] absolute top-0 left-0 bottom-0 bg-[url('/sides.png')] bg-repeat-y bg-contain md:block" />

                <div className=" p-0 md:p-8 grid grid-cols-1  gap-8">
                    {page?.menuTop?.map((menuGroup, i) => {
                        return (
                            <div key={i} className="flex flex-col w-full gap-8 items-center justify-end border-b border-[#B1B1B1] pb-8">

                                <div className="top flex flex-col w-full gap-[20px] justify-start items-start ">
                                    <div className="group flex flex-row justify-between w-full gap-4">
                                        <p className=" text-center font-bold text-3xl uppercase font-heading whitespace-nowrap">{menuGroup.title}</p>
                                        {menuGroup.groupPrice ? <p className=" text-center text-3xl font-heading whitespace-nowrap text-franggo-orange">€ {menuGroup.groupPrice}</p> : null}
                                    </div>
                                    <div className="flex flex-col gap-5 w-full">
                                        {menuGroup.groupPrice ? menuGroup.menuItems.map((menuItem, i) => {
                                            return (
                                                <div key={i} className="item flex flex-col md:flex-row justify-between gap-2 md:gap-8 items-start md:items-center ">
                                                    <h4 className="text-base md:text-lg lg:text-xl">{menuItem.title}</h4>
                                                </div>
                                            )
                                        }) : menuGroup.menuItems.map((menuItem, i) => {
                                            return (
                                                <div key={i} className="item flex flex-row md:flex-row justify-between gap-6 md:gap-8 items-end md:items-center">
                                                    <h4 className="text-base font-heading font-semibold md:text-lg lg:text-xl">{menuItem.title}</h4>
                                                    <p className="font-heading font-normal text-base md:text-lg lg:text-xl whitespace-nowrap text-franggo-orange">€ {menuItem.price}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>


                            </div>
                        )
                    })}
                    {page?.supplements ?
                        <div className="w-full h-full p-8 bg-franggo-green text-white">
                            <h2 className="mb-5">*SIDE CHOICE / ESCOLHA DE SIDE;</h2>
                            {page?.supplements.map((supplement, i) => {
                                return (
                                    <h3 className="mb-1 font-medium" key={i}>{supplement}</h3>
                                )
                            })}
                        </div>
                        : null}
                    {page?.sauces ?
                        <div className="w-full h-full p-3 sm:p-8 bg-white border-2 border-red-600 text-red-600">
                            <div className="flex justify-between items-start">
                                <h2 className="mb-5 sm:w-full">SAUCES / MOLHOS</h2>
                                <h2 className="mb-5 text-right w-full">1st SAUCE FREE<br />1st MOLHO LIVRE</h2>
                            </div>
                            {page?.sauces.map((supplement, i) => {
                                return (
                                    <h3 className="mb-1 font-medium" key={i}>{supplement}</h3>
                                )
                            })}
                            {page?.normalSauces ?

                                page?.normalSauces.map((supplement, i) => {
                                    return (
                                        <div key={i} className="flex flex-row justify-between  gap-2 md:gap-8 items-start md:items-center ">
                                            <h4 className="text-xl font-normal text-black">{supplement.title}</h4>
                                            <p className="font-heading text-xl whitespace-nowrap text-franggo-orange">€ {supplement.price}</p>
                                        </div>
                                    )
                                })

                                : null}
                        </div>
                        : null}

                    {page?.menuBottom?.map((menuGroup, i) => {
                        return (
                            <div key={i} className="flex flex-col w-full gap-8 items-center justify-end border-b border-[#B1B1B1] pb-8">

                                <div className="flex flex-col w-full gap-[20px] justify-start items-start ">
                                    <div className="flex flex-row justify-between w-full gap-4">
                                        <p className=" text-center font-bold text-3xl font-heading whitespace-nowrap">{menuGroup.title}</p>
                                        {menuGroup.groupPrice ? <p className=" text-center text-3xl font-heading whitespace-nowrap">€ {menuGroup.groupPrice}</p> : null}
                                    </div>
                                    <div className="flex flex-col gap-5 w-full">
                                        {menuGroup.groupPrice ? menuGroup.menuItems.map((menuItem, i) => {
                                            return (
                                                <div key={i} className="flex flex-col md:flex-row justify-between gap-2 md:gap-8 items-start md:items-center ">
                                                    <h4 className="text-xl">{menuItem.title}</h4>
                                                </div>
                                            )
                                        }) : menuGroup.menuItems.map((menuItem, i) => {
                                            return (
                                                <div key={i} className="flex flex-row justify-between gap-5 md:gap-8 items-start md:items-center ">
                                                    <h4 className="text-base font-heading font-semibold md:text-lg lg:text-xl">{menuItem.title}</h4>
                                                    <p className="font-heading font-normal text-base md:text-lg lg:text-xl whitespace-nowrap text-franggo-orange">€ {menuItem.price}</p>
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
            <div className="hidden h-full w-[60px] absolute top-0 right-0 bottom-0 bg-[url('/sides.png')] bg-repeat-y bg-contain md:block" />

            <div className="my-5 md:hidden" />
            <div className="w-full h-[40px] absolute left-0 bottom-5 bg-[url('/sides-mobile.svg')] bg-repeat-x bg-contain md:hidden " />


        </div>
    )
}