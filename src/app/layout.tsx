import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";

// Exo font for body text (secondary font)
const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EdUTec - Tech Careers & Qualifications",
  description: "Empowering Ireland's next generation of tech talent through hands-on STEAM experiences, industry partnerships, and real career pathways.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
