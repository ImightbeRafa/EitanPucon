import Link from "next/link";
import { Bus, Clock, DollarSign, Info, MapPin, AlertTriangle, MessageCircle } from "lucide-react";

export default function TransportPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Bus className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">תחבורה</h1>
          </div>
          <p className="text-xl opacity-90">
            וואן לברילוצ׳ה ואוטובוס למנדוזה
          </p>
        </div>

        {/* Van to Bariloche */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Bus className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">וואן לברילוצ׳ה</h2>
          </div>

          <div className="space-y-4">
            {/* Price */}
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span className="font-bold text-green-800">מחיר</span>
              </div>
              <p className="text-2xl font-bold text-green-600">55,000 פסו</p>
              <p className="text-green-700 text-sm">הנחה של 5,000 עם מוצ׳יקארד!</p>
            </div>

            {/* Schedule */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-blue-800">לוח זמנים</span>
              </div>
              <p className="text-gray-700"><strong>יציאה:</strong> 16:00</p>
              <p className="text-gray-700"><strong>הגעה:</strong> בין 22:00 ל-23:30</p>
              <p className="text-gray-700 mt-2"><strong>ימים:</strong> שני, רביעי ושישי</p>
              <p className="text-blue-600 text-sm mt-1">* בעונה נפתחים עוד ימים</p>
            </div>

            {/* Info */}
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 text-yellow-600 mt-1" />
                <div>
                  <p className="font-bold text-yellow-800">של חב״ד, הלוך וחזור</p>
                  <p className="text-yellow-700 mt-1">צריך לבדוק מתי יש יציאות - לתאם ישר מולנו פה בקבלה איתן אטרקציות פוקון</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bus to Mendoza */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-100 p-2 rounded-full">
              <Bus className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">אוטובוס למנדוזה</h2>
          </div>

          <div className="space-y-4">
            {/* Price */}
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span className="font-bold text-green-800">מחיר</span>
              </div>
              <p className="text-2xl font-bold text-green-600">92,000 פסו</p>
              <p className="text-gray-600 text-sm">* תלוי ביום - צריך לבדוק</p>
            </div>

            {/* Route */}
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span className="font-bold text-purple-800">מסלול הנסיעה</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-200 text-purple-700 px-2 py-1 rounded text-sm font-bold">1</div>
                  <div>
                    <p className="font-bold text-gray-800">פוקון → סנטיאגו</p>
                    <p className="text-gray-600">22:00 בלילה → 8:00 בבוקר (נסיעת לילה)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded text-sm font-bold">⏸</div>
                  <div>
                    <p className="font-bold text-gray-800">עצירה בסנטיאגו</p>
                    <p className="text-gray-600">שעתיים בתחנה המרכזית</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-200 text-purple-700 px-2 py-1 rounded text-sm font-bold">2</div>
                  <div>
                    <p className="font-bold text-gray-800">סנטיאגו → מנדוזה</p>
                    <p className="text-gray-600">10:30 בבוקר → 16:00 הגעה</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why buy through us */}
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="font-bold text-green-800">למה לקנות דרך סוכן?</p>
                  <p className="text-green-700 mt-1">
                    אם האוטובוס השני מגיע באיחור, אנחנו נוכל לעזור בלהזיז את השעה של האוטובוס השני או לקבלת החזר.
                  </p>
                </div>
              </div>
            </div>

            {/* Departure */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700"><strong>יציאה:</strong> כל יום</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">רוצים להזמין?</h2>
          <p className="mb-4">צרו קשר איתנו בוואטסאפ לתיאום</p>
          <a
            href="https://wa.me/972533839795"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            צרו קשר בוואטסאפ
          </a>
        </div>
      </div>
    </div>
  );
}
