import posts from "../../content/blog/index";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function BlogIndex() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 pt-16 mt-12">
      <h1 className="font-ttcommons text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-3 text-center">Mazah Blog</h1>
        <p className="text-center text-muted-foreground mb-10">
          Learn more and get inspired with recipes and tips to reduce food waste at home.
        </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-2xl"
              />
            )}
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-green-700 hover:underline mb-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 text-sm mb-3">{post.description}</p>
              <p className="text-gray-400 text-xs mt-4">{post.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}