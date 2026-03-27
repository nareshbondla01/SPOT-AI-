import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "AI POWERED EVENT ORGANIZER & PLANNER",
  description: "Discover and Manage Events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-gradient-to-br from-gray-950 via-zinc-900 to-stone-900 text-white`}
      >
        {/* Header */}
        <header className="p-4 text-center text-xl font-bold">
          AI Event Organizer
        </header>

        {/* Main Content */}
        <main className="relative min-h-screen container mx-auto pt-20">
          <div className="relative z-10">{children}</div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800/50 py-6 text-center">
          Manage and Create Events with AI Powered Event Organizer
        </footer>
      </body>
    </html>
  );
}