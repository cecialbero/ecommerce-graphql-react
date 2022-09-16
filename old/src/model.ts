export interface Variants {
    price: number,
    id: string
}

export interface Assets {
    source: string
}
  
export interface Items {
    id: string,
    description: string,
    name: string,
    variants: Variants[],
    assets: Assets[]
}
  
export interface Products {
    items: Items[]
}