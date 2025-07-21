import Image from "next/image"
import Link from "next/link";

import HumanDate from "../../components/human-date"
import AuthorCard from '../../components/author-card';

import { Post } from "../../interfaces";

export default function PostsPreview({
  title,
  featuredImage,
  featuredImageAlt,
  published,
  author,
  tags,
  summary,
  slug
}: Post) {
  return (
    <div className="col-12 col-lg-6">
      <div className="blog-roll-card">
        <div className="blog-roll-card-meta">
          <h2 className="blog-roll-card-header"><Link href={`/blog/${slug}`}><a>{title}</a></Link></h2>
          <ul className="blog-roll-card-meta-info">
            <li>
              <AuthorCard author={author} />
            </li>
            <li>
              <i className="lni lni-calendar"></i> <HumanDate dateString={published} />
            </li>
            {tags?.map(tag => (
              <li key={tag.slug}>
                <Link href={`/blog/tag/${tag.slug}`}>
                  <a><i className="lni lni-tag"></i> {tag.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {featuredImage && (
          <div className="single-post-thumbnail">
            <Image
              src={featuredImage}
              alt={featuredImageAlt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className="blog-roll-card-body prose" dangerouslySetInnerHTML={{ __html: summary }}>
        </div>
        <div className="blog-roll-card-footer text-center">
          <Link href={`/blog/${slug}`}><a className="main-btn btn-hover">Read More</a></Link>
        </div>
      </div>
    </div>
  )
}