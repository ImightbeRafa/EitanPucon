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
    // Hostels
    {
      id: "hostel1",
      name: "Eitan Hostel - Arauco 272",
      category: "הוסטל",
      description: "ההוסטל הראשי שלנו",
      lat: -39.2741,
      lng: -71.9725,
      color: "#16a34a",
      mapsUrl: "https://maps.app.goo.gl/Ger5JQPAH4Q2FbTF8"
    },
    {
      id: "hostel2",
      name: "Eitan Hostel - Palguin 261",
      category: "הוסטל",
      description: "הוסטל נוסף",
      lat: -39.2735,
      lng: -71.9718,
      color: "#16a34a",
      mapsUrl: "https://maps.app.goo.gl/Ger5JQPAH4Q2FbTF8"
    },
    {
      id: "hostel3",
      name: "Eitan Hostel - Arauco 265",
      category: "הוסטל",
      description: "הוסטל נוסף",
      lat: -39.2739299,
      lng: -71.9727595,
      color: "#16a34a",
      mapsUrl: "https://maps.app.goo.gl/QmdFSrWs4R9thaLy7"
    },
    // Banks
    {
      id: "bank1",
      name: "כספומט Eltit",
      category: "בנק",
      description: "Banco Estado - עמלה 5,500 פסו",
      lat: -39.2749,
      lng: -71.9755,
      color: "#ea580c",
      mapsUrl: "https://maps.app.goo.gl/WENJ2PFUb2k9WUEx9"
    },
    {
      id: "bank2",
      name: "כספומט ליד הבנק",
      category: "בנק",
      description: "2 כספומטים ראשונים משמאל",
      lat: -39.2755,
      lng: -71.9745,
      color: "#ea580c",
      mapsUrl: "https://maps.app.goo.gl/7RZahtS1ASsBtLPo6"
    },
    {
      id: "casino",
      name: "Casino Enjoy",
      category: "בנק",
      description: "0% עמלה! נפתח ב-18:00",
      lat: -39.2722926,
      lng: -71.9761117,
      color: "#9333ea",
      mapsUrl: "https://maps.app.goo.gl/yA2fMUGj6BdLpcHg6"
    },
    // Restaurants
    {
      id: "sushi1",
      name: "Sushi Mora",
      category: "מסעדה",
      description: "סושי מומלץ",
      lat: -39.2749054,
      lng: -71.977065,
      color: "#dc2626",
      mapsUrl: "https://maps.app.goo.gl/yhYVSnqiGwEf3YNh9"
    },
    {
      id: "sushi2",
      name: "Selva Negra",
      category: "מסעדה",
      description: "סושי",
      lat: -39.2752,
      lng: -71.9758,
      color: "#dc2626",
      mapsUrl: "https://maps.app.goo.gl/n3fX6ABfsQSwxqJo7"
    },
    {
      id: "israeli",
      name: "Just Delicious",
      category: "מסעדה",
      description: "אוכל ישראלי",
      lat: -39.2755617,
      lng: -71.970294,
      color: "#2563eb",
      mapsUrl: "https://maps.app.goo.gl/zYrB81bRfvztgRAh9"
    },
    {
      id: "italian1",
      name: "Andiamo",
      category: "מסעדה",
      description: "פיצה, פסטה, בשרים",
      lat: -39.275148,
      lng: -71.971811,
      color: "#059669",
      mapsUrl: "https://maps.app.goo.gl/Zup7m7ebGt43GDjD7"
    },
    {
      id: "italian2",
      name: "Fiorentini",
      category: "מסעדה",
      description: "איטלקי",
      lat: -39.2769313,
      lng: -71.9763476,
      color: "#059669",
      mapsUrl: "https://maps.app.goo.gl/veFGRY6V6ni7ychMA"
    },
    {
      id: "burger",
      name: "El Camino",
      category: "מסעדה",
      description: "המבורגר",
      lat: -39.2739527,
      lng: -71.9756667,
      color: "#d97706",
      mapsUrl: "https://maps.app.goo.gl/GCpCorZJB5MgjPgBA"
    },
    {
      id: "pizza1",
      name: "Pizza Cala",
      category: "מסעדה",
      description: "פיצה",
      lat: -39.27643,
      lng: -71.97724,
      color: "#dc2626",
      mapsUrl: "https://maps.app.goo.gl/E2EK5mH6SeZRco8i9"
    },
    {
      id: "pizza2",
      name: "La Cova",
      category: "מסעדה",
      description: "פיצריה",
      lat: -39.2746141,
      lng: -71.9737631,
      color: "#dc2626",
      mapsUrl: "https://maps.app.goo.gl/da691mQdnk59tzdY8"
    },
    {
      id: "thai",
      name: "Phuket",
      category: "מסעדה",
      description: "תאילנדי",
      lat: -39.2740182,
      lng: -71.9702866,
      color: "#0d9488",
      mapsUrl: "https://maps.app.goo.gl/7MgpYqHrMvWyyWq19"
    },
    {
      id: "cafe",
      name: "Madd Goat",
      category: "מסעדה",
      description: "קפה",
      lat: -39.2746,
      lng: -71.9742,
      color: "#8b5cf6",
      mapsUrl: "https://maps.app.goo.gl/2MVK8a9RycCXGLGQA"
    },
    // Laundry
    {
      id: "lavanderia",
      name: "המכבסה שלנו",
      category: "מכבסה",
      description: "מכבסה ב-Arauco 265 - 4,000 פסו לק״ג",
      lat: -39.2739299,
      lng: -71.9727595,
      color: "#a855f7",
      mapsUrl: "https://maps.app.goo.gl/QmdFSrWs4R9thaLy7"
    },
    // Attractions
    {
      id: "volcano",
      name: "הר געש וויאריקה",
      category: "אטרקציה",
      description: "נקודת ציון - ההר הגעש",
      lat: -39.4220,
      lng: -71.9394,
      color: "#7c3aed",
    },
    {
      id: "lake",
      name: "אגם וויאריקה",
      category: "אטרקציה",
      description: "החוף המרכזי",
      lat: -39.2695,
      lng: -71.9760,
      color: "#0891b2",
    },
  ];

  const categories = [
    { name: "הכל", value: null },
    { name: "הוסטלים", value: "הוסטל" },
    { name: "בנקים", value: "בנק" },
    { name: "מסעדות", value: "מסעדה" },
    { name: "מכבסה", value: "מכבסה" },
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

        {/* Selected Location Info Card */}
        {selectedLocation && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50 animate-in slide-in-from-bottom-4 duration-300">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-100">
              {/* Color accent bar */}
              <div 
                className="h-1.5 w-full"
                style={{ backgroundColor: selectedLocation.color }}
              />
              
              <div className="p-5">
                {/* Header with close button */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg"
                      style={{ backgroundColor: selectedLocation.color }}
                    >
                      {selectedLocation.category === "הוסטל" && "🏠"}
                      {selectedLocation.category === "בנק" && "🏦"}
                      {selectedLocation.category === "מסעדה" && "🍽️"}
                      {selectedLocation.category === "מכבסה" && "🧺"}
                      {selectedLocation.category === "אטרקציה" && "⛰️"}
                    </div>
                    <div>
                      <span 
                        className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${selectedLocation.color}20`, color: selectedLocation.color }}
                      >
                        {selectedLocation.category}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedLocation(null)}
                    className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-700 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-stone-900 mb-1">{selectedLocation.name}</h3>
                <p className="text-stone-500 text-sm mb-4">{selectedLocation.description}</p>

                {/* Google Maps Button */}
                {selectedLocation.mapsUrl && (
                  <a
                    href={selectedLocation.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-xl font-medium hover:from-green-700 hover:to-green-600 transition-all shadow-lg shadow-green-500/20"
                  >
                    <Navigation className="w-5 h-5" />
                    <span>נווט עם Google Maps</span>
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </a>
                )}
              </div>
            </div>
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
