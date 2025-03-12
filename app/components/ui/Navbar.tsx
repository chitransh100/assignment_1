"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCrown, FaCoins } from "react-icons/fa";

const user = {
  username: "Chitransh",
  rank: "Elite ",
  currency: "25 Coins",
  avatar: "/avatar.jpg",
};

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Company Name */}
        <Link href="/">
          <span className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300 transition">
            WebTree
          </span>
        </Link>

        {/* Right: User Profile Section */}
        <div
          className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => router.push("/profile")}
        >
          <div className="text-right">
            <p className="text-white font-semibold">{user.username}</p>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <FaCrown className="text-yellow-400" /> {user.rank}
            </p>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <FaCoins className="text-yellow-500" /> {user.currency}
            </p>
          </div>
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={50}
            height={50}
            className="rounded-full border-2 border-gray-600"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
