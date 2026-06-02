import "./globals.css";
import React from "react";

export const metadata = {
  title: "SmartPractice — Service Discontinued",
  description: "SmartPractice active services have been discontinued as of June 2026.",
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
