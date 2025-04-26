import type { Metadata } from "next";
import { Navigation } from '@/components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
  title: "Weather App",
  description: "Application for viewing current weather and forecast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
