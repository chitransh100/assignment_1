import { FaTrophy } from "react-icons/fa";

const leaderboardData = [
  { rank: 1, name: "Alice Johnson", score: 1200 },
  { rank: 2, name: "Bob Smith", score: 1100 },
  { rank: 3, name: "Charlie Brown", score: 1050 },
  { rank: 4, name: "David Lee", score: 980 },
  { rank: 5, name: "Emma Wilson", score: 920 },
];

export default function Leaderboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-8 overflow-hidden">
      {/* Title */}
      <div className="w-full max-w-2xl bg-gradient-to-r from-yellow-500 to-red-500 text-center p-5 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <FaTrophy className="text-yellow-300" /> Leaderboard
        </h1>
        <p className="mt-2 text-lg">See where you rank among the best!</p>
      </div>

      {/* Leaderboard Table */}
      <div className="w-full max-w-2xl mt-8 bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-y-auto max-h-96">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-yellow-400 text-lg border-b border-gray-700">
                <th className="py-3">Rank</th>
                <th className="py-3">Player</th>
                <th className="py-3">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((player) => (
                <tr key={player.rank} className="border-b border-gray-700">
                  <td className="py-3 text-center font-bold text-yellow-300">{player.rank}</td>
                  <td className="py-3">{player.name}</td>
                  <td className="py-3 text-center">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
