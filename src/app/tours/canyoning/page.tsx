import Link from "next/link";
import { ArrowRight, Clock, DollarSign, Backpack, CheckCircle, Waves, Play, Camera } from "lucide-react";

export default function CanyoningPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <Link href="/tours" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowRight className="w-4 h-4 ml-1" />
          חזרה לטיולים
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Waves className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">סנפלינג מפלים</h1>
          </div>
          <p className="text-xl opacity-90">
            הליכה במים בקניון מלא בטבע ומאוד יפה עם סנפלינג בשלושה מפלים
          </p>
        </div>

        {/* Video Link */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">צפו בסרטון</h2>
          <a 
            href="https://www.youtube.com/watch?v=qHvW-khXctg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative rounded-xl overflow-hidden group"
          >
            <img 
              src="https://img.youtube.com/vi/qHvW-khXctg/maxresdefault.jpg" 
              alt="סנפלינג מפלים"
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
            הליכה במים בקניון מלא בטבע ומאוד יפה כבערך שעה וחצי בו תעשו סנפלינג בשלושה מפלים 
            של כ-12-15 מטר גובה. האטרקציה הזו מאוד כיפית למי שמחפש לראות טבע ולעשות משהו מעבר.
          </p>
        </div>

        {/* Price */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">מחיר</h2>
          </div>
          <div className="bg-white rounded-xl p-4">
            <p className="text-3xl font-bold text-green-600">35,000 פסו צ׳ילאני</p>
          </div>
          <div className="mt-4 flex items-start gap-2 text-gray-600">
            <Camera className="w-5 h-5 mt-1" />
            <p>תמונות: כ-3,000 פסו לאדם (משלמים בסוף)</p>
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
              <p className="text-gray-700">9:00, 12:00 או 15:00</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                משך הפעילות
              </div>
              <p className="text-gray-700">3-4 שעות מהיציאה ועד לחזרה</p>
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
              "הסעה הלוך וחזור",
              "חליפה מלאה",
              "נעלי גומי",
              "כל הציוד לסנפלינג",
              "צילום (בתשלום נוסף)"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What to Bring */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Backpack className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-800">מה להביא</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "בגד ים",
              "מגבת",
              "בקבוק מים",
              "שורש - מומלץ מאוד",
              "בגדים חמים ליציאה",
              "GoPro (אופציונלי) - להתקין בקסדה"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-orange-50 p-3 rounded-lg">
                <span className="text-orange-500">•</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
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
