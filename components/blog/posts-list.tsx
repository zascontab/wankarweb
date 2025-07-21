import { Post } from "../../interfaces";
import PostsPreview from "./post-preview";

interface Posts {
  posts: Post[]
}

export default function PostsList({
  posts
}: Posts) {
  return (<div className="col-12 col-lg-8 blog-roll-cards">
    <div className="row">
      {posts.map(post => <PostsPreview key={post.slug}
        title={post.title}
        featuredImage={post.featuredImage}
        published={post.published}
        author={post.author}
        slug={post.slug}
        summary={post.summary}
        featuredImageAlt={post.featuredImageAlt}
        tags={post.tags}
      />)}
      {!posts.length && (<div>No blog posts found.</div>)}
    </div>
  </div>)
}