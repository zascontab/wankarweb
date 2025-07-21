import { IPlan } from "./";

export interface IResponsePage {
    data:
    {
        data: IPage;
    }
}
export interface IResponsePages {
    data:
    {
        meta: IPageMeta;
        data: IPage[];
    }
}

export interface IPageMeta {
    nextPage:     number;
    previousPage: number;
    count:        number;
}

export interface IPages {
    pages:    IPage[];
    prevPage: number;
    nextPage: number;
}

export interface IPage {
    slug:      string;
    name:      string;
    published: Date | string;
    updated:   Date | string;
    pageType:  string;
    fields:    IPageFields;
}

export interface IPageFields {
    seo:  ISEO;
    body: IBody[];
}

export interface IBody {
    type:   string;
    fields: IBodyFields;
}

export interface IBodyFields {
    headline:       string;
    subheadline?:   string;
    image?:         string;
    buttonLabel?:   string;
    buttonURL?:     string;
    scrollAnchorID: string;
    imagePosition?: string;
    features?:      IFeature[];
    testimonial?:   ITestimonial[];
    plans?:         IPlan[];
}

export interface IFeature {
    headline:    string;
    description: string;
    icon:        string;
}

export interface ITestimonial {
    quote: string;
    name:  string;
    title: string;
}

export interface ISEO {
    title:       string;
    description: string;
}