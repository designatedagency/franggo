import { SanityAsset } from "@sanity/asset-utils";
import { MenuItemType } from "./menu-item.type";

export type MenuGroupType = {
    title: string;
    image: SanityAsset;
    menuItems: MenuItemType[];
}