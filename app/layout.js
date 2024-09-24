import "./globals.css";
import { Inter } from "next/font/google";
export const metadata = {
  title: "Scheduler",
  description: "Schedule now!",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white ">
          {children}
        </main>
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600 text-2xl">
            <p>Made with ❤ by Hiren</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
