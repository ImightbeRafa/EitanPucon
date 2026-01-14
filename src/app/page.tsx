import Link from "next/link";
import { Mountain, Plane, Landmark, Shirt } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ברוכים הבאים לפוקון
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            המדריך המלא שלכם לטיולים, כסף ושירותים בפוקון, צ׳ילה
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tours"
              className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all"
            >
              לטיולים שלנו
            </Link>
            <Link
              href="/bank"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all"
            >
              מידע על כסף
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            מה תמצאו כאן?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tours Card */}
            <Link href="/tours" className="card-hover">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Mountain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">טיולים</h3>
                <p className="text-gray-600">
                  הר געש וויאריקה, צניחה חופשית ועוד הרפתקאות מדהימות
                </p>
              </div>
            </Link>

            {/* Volcano Card */}
            <Link href="/tours/volcano" className="card-hover">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Mountain className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">הר געש</h3>
                <p className="text-gray-600">
                  טיפוס על הר הגעש הפעיל ביותר בצ׳ילה - חוויה בלתי נשכחת
                </p>
              </div>
            </Link>

            {/* Skydiving Card */}
            <Link href="/tours/skydiving" className="card-hover">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Plane className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">צניחה חופשית</h3>
                <p className="text-gray-600">
                  קפיצה מ-11,000 רגל מעל הר הגעש - אדרנלין טהור
                </p>
              </div>
            </Link>

            {/* Bank Card */}
            <Link href="/bank" className="card-hover">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Landmark className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">משיכת כסף</h3>
                <p className="text-gray-600">
                  איפה ואיך למשוך כסף בלי להיעקץ בעמלות
                </p>
              </div>
            </Link>

            {/* Laundry Card */}
            <Link href="/laundry" className="card-hover">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Shirt className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">מכבסות</h3>
                <p className="text-gray-600">
                  מיקומי מכבסות בפוקון לכביסה נקייה
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            למה פוקון?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            פוקון היא עיירה קסומה בדרום צ׳ילה, מוקפת באגמים, יערות ירוקים והר הגעש המרהיב וויאריקה. 
            זו יעד חובה לכל מטייל בדרום אמריקה שמחפש הרפתקאות, טבע עוצר נשימה ואווירה מיוחדת.
            האתר הזה נוצר במיוחד בשבילכם - המטיילים הישראלים - עם כל המידע שתצטרכו במקום אחד.
          </p>
        </div>
      </section>
    </div>
  );
}
