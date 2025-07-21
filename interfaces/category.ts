export interface IResponseCategories {
    data: {
        data: Category[]
    }
}

export interface Category {
    name: string;
    slug: string;
}