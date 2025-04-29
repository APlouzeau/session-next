import Link from "next/link";
import { getSession } from "../lib/session";

export default async function Navbar() {
    const session = await getSession();
    let isLog = false;
    if (session.get("session")?.value == "1") {
        isLog = true;
    }
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="hover:text-gray-400">
                        Home
                    </Link>
                </li>
                {!isLog ? (
                    <li>
                        <Link href="login" className="hover:text-gray-400">
                            Login
                        </Link>
                    </li>
                ) : (
                    <li>
                        <Link href="#" className="hover:text-gray-400">
                            Logout
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
