import "./globals.css";
import PageTransitionWarp from "./components/PageTransitionWarp";

export const metadata = {
  title: "Satyam Kumar | Digital Portfolio",
  description: "Space-themed interactive digital portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* 🚀 Warp trigger on every page change */}
        <PageTransitionWarp />
        {children}
      </body>
    </html>
  );
}
