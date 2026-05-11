import type { Metadata } from "next";
import "./globals.css"; // We will create this next to handle your Navy/Cyan theme

export const metadata: Metadata = {
  title: "Shreem Analytics | AI-Driven SME Growth",
  description: "Premium AI analytics and growth consulting for Gujarat SMEs by Bhavesh Suryavanshi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
