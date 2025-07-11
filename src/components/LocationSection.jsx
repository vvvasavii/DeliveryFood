import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";


const sampleRestaurants = [
  "Spice Villa", "Tandoori Junction", "Urban Biryani",
  "Momo Street", "Grill & Chill", "Masala Magic",
  "The Curry House", "Noodle Nirvana", "Kebab Nation",
  "BiteHub", "The Food Cartel", "Midnight Munchies"
];

const LocationSection = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 0) {
      // Simulate "random" restaurants by shuffling and showing 5
      const shuffled = sampleRestaurants.sort(() => 0.5 - Math.random());
      setSuggestions(shuffled.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  return (
    <section>
      <div className="mb-20 w-full text-center">
        <p className="text-gray-900 dark:text-white max-w-4xl mx-auto">
          Enter your location to discover the best restaurants near you, ready to serve your cravings anytime. Happy foodie life!
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex flex-col gap-2 w-full sm:w-auto max-w-md">
            <div className="flex items-center bg-white rounded-full px-4 py-2 text-black w-full">
              <FaMapMarkerAlt className="text-[#6A0A21] mr-2" />
              <input
                type="text"
                placeholder="Lucknow, India"
                value={input}
                onChange={handleChange}
                className="outline-none dark:outline-black w-full bg-transparent"
              />
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <ul className="bg-white dark:bg-gray-800 rounded-md shadow-md text-left px-4 py-2 text-sm">
                {suggestions.map((name, index) => (
                  <li key={index} className="py-1 border-b last:border-none border-gray-200 dark:border-gray-700">
                    🍽 {name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="bg-[#6A0A21] hover:bg-orange-600 transition text-white font-semibold rounded-full px-6 py-2">
            Find Foods
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
