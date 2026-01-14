import { Shirt, MapPin, Clock, Info } from "lucide-react";
import MapLink from "@/components/MapLink";

export default function LaundryPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Shirt className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">מכבסות בפוקון</h1>
          </div>
          <p className="text-xl opacity-90">
            מיקומי מכבסות מומלצות בעיר לכביסה נקייה
          </p>
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">מידע כללי</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">
              בפוקון יש מספר מכבסות שמציעות שירותי כביסה. רוב המכבסות מציעות:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-800">כביסה וייבוש</p>
                <p className="text-purple-600">לפי קילו</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-800">זמן אספקה</p>
                <p className="text-purple-600">בדרך כלל באותו יום או למחרת</p>
              </div>
            </div>
          </div>
        </div>

        {/* Laundry Locations */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800">מיקומי מכבסות</h2>
          </div>
          
          <div className="space-y-6">
            {/* Laundry 1 */}
            <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">מכבסה במרכז העיר</h3>
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <Clock className="w-4 h-4" />
                <span>שעות פעילות: בדרך כלל 9:00-20:00</span>
              </div>
              <p className="text-gray-600 mb-3">
                מכבסה נוחה במרכז העיר עם שירות מהיר. מומלץ לשאול בהוסטל על המכבסה הקרובה אליכם.
              </p>
            </div>

            {/* Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-yellow-600 mt-1" />
                <div>
                  <p className="font-bold text-yellow-800 mb-1">טיפ!</p>
                  <p className="text-yellow-700">
                    רוב ההוסטלים מכירים את המכבסות הקרובות ויכולים להמליץ לכם על האופציה הטובה ביותר. 
                    חלק מההוסטלים גם מציעים שירותי כביסה במקום!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">טיפים לכביסה בפוקון</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-800 mb-1">תכננו מראש</p>
              <p className="text-gray-600 text-sm">
                הכביסה לוקחת לפחות כמה שעות, לפעמים יום שלם
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-800 mb-1">שאלו על מחירים</p>
              <p className="text-gray-600 text-sm">
                המחירים יכולים להשתנות בין מכבסות
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-800 mb-1">שמרו על קבלה</p>
              <p className="text-gray-600 text-sm">
                תמיד קבלו קבלה לאיסוף הכביסה
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-800 mb-1">בדקו בהוסטל</p>
              <p className="text-gray-600 text-sm">
                חלק מההוסטלים מציעים כביסה במחיר טוב
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
