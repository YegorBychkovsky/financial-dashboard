import "./globals.css";

export const metadata = {
  title: "Financial statistic",
  description: "Financial Performance Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
