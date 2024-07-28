import { notFound } from "next/navigation";
import { blogs } from "../../source";
import BlogPost from "./blogpost";

export const dynamicParams = false;

export default function Page({ params }) {
  const page = blogs.getPage([params.slug]);
  if (!page) notFound();

  const Content = page.data.exports.default;
  const renderedContent = <Content />;

  return (
    <BlogPost
      title={page.data.title}
      description={page.data.description}
      author={page.data.author}
      date={page.data.date ?? page.file.name}
      url={page.url}
      toc={page.data.exports.toc}
      content={renderedContent}
    />
  );
}

export function generateStaticParams() {
  return blogs.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
