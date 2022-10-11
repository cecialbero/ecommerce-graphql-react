export interface Variants {
    id: string;
    price: number;
    priceWithTax?: number;
    currencyCode?: string;
}

export interface Assets {
    source: string;
}

export interface Collections {
    name: string;
}
  
export interface Product {
    id: string;
    description: string;
    name: string;
    variants: Variants[];
    assets: Assets[];
    collections?: Collections;
}
  
export interface Products {
    items: Product[];
}
