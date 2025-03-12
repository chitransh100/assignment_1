"use client";
import { useState } from "react";
import { FaBook, FaChevronDown, FaChevronUp } from "react-icons/fa";

const rulesData = [
  {
    title: "1. Fair Play",
    description: "Cheating, exploiting bugs, or using unauthorized tools is strictly prohibited.",
  },
  {
    title: "2. Respect Others",
    description: "Offensive language, harassment, or toxic behavior will not be tolerated.",
  },
  {
    title: "3. No AFK or Idle Play",
    description: "Players must be active during matches to ensure fair competition.",
  },
  {
    title: "4. One Account Per Player",
    description: "Multiple accounts are not allowed to prevent unfair advantages.",
  },
  {
    title: "5. Reporting Issues",
    description: "Any bugs or rule violations should be reported to the moderators immediately.",
  },
];

export default function Rules() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleRule = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-8 overflow-hidden">
      {/* Title */}
      <div className="w-full max-w-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-center p-5 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <FaBook className="text-yellow-300" /> Game Rules
        </h1>
        <p className="mt-2 text-lg">Make sure to follow these rules for a fair game!</p>
      </div>

      {/* Rules List */}
      <div className="w-full max-w-2xl mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        {rulesData.map((rule, index) => (
          <div key={index} className="mb-4 border-b border-gray-700">
            <button
              className="flex justify-between items-center w-full py-3 text-left text-lg font-semibold hover:text-blue-400 transition"
              onClick={() => toggleRule(index)}
            >
              {rule.title}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <p className="text-gray-300 mt-2 p-3 bg-gray-700 rounded">{rule.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
