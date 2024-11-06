import localFont from "next/font/local";
import ThemeProvider from "@/app/context/ThemeContext";
import "./globals.css";
import {Montserrat, Rubik_Wet_Paint} from 'next/font/google'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const montserat = Montserrat({
weight:'500',
style:'italic',
subsets:['latin'],
variable: '--font-montserat'
});
const rubik = Rubik_Wet_Paint({
weight:'400',
subsets:['latin'],
variable:'--font-rubik'
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${montserat.variable} font-montserat antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
