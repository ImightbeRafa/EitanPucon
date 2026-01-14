"use client";

import { useState, useEffect } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import("@/components/PuconMap"), { 
  ssr: false,
  loading: () => (
    <div className="h-[500px] bg-stone-100 rounded-xl flex items-center justify-center">
      <div className="text-stone-400">טוען מפה...</div>
    </div>
  )
});

interface Location {
  id: string;
  name: string;
  category: string;
  description: string;
  lat: number;
  lng: number;
  color: string;
  mapsUrl?: string;
}

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const locations: Location[] = [
    {
      id: "hostel",
      name: "Eitan Hostel",
      category: "הוסטל",
      description: "ההוסטל שלנו - Arauco 272",
      lat: -39.2824,
      lng: -71.9545,
      color: "#16a34a",
    },
    {
      id: "bank1",
      name: "כספומט Eltit",
      category: "בנק",
      description: "Banco Estado - עמלה 5,500 פסו",
      lat: -39.2831,
      lng: -71.9562,
      color: "#ea580c",
      mapsUrl: "https://maps.app.goo.gl/WENJ2PFUb2k9WUEx9"
    },
    {
      id: "bank2",
      name: "כספומט ליד הבנק",
      category: "בנק",
      description: "2 כספומטים ראשונים משמאל",
      lat: -39.2819,
      lng: -71.9538,
      color: "#ea580c",
      mapsUrl: "https://maps.app.goo.gl/7RZahtS1ASsBtLPo6"
    },
    {
      id: "casino",
      name: "קזינו Enjoy",
      category: "בנק",
      description: "0% עמלה! נפתח ב-18:00",
      lat: -39.2798,
      lng: -71.9489,
      color: "#9333ea",
      mapsUrl: "https://maps.app.goo.gl/cqgN4xd6KDBNLbpB7"
    },
    {
      id: "volcano",
      name: "הר געש וויאריקה",
      category: "אטרקציה",
      description: "נקודת ציון - ההר הגעש",
      lat: -39.4220,
      lng: -71.9394,
      color: "#dc2626",
    },
    {
      id: "lake",
      name: "אגם וויאריקה",
      category: "אטרקציה",
      description: "החוף המרכזי",
      lat: -39.2756,
      lng: -71.9523,
      color: "#0891b2",
    },
  ];

  const categories = [
    { name: "הכל", value: null },
    { name: "הוסטל", value: "הוסטל" },
    { name: "בנקים", value: "בנק" },
    { name: "אטרקציות", value: "אטרקציה" },
  ];

  const filteredLocations = activeCategory 
    ? locations.filter(l => l.category === activeCategory)
    : locations;

  return (
    <div className="min-h-screen py-12 px-4 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-900 rounded-full mb-4">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-2">
            מפת פוקון
          </h1>
          <p className="text-stone-500">
            מיקומים חשובים של Eitan Pucon
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.value
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Interactive Map */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <MapComponent 
            locations={filteredLocations} 
            selectedLocation={selectedLocation}
            onSelectLocation={setSelectedLocation}
          />
        </div>

        {/* Selected Location Info */}
        {selectedLocation && (
          <div className="bg-white rounded-xl shadow-lg p-5 mb-6 border-r-4 border-stone-900">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">
                  {selectedLocation.category}
                </span>
                <h3 className="text-xl font-bold text-stone-800 mt-1">{selectedLocation.name}</h3>
                <p className="text-stone-500 mt-1">{selectedLocation.description}</p>
              </div>
              <button 
                onClick={() => setSelectedLocation(null)}
                className="text-stone-400 hover:text-stone-600 text-xl"
              >
                ×
              </button>
            </div>
            {selectedLocation.mapsUrl && (
              <a
                href={selectedLocation.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                נווט עם Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        )}

        {/* Locations List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-4 border-b border-stone-100">
            <h2 className="font-bold text-stone-800">כל המיקומים</h2>
          </div>
          <div className="divide-y divide-stone-100">
            {filteredLocations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`w-full p-4 flex items-center gap-4 text-right hover:bg-stone-50 transition-colors ${
                  selectedLocation?.id === location.id ? 'bg-stone-50' : ''
                }`}
              >
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: location.color }}
                />
                <div className="flex-grow">
                  <p className="font-medium text-stone-800">{location.name}</p>
                  <p className="text-sm text-stone-400">{location.description}</p>
                </div>
                {location.mapsUrl && (
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-stone-400 hover:text-stone-600"
                  >
                    <Navigation className="w-5 h-5" />
                  </a>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
