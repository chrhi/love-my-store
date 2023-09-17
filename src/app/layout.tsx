import Providers from "@/components/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ShopeDz",
    template: `%s - ${"shopeDz"}`,
  },
  description: "this is ",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Server Actions",
    "Skateshop",
    "Skateboard",
    "Skateboarding",
    "Kickflip",
  ],

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
      <Toaster />
    </html>
  );
}
