import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

export const metadata: Metadata = {
  title: "ACM TechTalk 2026 | Flagship Technical Event by ACM AJCE",
  description:
    "Join ACM TechTalk 2026: the flagship technical event by ACM AJCE, featuring industry leaders, cutting-edge talks, and an electrifying atmosphere. Register now!",
  keywords: [
    "ACM TechTalk 2026",
    "ACM AJCE",
    "technical event",
    "tech conference",
    "Kerala",
  ],
  openGraph: {
    title: "ACM TechTalk 2026 | ACM AJCE",
    description:
      "The flagship technical event of ACM AJCE. Inspiring talks, world-class speakers, and unforgettable experiences await you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="grid-bg" />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
