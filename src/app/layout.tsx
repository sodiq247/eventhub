import type { Metadata } from "next";
import { inter, outfit } from "@/lib/fonts";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Eventit — Premium Event Management Platform",
    template: "%s | Eventit",
  },
  description:
    "Create, manage, and experience extraordinary events. From weddings to concerts, sports tournaments to corporate conferences — Eventit makes organizing and attending events effortless.",
  keywords: [
    "event management",
    "event platform",
    "ticket sales",
    "event registration",
    "membership management",
    "QR check-in",
    "event planning",
    "event organizer",
  ],
  authors: [{ name: "Eventit" }],
  openGraph: {
    title: "Eventit — Premium Event Management Platform",
    description:
      "Create, manage, and experience extraordinary events with Eventit.",
    url: "https://eventit.com",
    siteName: "Eventit",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eventit — Premium Event Management Platform",
    description:
      "Create, manage, and experience extraordinary events with Eventit.",
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
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <SmoothScrollProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
