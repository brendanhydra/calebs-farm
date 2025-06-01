"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setTimeout(() => setFade(true), 50);
  }, []);
  return (
    <main
      className={`min-h-screen bg-[#f3faf5] py-8 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-green-800 mb-8 font-serif">
          Welcome to Caleb's Farm!
        </h1>
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg mb-8 flex justify-center bg-white">
            <img
              src="/uploads/image_3.png"
              alt="Caleb's Farm - I Love Farming!"
              width={486}
              height={528}
              style={{ borderRadius: '1rem', maxWidth: '100%', height: 'auto', objectFit: 'cover', boxShadow: '0 4px 20px 0 rgba(0,0,0,0.05)'}}
            />
          </div>
          {/* Farmer Tour Packages Section */}
          <div className="bg-yellow-50 rounded-lg p-8 shadow-md border-2 border-yellow-300 mb-8">
            <h2 className="text-2xl font-bold text-yellow-800 mb-3">Farmer Tour Packages</h2>
            <p className="text-gray-800 mb-4 text-lg">Join Caleb as he gives you a tour of the farm—he'll come with you and "smash" with you along your ride, showing all his favorite spots and tricks!</p>
            <ul className="space-y-3 text-left">
              <li><span className="font-semibold text-yellow-700">Early Smash</span> — <span className="font-bold">$40</span></li>
              <li><span className="font-semibold text-yellow-700">Fat Smash</span> — <span className="font-bold">$80</span></li>
              <li><span className="font-semibold text-yellow-700">Big Daddy Gobble</span> — <span className="font-bold">$700</span></li>
            </ul>
          </div>
          {/* Birthday Farm Gifts Section */}
          <div className="bg-white rounded-lg p-8 shadow-md border-2 border-green-200 mb-6">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Looking for the perfect birthday gift for a young farmer? Caleb's Farm offers special birthday packages featuring authentic farm toys and gifts!
            </p>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-green-600 mb-3">🚜 Featured Birthday Gifts:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Premium Tractor Toy:</strong> Realistic green farm tractor with working wheels and authentic details
                </li>
                <li>
                  <strong>Farm Animal Set:</strong> Collection of barnyard friends including cows, pigs, chickens, and sheep
                </li>
                <li>
                  <strong>Mini Hay Bales:</strong> Soft plush hay bales perfect for imaginative farm play
                </li>
                <li>
                  <strong>Farmer's Hat:</strong> Just like Caleb's! Authentic straw hat sized for little farmers
                </li>
                <li>
                  <strong>Seed Planting Kit:</strong> Real seeds and pots to start their own mini garden
                </li>
              </ul>
            </div>
            <p className="text-green-600 font-semibold mt-6 text-center">
              🎉 Special birthday packages available with personalized farm tours! 🎉
            </p>
          </div>
          {/* Caleb's Dad Section */}
          <div className="bg-green-50 rounded-lg p-6 shadow mb-8 border border-green-100">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">With a Little Help from Dad</h3>
            <p className="text-gray-700 text-lg">Caleb's cute dad helped him create the farm and brings all the best ideas. Every barn, bale, and birthday bash has a little dad's magic in it!</p>
          </div>
        </div>
        {/* Secret Diddy Parties Section */}
        <div className="w-full flex justify-center">
          <div className="bg-black rounded-xl shadow-lg max-w-2xl w-full p-8 my-10">
            <h3 className="text-2xl font-bold text-white mb-2">The Secret Diddy Parties</h3>
            <p className="text-white/90 text-lg">Beneath Caleb's Farm, secret diddy parties happen just for those who know where to look. Fun, laughter, and surprise await below the fields!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
