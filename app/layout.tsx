import { DocsLayout } from "fumadocs-ui/layout";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { baseOptions } from "./layout.config";
import Logo from "./logoComp";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider
          search={{
            links: [
              ["Testing", "/testing/newtest"],
              ["Components", "/test"],
            ],
          }}
        >
          <DocsLayout {...baseOptions} nav={{ title: <Logo /> }}>
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
