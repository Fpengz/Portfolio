import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Wang ZhouFu | Portfolio",
  description: "My personal projects and résumé",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main className="flex flex-col items-center justify-center h-full">{children}</main>
      </body>
    </html>
  );
}
