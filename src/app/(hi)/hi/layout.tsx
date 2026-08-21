import type { Metadata, Viewport } from "next";
import "../../globals.css";
import RootHtml from "@/components/RootHtml";
import { homeMetadata } from "@/lib/metadata";

/**
 * Root layout for Hindi, which owns `/hi`. Separate from the English one only
 * so that `<html lang>` is right — everything else it renders is shared.
 */
export const metadata: Metadata = homeMetadata("hi");

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF8F5" },
    { media: "(prefers-color-scheme: dark)", color: "#14100E" },
  ],
};

export default function HiLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml locale="hi">{children}</RootHtml>;
}
