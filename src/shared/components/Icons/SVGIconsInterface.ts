export type typeFillRule = "nonzero" | "evenodd" | "inherit" | undefined;

export interface SVGIconsInterface {
    width?: string,
    height?: string,
    fill?: string,
    viewBox?: string,
    fillRule?: typeFillRule
}