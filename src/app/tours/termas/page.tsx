import Link from "next/link";
import { ArrowRight, Clock, DollarSign, Backpack, CheckCircle, Thermometer, Play, AlertTriangle } from "lucide-react";

export default function TermasPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <Link href="/tours" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowRight className="w-4 h-4 ml-1" />
          חזרה לטיולים
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Thermometer className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">מעיינות חמים</h1>
          </div>
          <p className="text-xl opacity-90">
            Termas Geométricas - מעיינות הגשר האדום המפורסמים
          </p>
        </div>

        {/* Video Link */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">צפו בסרטון</h2>
          <a 
            href="https://www.youtube.com/watch?v=Ai6AuDMd1kc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative rounded-xl overflow-hidden group"
          >
            <img 
              src="https://img.youtube.com/vi/Ai6AuDMd1kc/maxresdefault.jpg" 
              alt="מעיינות חמים"
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">על המקום</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              המעיינות הכי מפורסמים בפוקון - <strong>"Termas Geométricas"</strong> מוכרות גם בשם מעיינות של הגשר האדום. 
              אנשים מכל העולם מגיעים לפה בשביל להנות מהמים החמים והטבעיים שמתחממים מהלבה של הר הגעש וויאריקה.
            </p>
            <p>
              אפשר ממש לראות את המים יוצאים מן האדמה בטמפרטורה מאוד חמה. המעיינות נמצאים בקניון ירוק ומהמם 
              שאפילו בסוף יש מפל מאוד יפה בשביל להצטלם.
            </p>
            <div className="bg-orange-50 p-4 rounded-xl">
              <p className="text-orange-800 font-medium">
                🌊 במעיינות יש 18 בריכות, כל אחת בטמפרטורה אחרת. המים כל הזמן מתחלפים אז הן גם מאוד נקיות!
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
            <p className="text-3xl font-bold text-green-600">70,000 פסו צ׳ילאני</p>
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
              <p className="text-gray-700">12:15 או 16:00 (צריך לבדוק זמינות)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                משך הפעילות
              </div>
              <p className="text-gray-700">6-7 שעות (כולל 3 שעות במעיינות)</p>
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
              "מפתח ללוקר לשמירת הציוד"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Warning */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold text-red-800">חשוב מאוד!</h2>
          </div>
          <div className="space-y-3">
            <p className="text-red-700 font-medium">
              ⛔ אסור להכניס אוכל לתוך המקום
            </p>
            <p className="text-red-700 font-medium">
              ⛔ אסור אלכוהול
            </p>
            <p className="text-red-700 font-medium">
              ⛔ עישון רק מחוץ למתחם
            </p>
            <div className="bg-red-100 p-3 rounded-lg mt-4">
              <p className="text-red-800 font-bold">
                💰 קנס על הפרה: עד 150,000 פסו!
              </p>
            </div>
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
              "משהו קטן לאכול (לאוטובוס)",
              "כסף לבית הקפה במקום"
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
