import { IResponsePost, IResponsePosts } from "interfaces";

export const seedPosts: IResponsePosts = {
    data: {
        "meta": {
            "nextPage": null,
            "previousPage": null,
            "count": 1
        },
        "data": [
            {
                "status": "published",
                "created": "2022-11-09T02:29:20.474987Z",
                "updated": "2022-11-09T02:29:20.505446Z",
                "published": "2022-11-09T02:29:20.474678Z",
                "title": "Example Post",
                "slug": "example-post",
                "body": "<p>Welcome to ButterCMS! This an example blog post written using Butter.</p>\n<h3>Blog Engine Demo</h3>\n<p>Here's a helpful walkthrough of our Blog Engine solution.</p>\n<p>\n\n<!-- Outer Div sets maximum width for iframe on extra wide screens -->\n<div style=\"max-width:800px; height: auto; margin: auto;\">\n<!-- Inner div allows for responsive iframe scaling, including on mobile -->\n<div style=\"position: relative; padding-bottom: 56.25%; padding-top: 35px; height: 0; overflow: hidden; margin:auto;\">\n<iframe style=\"position: absolute; top:0; left: 0; width: 100%; height: 100%; z-index: 9999;\" src=\"https://www.youtube.com/embed/0dJbHy2XqoY\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"></iframe>\n</div>\n</div>\n<br /><a href=\"https://buttercms.com/demo/blog-engine-why-our-blog-engine/\">https://buttercms.com/demo/blog-engine-why-our-blog-engine/</a></p>\n<p></p>\n<h3>What's happening here?</h3>\n<p>If you're viewing this post from your website or command line, you've successfully made a request to&nbsp;the <a href=\"https://buttercms.com/docs/api\">Butter API</a>. If you haven't already, make sure you have our <a href=\"https://buttercms.com/docs/\">development guides</a> pulled up for step-by-step instructions on setting up Butter.</p>\n<h3>How does&nbsp;editing work?</h3>\n<p>Butter's WYSIWYG editor supports standard text formatting including headings, links, quotes, code, text alignment, and more. You can upload, crop, and resize images which are automatically hosted and delivered through a CDN (see below). You can also edit HTML directly when needed.</p>\n<figure class=\"image\"><img src=\"https://d2wzhk7xhrnk1x.cloudfront.net/rgPM9aHoSSKnjk44TQlD_butter-blog-post.jpg\" alt=\"Delivered to you via CDN\" />\n<figcaption>Delivered to you via CDN</figcaption>\n</figure>\n<h3>Can I use Butter as a full CMS for&nbsp;things other than a&nbsp;blog?</h3>\n<p>Yes. Butter can be used as a full CMS for managing dynamic content and creating pages across your entire website or app. Check out our <a href=\"https://buttercms.com/docs/\">development guides</a> for step-by-step tutorials on setting this up.</p>\n",
                "summary": "This is an example blog post. Pretty neat huh?",
                "seoTitle": "Example Post SEO Optimized Title",
                "metaDescription": "This is our example blog posts SEO optimized meta description.",
                "featuredImageAlt": "",
                "url": "example-post",
                "featuredImage": "https://cdn.buttercms.com/b68gHgkCQgmaZKebrJOb",
                "author": {
                    "bio": "",
                    "slug": "kuri-dev",
                    "email": "tasnacecilio13@gmail.com",
                    "title": "",
                    "lastName": "Dev",
                    "firstName": "Kuri",
                    "facebookUrl": "",
                    "linkedinUrl": "",
                    "instagramUrl": "",
                    "pinterestUrl": "",
                    "profileImage": "https://avatars.githubusercontent.com/u/35999555?v=4",
                    "twitterHandle": "@kuritj"
                },
                "tags": [
                    {
                        "name": "Example Tag",
                        "slug": "example-tag"
                    }
                ],
                "categories": [
                    {
                        "name": "Example Category",
                        "slug": "example-category"
                    }
                ]
            },
            {
                "status": "published",
                "created": "2022-11-09T02:29:20.474987Z",
                "updated": "2022-11-09T02:29:20.505446Z",
                "published": "2022-11-09T02:29:20.474678Z",
                "title": "Example Post",
                "slug": "example-post-2",
                "body": "<p>Welcome to ButterCMS! This an example blog post written using Butter.</p>\n<h3>Blog Engine Demo</h3>\n<p>Here's a helpful walkthrough of our Blog Engine solution.</p>\n<p>\n\n<!-- Outer Div sets maximum width for iframe on extra wide screens -->\n<div style=\"max-width:800px; height: auto; margin: auto;\">\n<!-- Inner div allows for responsive iframe scaling, including on mobile -->\n<div style=\"position: relative; padding-bottom: 56.25%; padding-top: 35px; height: 0; overflow: hidden; margin:auto;\">\n<iframe style=\"position: absolute; top:0; left: 0; width: 100%; height: 100%; z-index: 9999;\" src=\"https://www.youtube.com/embed/0dJbHy2XqoY\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"></iframe>\n</div>\n</div>\n<br /><a href=\"https://buttercms.com/demo/blog-engine-why-our-blog-engine/\">https://buttercms.com/demo/blog-engine-why-our-blog-engine/</a></p>\n<p></p>\n<h3>What's happening here?</h3>\n<p>If you're viewing this post from your website or command line, you've successfully made a request to&nbsp;the <a href=\"https://buttercms.com/docs/api\">Butter API</a>. If you haven't already, make sure you have our <a href=\"https://buttercms.com/docs/\">development guides</a> pulled up for step-by-step instructions on setting up Butter.</p>\n<h3>How does&nbsp;editing work?</h3>\n<p>Butter's WYSIWYG editor supports standard text formatting including headings, links, quotes, code, text alignment, and more. You can upload, crop, and resize images which are automatically hosted and delivered through a CDN (see below). You can also edit HTML directly when needed.</p>\n<figure class=\"image\"><img src=\"https://d2wzhk7xhrnk1x.cloudfront.net/rgPM9aHoSSKnjk44TQlD_butter-blog-post.jpg\" alt=\"Delivered to you via CDN\" />\n<figcaption>Delivered to you via CDN</figcaption>\n</figure>\n<h3>Can I use Butter as a full CMS for&nbsp;things other than a&nbsp;blog?</h3>\n<p>Yes. Butter can be used as a full CMS for managing dynamic content and creating pages across your entire website or app. Check out our <a href=\"https://buttercms.com/docs/\">development guides</a> for step-by-step tutorials on setting this up.</p>\n",
                "summary": "This is an example blog post. Pretty neat huh?",
                "seoTitle": "Example Post SEO Optimized Title",
                "metaDescription": "This is our example blog posts SEO optimized meta description.",
                "featuredImageAlt": "",
                "url": "example-post",
                "featuredImage": "https://cdn.buttercms.com/b68gHgkCQgmaZKebrJOb",
                "author": {
                    "bio": "",
                    "slug": "kuri-dev",
                    "email": "tasnacecilio13@gmail.com",
                    "title": "",
                    "lastName": "Dev",
                    "firstName": "Kuri",
                    "facebookUrl": "",
                    "linkedinUrl": "",
                    "instagramUrl": "",
                    "pinterestUrl": "",
                    "profileImage": "https://avatars.githubusercontent.com/u/35999555?v=4",
                    "twitterHandle": "@kuritj"
                },
                "tags": [
                    {
                        "name": "Example Tag",
                        "slug": "example-tag"
                    }
                ],
                "categories": [
                    {
                        "name": "Example Category",
                        "slug": "example-category"
                    }
                ]
            }
        ]
    }
}

export const seedPost: IResponsePost = {
    data: {
        "meta": {
            "nextPost": null,
            "previousPost": null
        },
        "data": seedPosts.data.data[0]
    }
}