import Link from "next/link";
import { ArrowRight, Clock, DollarSign, Backpack, CheckCircle, Play, Star } from "lucide-react";

export default function ZiplinePage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <Link href="/tours" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowRight className="w-4 h-4 ml-1" />
          חזרה לטיולים
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Star className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">אומגות (זיפליין)</h1>
          </div>
          <p className="text-xl opacity-90">
            7 אומגות מעל מפל של 100 מטר גובה - מקום בטבע מדהים!
          </p>
          <p className="text-lg opacity-80 mt-2">
            📍 SALTO LA CHINA
          </p>
        </div>

        {/* Video Link */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">צפו בסרטון</h2>
          <a 
            href="https://www.youtube.com/shorts/ptCb7b3HS6E" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative rounded-xl overflow-hidden group max-w-sm mx-auto"
          >
            <img 
              src="https://img.youtube.com/vi/ptCb7b3HS6E/maxresdefault.jpg" 
              alt="אומגות זיפליין"
              className="w-full aspect-[9/16] object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="bg-red-600 p-4 rounded-full group-hover:scale-110 transition-transform">
                <Play className="w-12 h-12 text-white fill-white" />
              </div>
            </div>
          </a>
        </div>

        {/* Best in Pucon Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Star className="w-6 h-6 text-amber-600 mt-1" />
            <div>
              <h3 className="font-bold text-amber-800 mb-1">הכי טובות בפוקון!</h3>
              <p className="text-amber-700">
                אלה האומגות הכי טובות בפוקון שכל הישראלים מבקשים!
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
        </div>

        {/* Details */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">פרטים</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold text-green-800">כמות אומגות</p>
              <p className="text-green-600 text-xl">7 אומגות</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold text-blue-800">גובה המפל</p>
              <p className="text-blue-600 text-xl">100 מטר!</p>
            </div>
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
                יציאה
              </div>
              <p className="text-gray-700">9:00 בבוקר</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                חזרה
              </div>
              <p className="text-gray-700">12:30 לפוקון</p>
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
              "בגדים נוחים",
              "נעליים סגורות או שורש",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-orange-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-red-50 border border-red-200 p-3 rounded-lg">
            <p className="text-red-700 font-bold">❌ לא סנדלים!</p>
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
