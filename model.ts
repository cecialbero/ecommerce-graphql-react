export type Variants = {
    id: string;
    price: number;
    priceWithTax?: number;
    currencyCode?: string;
}

export type Assets = {
    source: string;
}

export type Collections = {
    name: string;
}
  
export type Product = {
    id: string;
    description: string;
    name: string;
    variants: Variants[];
    assets: Assets[];
    collections?: Collections;
}
  
export type Products = {
    items: Product[];
}

export type filterSliceType = {
    filter: filterType
}

export type filterType = {
    term: string
}
