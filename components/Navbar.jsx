import Link from "next/link";

export default function Navbar(){
    return(
        <div>
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
            <Link href="/posts">
                Posts
            </Link>

        </div>
    )
}