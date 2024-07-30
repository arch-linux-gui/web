import createMDX from "fumadocs-mdx/config";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import {
  remarkDocGen,
  remarkInstall,
  fileGenerator,
  typescriptGenerator,
} from "fumadocs-docgen";
import { transformerTwoslash } from "fumadocs-twoslash";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const withMDX = createMDX({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
        {
          name: "fumadocs:remove-escape",
          code(element) {
            element.children.forEach((line) => {
              if (line.type !== "element") return;

              line.children.forEach((child) => {
                if (child.type !== "element") return;
                const textNode = child.children[0];
                if (!textNode || textNode.type !== "text") return;

                textNode.value = textNode.value.replace(/\[\\!code/g, "[!code");
              });
            });

            return element;
          },
        },
      ],
    },
    lastModifiedTime: "git",
    remarkPlugins: [
      remarkMath,
      [remarkInstall, { persist: { id: "package-manager" } }],
      [remarkDocGen, { generators: [typescriptGenerator(), fileGenerator()] }],
    ],
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
