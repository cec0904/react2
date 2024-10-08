import {Inter} from "next/font/google";
import "./globals.css";
import RootHeader from "@/components/RootHeader";



const inter = Inter({ subsets: ["latin"]});

export const metadata = {
    title: {
        default: "Hello Next.js !!!",
        template: "Daelim.com"
    },
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return(
        <html lang="ko">
            <body>
                <head><h1>=== Header ===</h1></head>
                <Main>{children}</Main>
                <footer><h2>=== Footer ===</h2></footer>
            </body>
        </html>
    )
} 