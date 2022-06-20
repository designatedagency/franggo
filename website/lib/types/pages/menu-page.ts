import { Meta } from "../base/meta.type";
import { CTABlockType } from "../components/cta-block.type";
import { DoubleBlockType } from "../components/double-block.type";
import { MenuGroupType } from "../types/menu-group.type";
import { MenuItemType } from "../types/menu-item.type";

export type MenuPageType = {
    meta: Meta;
    textAndImageBlock: DoubleBlockType;
    ctaBlock: CTABlockType;
    menuTop?: MenuGroupType[];
    supplements?: string[];
    sauces?: string[];
    normalSauces?: MenuItemType[];
    menuBottom?: MenuGroupType[];
}