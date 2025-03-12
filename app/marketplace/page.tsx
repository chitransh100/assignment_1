"use client";
import { useState } from "react";
import Image from "next/image";
import { FaFilter, FaSearch, FaShoppingCart } from "react-icons/fa";

// Sample marketplace items
const items = [
  {
    id: 1,
    name: "Legendary Sword",
    image: "/sword.jpg",
    price: "0.25 ETH",
    rarity: "Legendary",
  },
  {
    id: 2,
    name: "Mystic Armor",
    image: "/armor.jpg",
    price: "0.40 ETH",
    rarity: "Epic",
  },
  {
    id: 3,
    name: "Ancient Shield",
    image: "/sheild.jpg",
    price: "0.15 ETH",
    rarity: "Rare",
  },
  {
    id: 4,
    name: "Phantom Bow",
    image: "/bow.jpg",
    price: "0.35 ETH",
    rarity: "Legendary",
  },
];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filter */}
        <aside className="lg:w-1/4 bg-gray-800 p-5 rounded-lg shadow-md hidden lg:block">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaFilter /> Filters
          </h2>
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Search</label>
            <div className="flex items-center bg-gray-700 p-2 rounded-md">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search items..."
                className="w-full bg-transparent outline-none text-white"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Rarity</label>
            <select className="w-full bg-gray-700 p-2 rounded-md">
              <option>All</option>
              <option>Legendary</option>
              <option>Epic</option>
              <option>Rare</option>
            </select>
          </div>
        </aside>

        {/* Marketplace Items Grid */}
        <main className="flex-1">
          <h1 className="text-3xl font-bold text-center mb-6">🔥 Marketplace</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {items
              .filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item) => (
                <div
                  key={item.id}
                  className="card bg-gray-800 max-w-sm mx-auto shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer rounded-lg"
                >
                  <figure className="px-6 pt-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-yellow-400 font-bold">{item.price}</p>
                    <p className="text-sm text-gray-400">Rarity: {item.rarity}</p>
                    <div className="mt-3">
                      <button className="btn btn-primary flex items-center gap-2 px-4 py-2">
                        <FaShoppingCart /> Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
  );
}
