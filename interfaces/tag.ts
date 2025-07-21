export interface IResponseTags {
    data: {
        data: Tag[]
    }
}

export interface Tag {
    name: string;
    slug: string;
}