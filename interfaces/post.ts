import { Category, Author, Tag } from "./";

export interface Post {
    url?:            string;
    created?:        Date | string;
    updated?:         Date | string;
    published:       Date | string;
    author:          Author;
    categories?:     Category[];
    tags?:           Tag[];
    featuredImage:   string;
    featuredImageAlt:string;
    slug:            string;
    title:           string;
    body?:           string;
    summary:         string;
    seoTitle?:       string;
    metaDescription?:string;
    status?:         string;
    rank?:           number;
}

export interface IResponsePosts {
    data:{
        meta: IPostMeta;
        data: Post[];
    }
}

export interface IPostMeta {
    nextPage:     null;
    previousPage: null;
    count:        number;
}

export interface IResponsePost {
    data: {
        meta: IMeta;
        data: Post;
    }
}

export interface IMeta {
    nextPost:     null;
    previousPost: null;
}
