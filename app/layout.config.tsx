import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { pageTree } from "@/app/source";
import { FaBook, FaGithub } from "react-icons/fa";
import { RiBookLine } from "react-icons/ri";

// shared configuration
export const baseOptions: DocsLayoutProps = {
  nav: {
    title: "ALG",
  },
  links: [
    {
      text: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/arch-linux-gui",
      active: "nested-url",
    },
    {
      text: "Blogs",
      url: "https://arkalinuxgui.org/blogs",
      icon: <RiBookLine />,
      type: "main",
    },
  ],
  tree: pageTree,
};

export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
