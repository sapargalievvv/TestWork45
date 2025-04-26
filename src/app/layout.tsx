import type { Metadata } from "next";
import { Navigation } from '@/components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
  title: "Погодное приложение",
  description: "Приложение для просмотра текущей погоды и прогноза",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
