"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Mountain, Landmark, Shirt, Home, Bus, MapPin, UtensilsCrossed, Building } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "בית", icon: Home },
    { href: "/hostels", label: "הוסטלים", icon: Building },
    { href: "/tours", label: "טיולים", icon: Mountain },
    { href: "/transport", label: "תחבורה", icon: Bus },
    { href: "/map", label: "מפה", icon: MapPin },
    { href: "/restaurants", label: "מסעדות", icon: UtensilsCrossed },
    { href: "/bank", label: "כסף", icon: Landmark },
    { href: "/laundry", label: "מכבסות", icon: Shirt },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
              <Mountain className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl text-green-700">Eitan Pucon</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-green-600 transition-colors font-medium flex items-center gap-1"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 py-3 text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
