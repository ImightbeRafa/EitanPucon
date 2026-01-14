import Link from "next/link";
import { ArrowRight, Clock, Plane, DollarSign, CheckCircle, Camera, AlertTriangle } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function SkydivingPage() {
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
              <Plane className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">צניחה חופשית</h1>
          </div>
          <p className="text-xl opacity-90">
            חברת הצניחה הכי טובה בפוקון עם מדריכים מכל העולם שהולכים לתת לכם את החוויה של החיים שלכם!
          </p>
        </div>

        {/* Video */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">צפו בסרטון</h2>
          <YouTubeEmbed videoId="RlrJ2Zkcfjc" title="צניחה חופשית בפוקון" />
        </div>

        {/* Main Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">על החוויה</h2>
          <p className="text-gray-700 leading-relaxed">
            נסע לשדה תעופה של פוקון שנמצא כ-15 דק מהמרכז. משם תקבלו תדרוך ותעלו על המטוס עם מדריך צמוד. 
            אתם תטוסו מעל ההר געש וויאריקה עם נוף שאין מילים לתאר ותקפצו מגובה של <strong>11,000 רגל</strong>.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mt-4 text-center">
            <p className="text-blue-800 text-2xl font-bold">אדרנלין ++</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">מחיר</h2>
          </div>
          <div className="text-center py-6">
            <p className="text-5xl font-bold text-green-600 mb-2">270,000</p>
            <p className="text-gray-600 text-xl">פסו צ׳יליאני</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-purple-600">
              <Camera className="w-5 h-5" />
              <span className="font-medium">כולל תמונות וסרטון!</span>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg mt-4">
            <p className="text-yellow-800">
              <AlertTriangle className="w-5 h-5 inline ml-2" />
              <strong>תשלום:</strong> מתבצע במזומן בפסו צ׳יליאני או דולר בשער היציג. 
              אם אתם משלמים באשראי יגבו ממכם 5% עמלה.
            </p>
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
              <p className="text-gray-700">צריך לברר כל יום</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                משך האטרקציה
              </div>
              <p className="text-gray-700">3-4 שעות מהיציאה ועד החזרה</p>
            </div>
          </div>
        </div>

        {/* What's included */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">מה כולל?</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "הסעה הלוך וחזור לשדה תעופה",
              "הדרכה מלאה",
              "מקום לשמור את הדברים שלכם",
              "כל הציוד הנדרש",
              "תמונות מקצועיות",
              "סרטון מהקפיצה"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What to bring */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">מה להביא?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-800">מכנס ארוך ונוח</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-800">מיקרופליז</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-800">נעליים סגורות (סניקרס)</p>
              <p className="text-red-600 text-sm">לא להביא נעלי הרים בבקשה!</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-800">כרטיס זיכרון או דיסק און קי</p>
              <p className="text-gray-600 text-sm">למי שיש אייפון - מעבירים דרך AirDrop</p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">חשוב לדעת</h2>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>איסוף:</strong> להיות מוכנים בהוסטל שלנו. אם אתם מאוד רחוקים וקבוצה גדולה 
                (מעל 6 אנשים) אפשר לקבוע מיקום איסוף.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>המלצה לכסף:</strong> עדיף למשוך מכספומט Banco Estado שבסופרים Eltit - 
                חשוב בכספומטים הללו לסרב את שער ההמרה שהם מציעים, רק לאשר את העמלה של 5,500 
                (יוצא סביבות 15 שקלים). אפשר למשוך עד 600,000 במשיכה אחת - שווה מאוד!
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">מוכנים לחוויה של החיים?</h2>
          <p className="text-lg opacity-90">
            צרו קשר דרך הווטסאפ לתיאום מועד הצניחה שלכם!
          </p>
        </div>
      </div>
    </div>
  );
}
