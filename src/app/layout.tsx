import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Typexpert - Type Faster",
  description:
    "A webapp to help you in learn touchtyping & type faster. Practise typing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link
          rel="manifest"
          href="/manifest.json"
          // ../..//public
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
