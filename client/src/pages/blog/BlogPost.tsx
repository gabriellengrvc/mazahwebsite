import { useParams } from "wouter";
import posts from "../../content/blog/index";
import Likes from "../../components/blog/likes";
import Comments from "../../components/blog/comments";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <p className="p-4 text-center">Post not found</p>;

  const PostComponent = post.content;

  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-green mt-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-10">{post.date}</p>
      <PostComponent />
      <div className="mt-8">
        <Likes postSlug={post.slug} />
        <Comments postSlug={post.slug} />
      </div>
    </article>
  );
}
