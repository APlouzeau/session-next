import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="hover:text-gray-400">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="login" className="hover:text-gray-400">
                        Login
                    </Link>
                </li>
                <li>
                    <Link href="#" className="hover:text-gray-400">
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
