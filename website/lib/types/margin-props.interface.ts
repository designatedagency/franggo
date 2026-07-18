export interface MarginProps {
    marginTop?: string | number;
    marginBottom?: string | number;
    marginRight?: string | number;
    marginLeft?: string | number;
    margin?: string | number;
}

export const marginPropsToStyle = (props: MarginProps) => {
    return `
       ${props.marginTop ? `margin-top: ${props.marginTop}${typeof props.marginTop !== "string" ? "px" : ""};` : ""}
       ${props.marginBottom ? `margin-bottom: ${props.marginBottom}${typeof props.marginBottom !== "string" ? "px" : ""};` : ""}
       ${props.marginRight ? `margin-right: ${props.marginRight}${typeof props.marginRight !== "string" ? "px" : ""};` : ""}
       ${props.marginLeft ? `margin-left: ${props.marginLeft}${typeof props.marginLeft !== "string" ? "px" : ""};` : ""}
       ${props.margin ? `margin: ${props.margin}${typeof props.margin !== "string" ? "px" : ""};` : ""}
    `
}