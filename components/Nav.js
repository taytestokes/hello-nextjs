import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/blog">
            <a>Blog</a>
        </Link>
    </div>
);

export default Nav;