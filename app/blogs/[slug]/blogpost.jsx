import React from "react";
import { Link } from "next-view-transitions";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { buttonVariants } from "../../components/button";
import { Control } from "./page.client";
import { ChevronLeft } from "lucide-react";
import HeadCus from "../../JoinUs/[jobId]/head";

export default function BlogPost({
  title,
  description,
  author,
  date,
  url,
  toc,
  content,
}) {
  return (
    <div className={`min-h-screen`}>
      <HeadCus params={title} />
      <div className="m-3">
        <main className="container mx-auto px-4 py-8">
          <Link
            href="/blogs"
            className={`${buttonVariants({
              size: "sm",
              variant: "secondary",
            })} mb-4 flex items-center`}
          >
            <ChevronLeft size={16} className="mr-2" /> Back
          </Link>

          <div className="p-3 pl-6 border-2 rounded-lg">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="mb-2">{description}</p>
            <div className="flex items-center text-sm mb-2">
              <span className="mr-4">Author: {author}</span>
            </div>
            <div className="flex items-center text-sm mb-2">
              <span>Date: {new Date(date).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 mt-2 gap-4">
            <article className="lg:w-3/4 rounded-lg shadow-lg border-2 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="lg:hidden mb-6">
                  <InlineTOC items={toc} />
                </div>

                <div className="prose max-w-none">{content}</div>
              </div>
            </article>

            <aside className="hidden lg:block lg:w-1/4">
              <div className="sticky top-4 rounded-lg shadow-lg p-4">
                <h3 className="text-lg font-semibold mb-4">
                  Table of Contents
                </h3>
                <nav>
                  <ul className="space-y-2">
                    {toc.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.url}
                          className="text-blue-500 hover:underline"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
          <div className="m-4">
            <Control url={url} />
          </div>
        </main>
      </div>
    </div>
  );
}
