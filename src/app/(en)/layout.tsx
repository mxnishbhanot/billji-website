import type { Metadata, Viewport } from "next";
import "../globals.css";
import RootHtml from "@/components/RootHtml";
import { homeMetadata } from "@/lib/metadata";

/**
 * Root layout for the default (English) locale, which owns `/` and both legal
 * pages. Hindi has its own root layout in `(hi)/hi/layout.tsx`, because only a
 * root layout may render `<html lang>`.
 */
export const metadata: Metadata = homeMetadata("en");

export const viewport: Viewport = {
  themeColor: [
    // --color-surface from globals.css, light and dark.
    { media: "(prefers-color-scheme: light)", color: "#FFF8F5" },
    { media: "(prefers-color-scheme: dark)", color: "#14100E" },
  ],
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml locale="en">{children}</RootHtml>;
}
