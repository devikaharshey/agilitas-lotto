//Layout File
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
});
const spaceGrotest = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
});

export const metadata: Metadata = {
  title: "Agilitas",
  description: "A shoe brand that embodies movement and style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotest.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
