import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sanchay Vasdev | Pediatrician",
  description: "This is about a cute pediatrician and his work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-50 dark:bg-gray-800">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-200">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
