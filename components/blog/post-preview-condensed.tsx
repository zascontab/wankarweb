import Link from "next/link";
import Image from 'next/image'
import { Post } from "../../interfaces";

export default function PostPreviewCondensed({
  title,
  featuredImage,
  featuredImageAlt,
  summary,
  slug,
}: Post) {
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-blog">
        {featuredImage && (
          <div className="blog-header">
            <Image
              src={featuredImage}
              alt={featuredImageAlt}
              layout='fill'
              objectFit='cover'
            />
          </div>
        )}
        <div className="blog-body">
          <h5 className="package-name">
            <Link href={`/blog/${slug}`}>
              <a>{title}</a>
            </Link>
          </h5>
          <p>{summary}</p>
        </div>
        <div className="blog-footer">
          <Link href={`/blog/${slug}`}>
            <a className="main-btn btn-hover">Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
