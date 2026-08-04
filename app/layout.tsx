import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visual Computing & Augmented Reality Lab.",
  description: "Visual Computing & Augmented Reality Lab. at Seoul Media Institute of Technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
