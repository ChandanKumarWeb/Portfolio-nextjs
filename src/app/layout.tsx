import type { Metadata } from "next";
import { ThemeProvider } from "./Components/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chandan Kumar | Frontend Developer — React, Next.js & Angular Expert",
  description:
    "Portfolio of Chandan Kumar — a passionate frontend developer specializing in React, Next.js, and Angular. Building responsive, performant, and beautiful web applications.",
  keywords: [
    "Chandan Kumar",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "Web Developer",
    "Portfolio",
    "Jaipur",
    "India",
    "UI/UX",
    "Freelancer",
  ],
  authors: [{ name: "Chandan Kumar" }],
  creator: "Chandan Kumar",
  openGraph: {
    title: "Chandan Kumar | Frontend Developer",
    description:
      "Passionate frontend developer specializing in React, Next.js, and Angular. Building responsive, performant web experiences.",
    type: "website",
    locale: "en_IN",
    siteName: "Chandan Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandan Kumar | Frontend Developer",
    description:
      "Passionate frontend developer specializing in React, Next.js, and Angular.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-center" />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

