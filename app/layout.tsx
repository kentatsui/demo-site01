import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo-site01",
  description: "でもデモサイト",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-dvh")}>
        <header className="container h-16 flex  items-center border-b justify-between">
          <h1 className="font-bold">LOGO</h1>
          <ul className="flex gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Button variant="ghost" asChild>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </header>

        {children}

        <footer className="container sticky top-full h-16 flex items-center border-t">
          <p>&copy; ken</p>
        </footer>
      </body>
    </html>
  );
}
