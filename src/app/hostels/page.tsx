"use client";

import Link from "next/link";
import { Home, MapPin, MessageCircle, Phone } from "lucide-react";

export default function HostelsPage() {
  const hostels = [
    {
      id: "arauco-272",
      name: "Eitan's Hostel - Arauco",
      nameHe: "הוסטל איתן - אראוקו",
      address: "Arauco 272, Pucón",
      image: "/hostels/arauco-272.jpeg",
      description: "Our main hostel in the heart of Pucón",
      descriptionHe: "ההוסטל הראשי שלנו במרכז פוקון",
    },
    {
      id: "arauco-265",
      name: "Eitan's Hostel - Arauco 265",
      nameHe: "הוסטל איתן - אראוקו 265",
      address: "Arauco 265, Pucón",
      image: "/hostels/arauco-265.jpeg",
      description: "Cozy hostel with laundry service",
      descriptionHe: "הוסטל נעים עם שירות מכבסה",
    },
    {
      id: "palguin-261",
      name: "Eitan's Hostel - Palguin",
      nameHe: "הוסטל איתן - פלגין",
      address: "Palguin 261, Pucón",
      image: "/hostels/palguin-261.jpeg",
      description: "Modern hostel on Palguin street",
      descriptionHe: "הוסטל מודרני ברחוב פלגין",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
            <Home className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-2">
            ההוסטלים שלנו
          </h1>
          <p className="text-xl text-stone-500 mb-2">Our Hostels</p>
          <p className="text-stone-600 max-w-2xl mx-auto">
            3 מיקומים במרכז פוקון לבחירתכם
            <br />
            <span className="text-stone-500">3 locations in central Pucón for your choice</span>
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {/* Hostel Manager Contact */}
          <div className="bg-green-600 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-1">🏠 הזמנת הוסטל</h2>
            <p className="opacity-90 text-sm mb-4">Hostel Reservations</p>
            <a
              href="https://wa.me/message/YZN3TJYHFWXOH1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-green-700 px-5 py-3 rounded-full font-bold hover:bg-green-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>מנהל ההוסטל</span>
            </a>
          </div>
          
          {/* Tours Booking Contact */}
          <div className="bg-blue-600 rounded-2xl p-6 text-white">
            <h2 className="text-xl font-bold mb-1">🎯 הזמנת טיולים</h2>
            <p className="opacity-90 text-sm mb-4">Book Tours with Eitan</p>
            <a
              href="https://wa.me/972533839795"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-blue-700 px-5 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>איתן - טיולים</span>
            </a>
          </div>
        </div>

        {/* Hostels Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {hostels.map((hostel) => (
            <Link 
              key={hostel.id} 
              href={`/hostels/${hostel.id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="aspect-[4/3] bg-stone-200 overflow-hidden">
                  <img
                    src={hostel.image}
                    alt={hostel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23e7e5e4" width="400" height="300"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2378716c" font-size="20">📷 Photo</text></svg>';
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-stone-800 mb-1">{hostel.nameHe}</h3>
                  <p className="text-stone-500 text-sm mb-3">{hostel.name}</p>
                  <div className="flex items-center gap-2 text-stone-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{hostel.address}</span>
                  </div>
                  <p className="text-stone-600 text-sm">{hostel.descriptionHe}</p>
                  <p className="text-stone-400 text-sm">{hostel.description}</p>
                  <div className="mt-4 text-green-600 font-medium group-hover:text-green-700">
                    לפרטים נוספים ← More details
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* General Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">
            מידע כללי | General Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-stone-800 mb-3">🇮🇱 עברית</h3>
              <ul className="space-y-2 text-stone-600">
                <li>• צ׳ק-אין: 14:00</li>
                <li>• צ׳ק-אאוט: 11:00</li>
                <li>• WiFi חינם בכל ההוסטלים</li>
                <li>• מטבח משותף</li>
                <li>• אווירה ישראלית ביתית</li>
                <li>• עזרה בהזמנת טיולים</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-stone-800 mb-3">🇬🇧 English</h3>
              <ul className="space-y-2 text-stone-600">
                <li>• Check-in: 14:00</li>
                <li>• Check-out: 11:00</li>
                <li>• Free WiFi in all hostels</li>
                <li>• Shared kitchen</li>
                <li>• Friendly Israeli atmosphere</li>
                <li>• Tour booking assistance</li>
              </ul>
            </div>
          </div>
          
          {/* WhatsApp CTA */}
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/message/YZN3TJYHFWXOH1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-colors text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              צרו קשר עכשיו | Contact Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
