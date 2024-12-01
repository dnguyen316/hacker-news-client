import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopNav from "./_components/topnav/topnav";
import Sidebar from "./_components/sidebar/sidebar";

const notoSans = localFont({
  src: "./fonts/NotoSans-VariableFont_wdth,wght.ttf",
  variable: "--font-noto-sans",
  weight: "500 600 900",
});
const notoMono = localFont({
  src: "./fonts/NotoSans-Italic-VariableFont_wdth,wght.ttf",
  variable: "--font-noto-mono",
  weight: "500 600 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${notoMono.variable} antialiased`}>
        <TopNav />
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
