export interface Meta {
    count: number;
    nextPage: null;
    previousPage: null;
}

export interface PageFeature {
    headline: string,
    description: string,
    icon: string
}

export interface PageFeatures {
    headline: string,
    subheadline: string,
    features: PageFeature[],
    scrollAnchorId: string
}

export interface PageHero {
    headline: string,
    subheadline: string,
    image: string,
    buttonLabel: string,
    buttonUrl: string,
    scrollAnchorId: string
}