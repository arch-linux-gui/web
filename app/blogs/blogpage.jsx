import { Link } from "next-view-transitions";
import { blogs } from "../source";
import Image from "next/image";

export default function BlogPage() {
  const posts = [...blogs.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white p-6 lg:pt-[8rem]">
      <header className="mb-12 text-center pt-[7rem] lg:pt-[2rem]">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
          ALG Blogs
        </h1>
      </header>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="block overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-800"
          >
            {post.data.cover && (
              <div className="overflow-hidden rounded-t-lg">
                <Image
                  src={post.data.cover}
                  alt={post.data.title}
                  height={48}
                  width={48}
                  className="w-full h-48 object-cover transition-transform transform hover:scale-110"
                  priority
                />
              </div>
            )}
            <div className="p-6 flex flex-col h-full">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {post.data.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {post.data.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.data.date ?? post.file.name).toDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
