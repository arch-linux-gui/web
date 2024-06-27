import { type BaseLayoutProps } from "fumadocs-ui/layout";
import { FaBloggerB, FaGithub } from "react-icons/fa";

// basic configuration here
export const baseOptions: BaseLayoutProps = {
  links: [
    {
      text: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/arch-linux-gui",
      active: "nested-url",
    },
    {
      text: "Blogs",
      url: "/blogs",
      icon: <FaBloggerB />,
      type: "secondary",
    },
  ],
};
