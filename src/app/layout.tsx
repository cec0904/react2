import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

// import ThemeToggleButton

const geist5ans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});