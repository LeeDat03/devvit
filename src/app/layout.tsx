import NavBar from "@/components/nav-bar";
import Provider from "@/components/provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Devvit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

const inter = Inter({
  subsets: ["latin-ext", "vietnamese"],
});

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased ", inter.className)}
    >
      <Provider>
        <body className="min-h-screen bg-slate-50 antialiased relative">
          <NavBar />

          {authModal}

          <div className="container max-w-7xl mx-auto h-full pt-24">
            {children}
          </div>
          <Toaster />
        </body>
      </Provider>
    </html>
  );
}
