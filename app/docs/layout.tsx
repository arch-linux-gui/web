import { docs } from "../source";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import ALGLogo from "../../public/alg-logo.png";
import Logo from "./logoComp";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={docs.pageTree} {...baseOptions} nav={{ title: <Logo /> }}>
      {children}
    </DocsLayout>
  );
}
