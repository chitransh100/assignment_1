"use client";
import { useState } from "react";
import Image from "next/image";
import { FaUserEdit, FaWallet } from "react-icons/fa";

// Sample user and inventory data
const user = {
  name: "Chitransh Kumar",
  username: "@johndoe",
  bio: "Crypto enthusiast & NFT collector",
  avatar: "/avatar.jpg",
  wallet: "2.5 Coins",
};

const inventory = [
  { id: 1, name: "Legendary Sword", image: "/sword.jpg", rarity: "Legendary" },
  { id: 2, name: "Mystic Armor", image: "/armor.jpg", rarity: "Epic" },
  { id: 3, name: "Ancient Shield", image: "/sheild.jpg", rarity: "Rare" },
  { id: 4, name: "Phantom Bow", image: "/bow.jpg", rarity: "Legendary" },
];

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState(user.bio);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="container mx-auto max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={user.avatar}
            alt="Avatar"
            width={120}
            height={120}
            className="rounded-full border-4 border-gray-600"
          />
          <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
          <p className="text-gray-400">{user.username}</p>
          
          {/* Edit Bio Section */}
          {editing ? (
            <textarea
              className="mt-3 p-2 bg-gray-700 text-white rounded w-full"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          ) : (
            <p className="mt-3 text-gray-300">{bio}</p>
          )}

          <button
            className="btn btn-primary mt-4 flex items-center gap-2"
            onClick={() => setEditing(!editing)}
          >
            <FaUserEdit /> {editing ? "Save" : "Edit Profile"}
          </button>
        </div>

        {/* Wallet Section */}
        <div className="mt-6 flex justify-center items-center gap-4 bg-gray-700 p-4 rounded-lg">
          <FaWallet className="text-yellow-400 text-2xl" />
          <span className="text-lg font-semibold">{user.wallet}</span>
        </div>

        {/* Inventory Section */}
        <h2 className="text-xl font-semibold mt-6">🎒 Inventory</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {inventory.map((item) => (
            <div
              key={item.id}
              className="bg-gray-700 p-3 rounded-lg text-center shadow-lg hover:scale-105 transition-transform"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md mx-auto"
              />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-sm text-gray-400">Rarity: {item.rarity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
