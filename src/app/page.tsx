import Link from "next/link";
import { Mountain, Plane, Landmark, Shirt, MapPin, UtensilsCrossed, Home, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Eitan Pucon
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            המדריך המלא שלכם לטיולים, כסף ושירותים בפוקון, צ׳ילה
          </p>
          <p className="text-lg mb-8 opacity-75">
            3 הוסטלים: Arauco 272 • Palguin 261 • Arauco 265
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

            {/* Map Card */}
            <Link href="/map" className="card-hover">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">מפה</h3>
                <p className="text-gray-600">
                  מפה אינטראקטיבית עם כל המיקומים החשובים
                </p>
              </div>
            </Link>

            {/* Restaurants Card */}
            <Link href="/restaurants" className="card-hover">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <UtensilsCrossed className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">מסעדות</h3>
                <p className="text-gray-600">
                  המלצות למסעדות הכי טובות בפוקון
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Hostels Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-600 rounded-full mb-4">
              <Home className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              ההוסטלים שלנו
            </h2>
            <p className="text-gray-600">3 מיקומים במרכז פוקון</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <p className="text-2xl font-bold text-green-700">Arauco 272</p>
              <p className="text-gray-500 mt-1">ההוסטל הראשי</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <p className="text-2xl font-bold text-green-700">Palguin 261</p>
              <p className="text-gray-500 mt-1">הוסטל נוסף</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <p className="text-2xl font-bold text-green-700">Arauco 265</p>
              <p className="text-gray-500 mt-1">הוסטל נוסף</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://wa.me/972533839795"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              צרו קשר בוואטסאפ
            </a>
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
