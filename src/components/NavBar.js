import Link from "next/link";

export default function NavBar() {
    return(
        <div>
            <Link href="/">io Home</Link>
            <Link href="/test">io/ test Home</Link>
            <Link href="/foo">foo Home</Link>
            <Link href="/foo/about">About</Link>
        </div>
    )
}