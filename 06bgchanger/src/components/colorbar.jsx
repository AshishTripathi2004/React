import { useState } from "react";

function ColorBar() {
  const [color, setColor] = useState("#000000"); // default black

  return (
    <div
      className="h-screen w-full flex items-end justify-center duration-200 pb-12"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center items-center rounded-2xl px-3 gap-3 py-4 bg-white w-auto shadow-lg">
        
        <button
          onClick={() => setColor("#ef4444")}
          className="text-xl font-bold text-white rounded-2xl px-4 py-2 w-28 bg-red-500"
        >
          Red
        </button>

        <button
          onClick={() => setColor("#22c55e")}
          className="text-xl font-bold text-white rounded-2xl px-4 py-2 w-28 bg-green-500"
        >
          Green
        </button>

        <button
          onClick={() => setColor("#3b82f6")}
          className="text-xl font-bold text-white rounded-2xl px-4 py-2 w-28 bg-blue-500"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("#e9d5ff")}
          className="text-xl font-bold text-black rounded-2xl px-4 py-2 w-28 bg-purple-200"
        >
          Lavender
        </button>

        <button
          onClick={() => setColor("#9ca3af")}
          className="text-xl font-bold text-black rounded-2xl px-4 py-2 w-28 bg-gray-400"
        >
          Gray
        </button>

        <button
          onClick={() => setColor("#facc15")}
          className="text-xl font-bold text-black rounded-2xl px-4 py-2 w-28 bg-yellow-400"
        >
          Yellow
        </button>

        <button
          onClick={() => setColor("#f97316")}
          className="text-xl font-bold text-white rounded-2xl px-4 py-2 w-28 bg-orange-500"
        >
          Orange
        </button>

        <button
          onClick={() => setColor("#f472b6")}
          className="text-xl font-bold text-white rounded-2xl px-4 py-2 w-28 bg-pink-400"
        >
          Pink
        </button>

        <button
          onClick={() => setColor("#14b8a6")}
          className="text-xl font-bold text-white rounded-2xl px-4 py-2 w-28 bg-teal-500"
        >
          Teal
        </button>

      </div>
    </div>
  );
}

export default ColorBar;
