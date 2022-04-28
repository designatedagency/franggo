import { SanityDocument } from "@sanity/client";

export const findReferencedDocById = (arrayOfDocs: SanityDocument[], refDoc: SanityDocument) => {
    return arrayOfDocs.find(doc => {
        return doc._id === refDoc._ref;
    })
}

export const rotateArray = (arr: any[], reverse?: boolean) => {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
}