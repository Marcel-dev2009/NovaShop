 import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";
export const metadata: Metadata = {
  title: "NovaShop",
  description: "An E-commerce web app powered by Nextjs an strip for seamless buying and selling on the internet of our products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
  
     <body className="duration-300  overflow-x-hidden overflow-y-auto bg-white dark:bg-black dark:text-white text-black">
         <ThemeProvider enableSystem defaultTheme="system" attribute="class">
        <main className="overflow-x-hidden">
            <Header/>
       
          {children}
      

        </main>
            </ThemeProvider>
      </body>
     
    </html>
  );
}
