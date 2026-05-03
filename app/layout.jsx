import "./globals.css";

export const metadata = {
  title: "Taiwanese at Boston",
  description: "Official website for Taiwanese at Boston and 912 Taiwan Gathering at Fenway.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
