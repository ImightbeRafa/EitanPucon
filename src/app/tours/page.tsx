import Link from "next/link";
import { Mountain, Plane, Waves, Users, Star, Thermometer } from "lucide-react";

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
              <div className="bg-gradient-to-br from-sky-500 to-blue-600 h-48 flex items-center justify-center">
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

          {/* Canyoning Tour */}
          <Link href="/tours/canyoning" className="card-hover group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 h-48 flex items-center justify-center">
                <Waves className="w-24 h-24 text-white opacity-80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  סנפלינג מפלים
                </h2>
                <p className="text-gray-600 mb-4">
                  הליכה במים בקניון יפהפה עם סנפלינג בשלושה מפלים של 12-15 מטר
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold text-lg">
                    35,000 פסו
                  </span>
                  <span className="text-blue-600 font-medium">
                    לפרטים נוספים ←
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Rafting Tour */}
          <Link href="/tours/rafting" className="card-hover group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-48 flex items-center justify-center">
                <Users className="w-24 h-24 text-white opacity-80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  רפטינג דרגה 3/4
                </h2>
                <p className="text-gray-600 mb-4">
                  אקסטרים בנהר Trancura בסירה עם 6 אנשים ומדריך - לא צריך ניסיון!
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold text-lg">
                    מ-30,000 פסו
                  </span>
                  <span className="text-blue-600 font-medium">
                    לפרטים נוספים ←
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Buddy Rafting Tour */}
          <Link href="/tours/buddy-rafting" className="card-hover group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 h-48 flex items-center justify-center">
                <Waves className="w-24 h-24 text-white opacity-80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  באדי רפטינג
                </h2>
                <p className="text-gray-600 mb-4">
                  רפטינג אישי במצוף - זורמים עם המים מהקרח שנמס מההר געש!
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold text-lg">
                    40,000 פסו
                  </span>
                  <span className="text-blue-600 font-medium">
                    לפרטים נוספים ←
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Zipline Tour */}
          <Link href="/tours/zipline" className="card-hover group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 h-48 flex items-center justify-center">
                <Star className="w-24 h-24 text-white opacity-80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  אומגות (זיפליין)
                </h2>
                <p className="text-gray-600 mb-4">
                  7 אומגות מעל מפל של 100 מטר - הכי טובות בפוקון!
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold text-lg">
                    40,000 פסו
                  </span>
                  <span className="text-blue-600 font-medium">
                    לפרטים נוספים ←
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Termas Tour */}
          <Link href="/tours/termas" className="card-hover group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 h-48 flex items-center justify-center">
                <Thermometer className="w-24 h-24 text-white opacity-80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  מעיינות חמים
                </h2>
                <p className="text-gray-600 mb-4">
                  Termas Geométricas - 18 בריכות טבעיות בקניון ירוק מהמם
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold text-lg">
                    70,000 פסו
                  </span>
                  <span className="text-blue-600 font-medium">
                    לפרטים נוספים ←
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
