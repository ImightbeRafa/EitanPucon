import Link from "next/link";
import { ArrowRight, Clock, DollarSign, Backpack, CheckCircle, Waves, Play, Camera, AlertTriangle } from "lucide-react";

export default function BuddyRaftingPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <Link href="/tours" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowRight className="w-4 h-4 ml-1" />
          חזרה לטיולים
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Waves className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">באדי רפטינג</h1>
          </div>
          <p className="text-xl opacity-90">
            אקסטרים! רפטינג אישי בנהר Trancura
          </p>
        </div>

        {/* Video Link */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">צפו בסרטון</h2>
          <a 
            href="https://www.youtube.com/watch?v=VwncCe3zxds" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative rounded-xl overflow-hidden group"
          >
            <img 
              src="https://img.youtube.com/vi/VwncCe3zxds/maxresdefault.jpg" 
              alt="באדי רפטינג"
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
            רפטינג בנהר "Trancura", מוחזקים במצוף פרטי תזרמו עם הזרם של המים שמגיעים מהקרח 
            שנמס מההר געש וויאריקה. באטרקציה זו צריך להפעיל כוח פיזי, במקרה ותתעייפו יש מדריך 
            עם סירת רפטינג מאחורה שניתן לעלות עליה במידת הצורך.
          </p>
        </div>

        {/* Physical Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-800 mb-1">שימו לב</h3>
              <p className="text-yellow-700">
                באטרקציה זו צריך להפעיל כוח פיזי. במקרה ותתעייפו יש מדריך עם סירת רפטינג 
                מאחורה שניתן לעלות עליה במידת הצורך.
              </p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">מחיר</h2>
          </div>
          <div className="bg-white rounded-xl p-4">
            <p className="text-3xl font-bold text-green-600">40,000 פסו צ׳ילאני</p>
          </div>
          <div className="mt-4 flex items-start gap-2 text-gray-600">
            <Camera className="w-5 h-5 mt-1" />
            <p>תמונות לא כלולות - בין 2,500 ל-6,000 פסו (תלוי בכמות האנשים, משלמים במזומן למדריכים)</p>
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
              <p className="text-gray-700">10:00 או 15:00</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                משך הפעילות
              </div>
              <p className="text-gray-700">3-4 שעות (שעה במים)</p>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">מה כולל</h2>
          </div>
          <div className="bg-green-50 p-3 rounded-lg flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">הסעה מההוסטל שלנו - Arauco 272</span>
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
              "בגדים חמים ליציאה",
              "GoPro (אפשרי) - להתקין בקסדה"
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
