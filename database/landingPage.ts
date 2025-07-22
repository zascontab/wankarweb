import { IResponsePages, IResponsePage } from "interfaces";

export const seedLandingPages: IResponsePages = {
    data: {
        data: [
            {
                "slug": "landing-page-with-components",
                "name": "Landing Page with Components",
                "published": "2022-11-09T02:29:46.997684Z",
                "updated": "2022-11-09T02:29:47.043046Z",
                "pageType": "landing-page",
                "fields": {
                    "seo": {
                        "title": "Wankar | Desarrollo de Software",
                        "description": "Wankar desarrolla software a medida"
                    },
                    "body": [
                        {
                            "type": "hero",
                            "fields": {
                                "headline": "WANKAR",
                                "subheadline": "Somos una empresa de desarrollo de software que ofrece facturación electrónica, sistemas de administración y desarrollamos cualquier módulo a tu medida.",
                                "image": "/svg/homePicture.svg",
                                "buttonLabel": "Tienda",
                                "buttonURL": "https://wankar.com",
                                "scrollAnchorID": "home"
                            }
                        },
                        {
                            "type": "plans",
                            "fields": {
                                "headline": "Nuestros Planes",
                                "subheadline": "Escoge la mejor opción para ti",
                                "scrollAnchorID": "plan",
                                "plans": [
                                    {
                                        "status": "published",
                                        "created": "2022-11-09T02:29:20.474987Z",
                                        "updated": "2022-11-09T02:29:20.505446Z",
                                        "published": "2022-11-09T02:29:20.474678Z",
                                        "title": "Plan 1",
                                        "slug": "plan1",
                                        "body": "<p>Welcome to ButterCMS! This an example blog post written using Butter.</p>\n<h3>Blog Engine Demo</h3>\n<p>Here's a helpful walkthrough of our Blog Engine solution.</p>\n<p>\n\n<!-- Outer Div sets maximum width for iframe on extra wide screens -->\n<div style=\"max-width:800px; height: auto; margin: auto;\">\n<!-- Inner div allows for responsive iframe scaling, including on mobile -->\n<div style=\"position: relative; padding-bottom: 56.25%; padding-top: 35px; height: 0; overflow: hidden; margin:auto;\">\n<iframe style=\"position: absolute; top:0; left: 0; width: 100%; height: 100%; z-index: 9999;\" src=\"https://www.youtube.com/embed/0dJbHy2XqoY\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"></iframe>\n</div>\n</div>\n<br /><a href=\"https://buttercms.com/demo/blog-engine-why-our-blog-engine/\">https://buttercms.com/demo/blog-engine-why-our-blog-engine/</a></p>\n<p></p>\n<h3>What's happening here?</h3>\n<p>If you're viewing this post from your website or command line, you've successfully made a request to&nbsp;the <a href=\"https://buttercms.com/docs/api\">Butter API</a>. If you haven't already, make sure you have our <a href=\"https://buttercms.com/docs/\">development guides</a> pulled up for step-by-step instructions on setting up Butter.</p>\n<h3>How does&nbsp;editing work?</h3>\n<p>Butter's WYSIWYG editor supports standard text formatting including headings, links, quotes, code, text alignment, and more. You can upload, crop, and resize images which are automatically hosted and delivered through a CDN (see below). You can also edit HTML directly when needed.</p>\n<figure class=\"image\"><img src=\"https://d2wzhk7xhrnk1x.cloudfront.net/rgPM9aHoSSKnjk44TQlD_butter-blog-post.jpg\" alt=\"Delivered to you via CDN\" />\n<figcaption>Delivered to you via CDN</figcaption>\n</figure>\n<h3>Can I use Butter as a full CMS for&nbsp;things other than a&nbsp;blog?</h3>\n<p>Yes. Butter can be used as a full CMS for managing dynamic content and creating pages across your entire website or app. Check out our <a href=\"https://buttercms.com/docs/\">development guides</a> for step-by-step tutorials on setting this up.</p>\n",
                                        "summary": "This is an example blog post. Pretty neat huh?",
                                        "seoTitle": "Example Post SEO Optimized Title",
                                        "metaDescription": "This is our example blog posts SEO optimized meta description.",
                                        "url": "plan1",
                                        price: '4.99',
                                        description: [
                                            'Facturación Electrónica'
                                        ]
                                    },
                                    {
                                        "status": "published",
                                        "created": "2022-11-09T02:29:20.474987Z",
                                        "updated": "2022-11-09T02:29:20.505446Z",
                                        "published": "2022-11-09T02:29:20.474678Z",
                                        "title": "Plan 2",
                                        "slug": "plan2",
                                        "body": "<p>Welcome to ButterCMS! This an example blog post written using Butter.</p>\n<h3>Blog Engine Demo</h3>\n<p>Here's a helpful walkthrough of our Blog Engine solution.</p>\n<p>\n\n<!-- Outer Div sets maximum width for iframe on extra wide screens -->\n<div style=\"max-width:800px; height: auto; margin: auto;\">\n<!-- Inner div allows for responsive iframe scaling, including on mobile -->\n<div style=\"position: relative; padding-bottom: 56.25%; padding-top: 35px; height: 0; overflow: hidden; margin:auto;\">\n<iframe style=\"position: absolute; top:0; left: 0; width: 100%; height: 100%; z-index: 9999;\" src=\"https://www.youtube.com/embed/0dJbHy2XqoY\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"></iframe>\n</div>\n</div>\n<br /><a href=\"https://buttercms.com/demo/blog-engine-why-our-blog-engine/\">https://buttercms.com/demo/blog-engine-why-our-blog-engine/</a></p>\n<p></p>\n<h3>What's happening here?</h3>\n<p>If you're viewing this post from your website or command line, you've successfully made a request to&nbsp;the <a href=\"https://buttercms.com/docs/api\">Butter API</a>. If you haven't already, make sure you have our <a href=\"https://buttercms.com/docs/\">development guides</a> pulled up for step-by-step instructions on setting up Butter.</p>\n<h3>How does&nbsp;editing work?</h3>\n<p>Butter's WYSIWYG editor supports standard text formatting including headings, links, quotes, code, text alignment, and more. You can upload, crop, and resize images which are automatically hosted and delivered through a CDN (see below). You can also edit HTML directly when needed.</p>\n<figure class=\"image\"><img src=\"https://d2wzhk7xhrnk1x.cloudfront.net/rgPM9aHoSSKnjk44TQlD_butter-blog-post.jpg\" alt=\"Delivered to you via CDN\" />\n<figcaption>Delivered to you via CDN</figcaption>\n</figure>\n<h3>Can I use Butter as a full CMS for&nbsp;things other than a&nbsp;blog?</h3>\n<p>Yes. Butter can be used as a full CMS for managing dynamic content and creating pages across your entire website or app. Check out our <a href=\"https://buttercms.com/docs/\">development guides</a> for step-by-step tutorials on setting this up.</p>\n",
                                        "summary": "This is an example blog post. Pretty neat huh?",
                                        "seoTitle": "Example Post SEO Optimized Title",
                                        "metaDescription": "This is our example blog posts SEO optimized meta description.",
                                        "url": "plan2",
                                        price: '8.99',
                                        description: [
                                            'Facturación Electrónica',
                                            'Contabilidad'
                                        ]
                                    },
                                    {
                                        "status": "published",
                                        "created": "2022-11-09T02:29:20.474987Z",
                                        "updated": "2022-11-09T02:29:20.505446Z",
                                        "published": "2022-11-09T02:29:20.474678Z",
                                        "title": "Plan 3",
                                        "slug": "plan3",
                                        "body": "<p>Welcome to ButterCMS! This an example blog post written using Butter.</p>\n<h3>Blog Engine Demo</h3>\n<p>Here's a helpful walkthrough of our Blog Engine solution.</p>\n<p>\n\n<!-- Outer Div sets maximum width for iframe on extra wide screens -->\n<div style=\"max-width:800px; height: auto; margin: auto;\">\n<!-- Inner div allows for responsive iframe scaling, including on mobile -->\n<div style=\"position: relative; padding-bottom: 56.25%; padding-top: 35px; height: 0; overflow: hidden; margin:auto;\">\n<iframe style=\"position: absolute; top:0; left: 0; width: 100%; height: 100%; z-index: 9999;\" src=\"https://www.youtube.com/embed/0dJbHy2XqoY\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"></iframe>\n</div>\n</div>\n<br /><a href=\"https://buttercms.com/demo/blog-engine-why-our-blog-engine/\">https://buttercms.com/demo/blog-engine-why-our-blog-engine/</a></p>\n<p></p>\n<h3>What's happening here?</h3>\n<p>If you're viewing this post from your website or command line, you've successfully made a request to&nbsp;the <a href=\"https://buttercms.com/docs/api\">Butter API</a>. If you haven't already, make sure you have our <a href=\"https://buttercms.com/docs/\">development guides</a> pulled up for step-by-step instructions on setting up Butter.</p>\n<h3>How does&nbsp;editing work?</h3>\n<p>Butter's WYSIWYG editor supports standard text formatting including headings, links, quotes, code, text alignment, and more. You can upload, crop, and resize images which are automatically hosted and delivered through a CDN (see below). You can also edit HTML directly when needed.</p>\n<figure class=\"image\"><img src=\"https://d2wzhk7xhrnk1x.cloudfront.net/rgPM9aHoSSKnjk44TQlD_butter-blog-post.jpg\" alt=\"Delivered to you via CDN\" />\n<figcaption>Delivered to you via CDN</figcaption>\n</figure>\n<h3>Can I use Butter as a full CMS for&nbsp;things other than a&nbsp;blog?</h3>\n<p>Yes. Butter can be used as a full CMS for managing dynamic content and creating pages across your entire website or app. Check out our <a href=\"https://buttercms.com/docs/\">development guides</a> for step-by-step tutorials on setting this up.</p>\n",
                                        "summary": "This is an example blog post. Pretty neat huh?",
                                        "seoTitle": "Example Post SEO Optimized Title",
                                        "metaDescription": "This is our example blog posts SEO optimized meta description.",
                                        "url": "plan3",
                                        price: '14.99',
                                        description: [
                                            'Facturación Electrónica',
                                            'Contabilidad',
                                            'Invertario'
                                        ]
                                    },
                                ]
                            }
                        },
                        {
                            "type": "two_column_with_image",
                            "fields": {
                                "headline": "Wankar",
                                "subheadline": "Conocer cualitativamente a nuestros clientes empezará a ser, a partir de ahora, aún más diferencial a la hora de vender.",
                                "image": "/svg/analytics.svg",
                                "imagePosition": "left",
                                "buttonLabel": "Update this Page in Butter",
                                "buttonURL": "https://buttercms.com/pages/",
                                "scrollAnchorID": "about"
                            }
                        },
                        {
                            "type": "features",
                            "fields": {
                                "headline": "Wankar",
                                "subheadline": "Software para la planificación de los recursos empresariales (ERP) compuesto por un conjunto integrado de módulos",
                                "scrollAnchorID": "features",
                                "features": [
                                    {
                                        "headline": "Facturación Electrónica",
                                        "description": "Build carousels, call to actions, testimonials, and much more. There's infinite flexbility.",
                                        "icon": "https://cdn.buttercms.com/f4ZshG9RmuASuJJYHFBv"
                                    },
                                    {
                                        "headline": "Gestión de inventarios",
                                        "description": "This sample page has four component types: hero, two column with image, features, and testimonials.",
                                        "icon": "https://cdn.buttercms.com/elFC8pGSRKS8a0x09sD2"
                                    },
                                    {
                                        "headline": "Gestión de Contabilidad",
                                        "description": "This page is just an example set of Components. You can build your own custom Component library!",
                                        "icon": "https://cdn.buttercms.com/k2yiGMDTFYHdlYAkY80Q"
                                    }
                                ]
                            }
                        },
                        // {
                        //     "type": "two_column_with_image",
                        //     "fields": {
                        //         "headline": "Customize this page",
                        //         "subheadline": "<p>Try updating the content of this page to reflect your own. You can also explore modifying these components or creating your own in your Butter dashboard.  Learn more about <a href=\"https://buttercms.com/kb/creating-editing-and-deleting-pages-and-page-types\">Page Types</a> and <a href=\"https://buttercms.com/kb/how-to-modify-components\">Components</a>.</p>",
                        //         "image": "https://cdn.buttercms.com/M3GrOAXRyWLZxIqtJPQ1",
                        //         "imagePosition": "right",
                        //         "buttonLabel": "Update this Page in Butter",
                        //         "buttonURL": "https://buttercms.com/pages/",
                        //         "scrollAnchorID": "tryit"
                        //     }
                        // },
                        {
                            "type": "testimonials",
                            "fields": {
                                "headline": "Lo que dicen nuestros clientes",
                                "scrollAnchorID": "testimonials",
                                "testimonial": [
                                    {
                                        "quote": "Implementación Exitosa de Contabilidad vinculado a inventario y factura electrónica",
                                        "name": "Ana B.",
                                        "title": "Riveras del Descanso"
                                    },
                                    {
                                        "quote": "Implementación Exitosa de Contabilidad,  factura electrónica",
                                        "name": "Angel A.",
                                        "title": "Camal 12 de noviembre"
                                    },
                                ]
                            }
                        }
                    ]
                }
            },
        ],
        meta: {
            count: 1,
            nextPage: 0,
            previousPage: 0
        }
    }
}

export const seedPage: IResponsePage = {
    data: {
        data: seedLandingPages.data.data[0]
    }
}