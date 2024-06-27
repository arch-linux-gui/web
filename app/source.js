import { map } from "../.map";
import { createMDXSource, defaultSchemas } from "fumadocs-mdx";
import { z } from "zod";
import { loader } from "fumadocs-core/source";

export const docs = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map),
});

export const blogs = loader({
  baseUrl: "/blogs",
  rootDir: "blogs",
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        author: z.string(),
        cover: z.string().optional(),
        date: z.string().date().or(z.date()).optional(),
      }),
    },
  }),
});
