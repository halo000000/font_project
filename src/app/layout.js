import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/them";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
const inter = Inter({ subsets: ["latin"] });
import { head } from "next/head"
export const metadata = {
  title: "k-Font",
  description: "downlod more than 1400+ kurdish fonts here withe k-Fonts",
  openGraph: {
    title: "k-Font",
    description: "downlod more than 1400+ kurdish fonts here withe k-Fonts",
    images: ["/bradar.svg"],
    siteName: "k-Font",
    locale: "en_US",
    type: "website",

  },
  icons:{
    icon: "/panda.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head> 
            <meta property="og:title" content="k-fonts"/>
            <meta property="og:description" content="Download 1400+ kurdish Fonts and many more thinges"/>
            <meta property="og:image" content="/bradar.svg"></meta>
            </head>
     
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>

          {children}

          </ThemeProvider>
         </body>
    </html>
  );
}

 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})