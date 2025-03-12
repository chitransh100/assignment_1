import Link from "next/link";
import { FaPlay, FaTrophy, FaBook, FaStore, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Home Screen Container */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 py-8">

        {/* Sales Banner */}
        <div className="w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-center p-5 rounded-xl shadow-lg animate-pulse">
          <h1 className="text-3xl font-bold">🔥 Welcome to Battle Arena! 🔥</h1>
          <p className="mt-2 text-lg">Join the fight & climb the leaderboard!</p>
        </div>

        {/* Main Menu Options */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-xs mt-8">
          <Link href="/play" className="flex flex-col items-center bg-blue-500 p-4 rounded-xl shadow-lg hover:bg-blue-600 transition">
            <FaPlay className="text-2xl" />
            <span className="mt-1">Play</span>
          </Link>

          <Link href="/leaderboard" className="flex flex-col items-center bg-green-500 p-4 rounded-xl shadow-lg hover:bg-green-600 transition">
            <FaTrophy className="text-2xl" />
            <span className="mt-1">Leaderboard</span>
          </Link>

          <Link href="/rules" className="flex flex-col items-center bg-yellow-500 p-4 rounded-xl shadow-lg hover:bg-yellow-600 transition">
            <FaBook className="text-2xl" />
            <span className="mt-1">Rules</span>
          </Link>

          <Link href="/marketplace" className="flex flex-col items-center bg-purple-500 p-4 rounded-xl shadow-lg hover:bg-purple-600 transition">
            <FaStore className="text-2xl" />
            <span className="mt-1">Marketplace</span>
          </Link>

          <Link href="/profile" className="flex flex-col items-center bg-red-500 col-span-2 p-4 rounded-xl shadow-lg hover:bg-red-600 transition">
            <FaUser className="text-2xl" />
            <span className="mt-1">Profile</span>
          </Link>

          
        </div>
      </div>
    </>
  );
}
