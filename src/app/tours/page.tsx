import Link from "next/link";
import { Mountain, Plane, Compass } from "lucide-react";

export default function ToursPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            הטיולים שלנו
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            חוויות בלתי נשכחות בפוקון - מהר געש פעיל ועד צניחה חופשית מעל הנוף המדהים
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Volcano Tour */}
          <Link href="/tours/volcano" className="card-hover group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 h-48 flex items-center justify-center">
                <Mountain className="w-24 h-24 text-white opacity-80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  הר געש וויאריקה
                </h2>
                <p className="text-gray-600 mb-4">
                  טיפוס על אחד מהרי הגעש הכי פעילים בדרום אמריקה והכי פעיל בצ׳ילה
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold text-lg">
                    מ-130,000 פסו
                  </span>
                  <span className="text-blue-600 font-medium">
                    לפרטים נוספים ←
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Skydiving Tour */}
          <Link href="/tours/skydiving" className="card-hover group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-48 flex items-center justify-center">
                <Plane className="w-24 h-24 text-white opacity-80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  צניחה חופשית
                </h2>
                <p className="text-gray-600 mb-4">
                  קפיצה מגובה 11,000 רגל מעל הר געש וויאריקה - אדרנלין טהור!
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold text-lg">
                    270,000 פסו
                  </span>
                  <span className="text-blue-600 font-medium">
                    לפרטים נוספים ←
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12 bg-gray-100 rounded-2xl p-8 text-center">
          <Compass className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-600 mb-2">
            עוד טיולים בקרוב...
          </h3>
          <p className="text-gray-500">
            אנחנו עובדים על עוד חוויות מדהימות בשבילכם. הישארו מעודכנים!
          </p>
        </div>
      </div>
    </div>
  );
}
