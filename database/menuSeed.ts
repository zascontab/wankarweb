import { IResponseMenu } from "interfaces";

export const seedMainMenu: IResponseMenu = {
    data: {
        "meta": {
            "count": 1,
            "nextPage": null,
            "previousPage": null
        },
        "data": {
            "navigationMenu": [
                {
                    "meta": {
                        "id": 328647
                    },
                    "name": "Main menu",
                    "menuItems": [
                        {
                            "meta": {
                                "id": 328641
                            },
                            "label": "Inicio",
                            "url": "#home"
                        },
                        {
                            "meta": {
                                "id": 328648
                            },
                            "label": "Planes",
                            "url": "#plan"
                        },
                        {
                            "meta": {
                                "id": 328642
                            },
                            "label": "Sobre Nosotros",
                            "url": "#about"
                        },
                        {
                            "meta": {
                                "id": 328643
                            },
                            "label": "Características",
                            "url": "#features"
                        },
                        // {
                        //     "meta": {
                        //         "id": 328644
                        //     },
                        //     "label": "Try It",
                        //     "url": "#tryit"
                        // },
                        {
                            "meta": {
                                "id": 328645
                            },
                            "label": "Opiniones",
                            "url": "#testimonials"
                        },
                        // {
                        //     "meta": {
                        //         "id": 328646
                        //     },
                        //     "label": "Blog",
                        //     "url": "#blog"
                        // }
                    ]
                }
            ]
        }
    }
}