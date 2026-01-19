import Link from "next/link";
import { ArrowRight, Clock, DollarSign, Backpack, CheckCircle, Waves, Play, Camera, Users } from "lucide-react";

export default function RaftingPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <Link href="/tours" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowRight className="w-4 h-4 ml-1" />
          חזרה לטיולים
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Waves className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">רפטינג</h1>
          </div>
          <p className="text-xl opacity-90">
            אקסטרים בנהר Trancura - דרגה 3 או 4
          </p>
        </div>

        {/* Video Link */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">צפו בסרטון</h2>
          <a 
            href="https://www.youtube.com/watch?v=Jw_cnrlG_4I" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative rounded-xl overflow-hidden group"
          >
            <img 
              src="https://img.youtube.com/vi/Jw_cnrlG_4I/maxresdefault.jpg" 
              alt="רפטינג"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="bg-red-600 p-4 rounded-full group-hover:scale-110 transition-transform">
                <Play className="w-12 h-12 text-white fill-white" />
              </div>
            </div>
          </a>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">על האטרקציה</h2>
          <p className="text-gray-700 leading-relaxed">
            אקסטרים בנהר "Trancura" בתוך סירה עם שישה אנשים ומדריך, כשעה בסירה. 
            רפטינג כיף, ולא צריך ניסיון לאטרקציה הזו!
          </p>
        </div>

        {/* Price */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">מחירים</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
              <p className="text-sm text-blue-600 font-bold mb-1">דרגה 3 (פחות חזק)</p>
              <p className="text-2xl font-bold text-green-600">30,000 פסו</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-indigo-200">
              <p className="text-sm text-indigo-600 font-bold mb-1">דרגה 4 (החזק יותר)</p>
              <p className="text-2xl font-bold text-green-600">40,000 פסו</p>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2 text-gray-600">
            <Camera className="w-5 h-5 mt-1" />
            <p>תמונות לא כלולות - כ-4,000 פסו לאדם (משלמים במקום)</p>
          </div>
        </div>

        {/* Timing */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">זמנים</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                שעות יציאה
              </div>
              <p className="text-gray-700">11:00 או 16:00</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                משך הפעילות
              </div>
              <p className="text-gray-700">3-4 שעות</p>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">מה כולל</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "הסעה הלוך וחזור מההוסטל",
              "הדרכה מלאה",
              "כל הציוד לרפטינג"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Info */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-800">בשביל להירשם</h2>
          </div>
          <div className="space-y-3">
            <p className="text-gray-700">שלחו לנו את הפרטים הבאים:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 bg-white p-3 rounded-lg">
                <span className="text-orange-500">1.</span>
                <span className="text-gray-700">באיזה שעה אתם רוצים לעשות</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-3 rounded-lg">
                <span className="text-orange-500">2.</span>
                <span className="text-gray-700">שם מלא באנגלית</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-3 rounded-lg">
                <span className="text-orange-500">3.</span>
                <span className="text-gray-700">מאיזה מקום לאסוף (מיקום ההוסטל - אם רחוק מאוד, האיסוף מ-Arauco 272)</span>
              </li>
            </ul>
            <p className="text-gray-600 text-sm mt-2">
              * לא משנה באמת השעה לפי הראות, כל עוד יש מזג אוויר טוב יהיה יפה
            </p>
          </div>
        </div>

        {/* Back to Tours */}
        <div className="text-center">
          <Link 
            href="/tours" 
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            חזרה לכל הטיולים
          </Link>
        </div>
      </div>
    </div>
  );
}
