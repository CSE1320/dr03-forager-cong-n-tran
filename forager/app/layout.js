import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Forager",
  description: "A CSE3340 Interaction Design Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap"
            rel="stylesheet"
          />
      </head>
      <body
        className={`font-nunito ${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
        {/* <NavBar /> */}
      </body>
    </html>
  );
}
