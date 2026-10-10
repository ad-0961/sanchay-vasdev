"use client";

import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md absolute z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white p-2"
            >
              Sanchay <span className="text-pink-600">Vasdev</span>
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={changeTheme}
              className="ml-4 px-4 py-2 bg-zinc-950 dark:bg-gray-200 text-white dark:text-black rounded-md focus:outline-offset-[-5px] cursor-pointer"
            >
              {theme === "light" ? (
                <div className="flex items-center gap-2">
                  <Moon /> Mode
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sun /> Mode
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
