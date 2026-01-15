"use client";

import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Wifi, Coffee, Users, Clock, Shirt } from "lucide-react";

export default function Arauco265Page() {
  return (
    <div className="min-h-screen py-12 px-4 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <Link href="/hostels" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowRight className="w-4 h-4 ml-1" />
          חזרה להוסטלים | Back to Hostels
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Eitan's Hostel - Arauco 265</h1>
          <p className="text-xl opacity-90 mb-1">הוסטל איתן - אראוקו 265</p>
          <div className="flex items-center gap-2 mt-4 opacity-90">
            <MapPin className="w-5 h-5" />
            <span>Arauco 265, Pucón, Chile</span>
          </div>
        </div>

        {/* Main Image */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8">
          <img
            src="/hostels/arauco-265.jpeg"
            alt="Eitan's Hostel Arauco 265"
            className="w-full aspect-video object-cover"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><rect fill="%23e7e5e4" width="800" height="450"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2378716c" font-size="24">📷 Hostel Arauco 265</text></svg>';
            }}
          />
        </div>

        {/* Laundry Notice */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center gap-3 mb-3">
            <Shirt className="w-8 h-8" />
            <h2 className="text-2xl font-bold">🆕 יש לנו מכבסה!</h2>
          </div>
          <p className="text-lg opacity-95">We have a laundry service!</p>
          <div className="mt-4 bg-white/20 rounded-xl p-4">
            <p className="font-bold">שעות פתיחה | Opening Hours:</p>
            <p>09:30 - 18:00 (כל יום | Every day)</p>
            <p className="mt-2 font-bold">מחירים | Prices:</p>
            <p>4,000 פסו לק״ג | 6,000 פסו לק״ג בימי ראשון</p>
            <p className="text-sm opacity-90">4,000 CLP/kg | 6,000 CLP/kg on Sundays</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            אודות ההוסטל | About the Hostel
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-stone-700 mb-2">🇮🇱 עברית</h3>
              <p className="text-stone-600 leading-relaxed">
                הוסטל נעים ומשפחתי ברחוב אראוקו. 
                היתרון הגדול - יש לנו מכבסה במקום! 
                מיקום מרכזי עם כל השירותים שמטייל צריך.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-stone-700 mb-2">🇬🇧 English</h3>
              <p className="text-stone-600 leading-relaxed">
                A cozy and family-friendly hostel on Arauco street.
                The big advantage - we have a laundry on site!
                Central location with all the services a traveler needs.
              </p>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            שירותים | Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Wifi, label: "WiFi חינם", labelEn: "Free WiFi" },
              { icon: Coffee, label: "מטבח משותף", labelEn: "Shared Kitchen" },
              { icon: Shirt, label: "מכבסה!", labelEn: "Laundry!" },
              { icon: Clock, label: "צ׳ק-אין 24/7", labelEn: "24/7 Check-in" },
            ].map((item, index) => (
              <div key={index} className="bg-stone-50 p-4 rounded-xl text-center">
                <item.icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-medium text-stone-700">{item.label}</p>
                <p className="text-sm text-stone-500">{item.labelEn}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hours */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            שעות | Hours
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl">
              <p className="font-bold text-green-700">Check-in | צ׳ק-אין</p>
              <p className="text-2xl font-bold text-green-600">14:00</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl">
              <p className="font-bold text-orange-700">Check-out | צ׳ק-אאוט</p>
              <p className="text-2xl font-bold text-orange-600">11:00</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-green-600 rounded-2xl p-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">להזמנות | Reservations</h2>
          <p className="opacity-90 mb-4">צרו קשר עם מנהל ההוסטל</p>
          <a
            href="https://wa.me/message/YZN3TJYHFWXOH1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
