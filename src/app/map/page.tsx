"use client";

import { useState } from "react";
import { MapPin, Home, Landmark, Shirt, UtensilsCrossed, Mountain, ExternalLink } from "lucide-react";

interface Location {
  id: string;
  name: string;
  category: string;
  icon: typeof MapPin;
  color: string;
  description: string;
  mapsUrl?: string;
  position: { x: number; y: number };
}

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const locations: Location[] = [
    {
      id: "hostel",
      name: "Eitan Hostel",
      category: "הוסטל",
      icon: Home,
      color: "bg-green-500",
      description: "ההוסטל שלנו - Arauco 272",
      mapsUrl: "https://maps.app.goo.gl/arauco272pucon",
      position: { x: 50, y: 45 }
    },
    {
      id: "bank1",
      name: "Banco Estado - Eltit",
      category: "בנק",
      icon: Landmark,
      color: "bg-orange-500",
      description: "כספומט עם העמלה הנמוכה - בתוך סופר Eltit",
      mapsUrl: "https://maps.app.goo.gl/WENJ2PFUb2k9WUEx9",
      position: { x: 35, y: 40 }
    },
    {
      id: "bank2",
      name: "Banco Estado",
      category: "בנק",
      icon: Landmark,
      color: "bg-orange-500",
      description: "ליד הבנק - 2 הכספומטים הראשונים משמאל",
      mapsUrl: "https://maps.app.goo.gl/7RZahtS1ASsBtLPo6",
      position: { x: 55, y: 35 }
    },
    {
      id: "casino",
      name: "הקזינו",
      category: "משיכת כסף",
      icon: Landmark,
      color: "bg-purple-500",
      description: "משיכת כסף ללא עמלה - נפתח ב-18:00",
      mapsUrl: "https://maps.app.goo.gl/cqgN4xd6KDBNLbpB7",
      position: { x: 70, y: 55 }
    },
    {
      id: "laundry",
      name: "מכבסה",
      category: "מכבסה",
      icon: Shirt,
      color: "bg-pink-500",
      description: "מכבסה במרכז העיר",
      position: { x: 45, y: 60 }
    },
    {
      id: "sushi",
      name: "Sushi Mora",
      category: "מסעדה",
      icon: UtensilsCrossed,
      color: "bg-red-500",
      description: "סושי מומלץ",
      position: { x: 40, y: 50 }
    },
    {
      id: "israeli",
      name: "Just Delicious",
      category: "מסעדה",
      icon: UtensilsCrossed,
      color: "bg-blue-500",
      description: "אוכל ישראלי",
      position: { x: 60, y: 45 }
    },
    {
      id: "volcano",
      name: "הר געש וויאריקה",
      category: "אטרקציה",
      icon: Mountain,
      color: "bg-red-600",
      description: "ההר הגעש - נקודת ציון",
      position: { x: 80, y: 20 }
    }
  ];

  const categories = [
    { name: "הוסטל", color: "bg-green-500", icon: Home },
    { name: "בנק", color: "bg-orange-500", icon: Landmark },
    { name: "מכבסה", color: "bg-pink-500", icon: Shirt },
    { name: "מסעדה", color: "bg-red-500", icon: UtensilsCrossed },
    { name: "אטרקציה", color: "bg-red-600", icon: Mountain },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <MapPin className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">מפת פוקון</h1>
          </div>
          <p className="text-xl opacity-90">
            כל המקומות החשובים במקום אחד
          </p>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <h3 className="font-bold text-gray-700 mb-3">מקרא:</h3>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`${cat.color} w-4 h-4 rounded-full`}></div>
                <span className="text-sm text-gray-600">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <div className="relative bg-gradient-to-br from-green-100 via-emerald-50 to-blue-100 rounded-xl overflow-hidden" style={{ aspectRatio: '16/10' }}>
            {/* Decorative elements */}
            <div className="absolute inset-0">
              {/* Lake */}
              <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-blue-300/50 to-transparent rounded-tl-full"></div>
              
              {/* Mountain silhouette */}
              <svg className="absolute top-0 right-0 w-1/3 h-1/3 text-gray-300/30" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,10 100,100 0,100" fill="currentColor" />
              </svg>
              
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full" style={{ 
                  backgroundImage: 'linear-gradient(to right, #166534 1px, transparent 1px), linear-gradient(to bottom, #166534 1px, transparent 1px)',
                  backgroundSize: '10% 10%'
                }}></div>
              </div>

              {/* Streets representation */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300/40 transform -translate-y-1/2"></div>
              <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300/40 transform -translate-x-1/2"></div>
            </div>

            {/* Location pins */}
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-125 z-10 ${
                  selectedLocation?.id === location.id ? 'scale-125' : ''
                }`}
                style={{ left: `${location.position.x}%`, top: `${location.position.y}%` }}
              >
                <div className={`${location.color} w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white`}>
                  <location.icon className="w-4 h-4 text-white" />
                </div>
                {selectedLocation?.id === location.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800 mx-auto"></div>
                  </div>
                )}
              </button>
            ))}

            {/* Pucon label */}
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-green-800 font-bold text-sm">🌋 פוקון, צ׳ילה</span>
            </div>

            {/* Lake label */}
            <div className="absolute bottom-4 right-4 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-blue-800 font-medium text-sm">אגם וויאריקה 🌊</span>
            </div>
          </div>
        </div>

        {/* Selected Location Info */}
        {selectedLocation && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-r-4 border-green-500">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`${selectedLocation.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                  <selectedLocation.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{selectedLocation.name}</h3>
                  <p className="text-gray-500 text-sm">{selectedLocation.category}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedLocation(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <p className="mt-4 text-gray-700">{selectedLocation.description}</p>
            {selectedLocation.mapsUrl && (
              <a
                href={selectedLocation.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                פתח ב-Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        )}

        {/* All Locations List */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">כל המיקומים</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-right ${
                  selectedLocation?.id === location.id 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`${location.color} w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <location.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-gray-800">{location.name}</p>
                  <p className="text-sm text-gray-500">{location.category}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
