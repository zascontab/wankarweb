import { Category, Author, Tag } from ".";

export interface IPlan {
    url?:            string;
    created?:        Date | string;
    updated?:        Date | string;
    published:       Date | string;
    featuredImage?:  string;
    featuredImageAlt?:string;
    slug:            string;
    title:           string;
    body?:           string;
    summary:         string;
    seoTitle?:       string;
    metaDescription?:string;
    status?:         string;
    rank?:           number;
    description:     string[];
    price:           string;
}

export interface IResponsePlans {
    data:{
        meta: IPlanMeta;
        data: IPlan[];
    }
}

export interface IPlanMeta {
    nextPage:     null;
    previousPage: null;
    count:        number;
}

export interface IResponsePlan {
    data: {
        meta: IPlanMeta;
        data: IPlan;
    }
}

export interface IPlanMeta {
    nextPlan:     null;
    previousPlan: null;
}
