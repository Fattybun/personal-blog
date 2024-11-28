import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
// import Footer from "@/components/layout/footer";
import Providers from "@/lib/prograss-bar-provider";
import { ThemeProvider } from "@/components/layout/theme-provider";

export const metadata: Metadata = {
  title: "Bunventures",
  description: "Sharing My Life Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />

            <main>{children}</main>

            {/* <Footer /> */}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
