import { Landmark, CreditCard, MapPin, ExternalLink, AlertTriangle, CheckCircle, Info } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import MapLink from "@/components/MapLink";

export default function BankPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Landmark className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">משיכת כסף בפוקון</h1>
          </div>
          <p className="text-xl opacity-90">
            כל מה שצריך לדעת על איפה ואיך למשוך כסף בלי להיעקץ בעמלות
          </p>
        </div>

        {/* Quick FAQ */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">שאלות נפוצות</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <CreditCard className="w-5 h-5 text-gray-600 mt-1" />
              <div>
                <p className="font-bold text-gray-800">בנק ללא עמלה בפוקון?</p>
                <p className="text-gray-600">אין</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <CreditCard className="w-5 h-5 text-gray-600 mt-1" />
              <div>
                <p className="font-bold text-gray-800">בנק עם העמלה הכי נמוכה?</p>
                <p className="text-gray-600">Banco Estado</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <CreditCard className="w-5 h-5 text-gray-600 mt-1" />
              <div>
                <p className="font-bold text-gray-800">כמה עמלה?</p>
                <p className="text-green-600 font-bold">5,500 פסו (כ-15 שקלים)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <CreditCard className="w-5 h-5 text-gray-600 mt-1" />
              <div>
                <p className="font-bold text-gray-800">עד כמה אפשר למשוך?</p>
                <p className="text-green-600 font-bold">עד 600,000 פסו במשיכה אחת!</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <CreditCard className="w-5 h-5 text-gray-600 mt-1" />
              <div>
                <p className="font-bold text-gray-800">אפשר למשוך דולרים?</p>
                <p className="text-red-600">לא</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Tutorial */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">איך למשוך בלי להיעקץ?</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-1" />
              <p className="text-red-700">
                <strong>חשוב!</strong> בכספומטים הללו צריך <strong>לסרב</strong> את שער ההמרה שהם מציעים, 
                רק לאשר את העמלה של 5,500 פסו. צפו בסרטון!
              </p>
            </div>
          </div>
          <YouTubeEmbed videoId="I__mhsqLzCo" title="איך למשוך כסף בלי עמלות מיותרות" isShort={true} />
        </div>

        {/* ATM Locations */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">מיקומי כספומטים</h2>
          </div>
          <p className="text-gray-600 mb-4">
            כספומטי Banco Estado (הכתומים) עם העמלה הנמוכה ביותר:
          </p>
          <div className="space-y-3">
            <MapLink 
              url="https://maps.app.goo.gl/WENJ2PFUb2k9WUEx9" 
              label="סופר Eltit - הכספומט הכתום בתוך הסופר" 
            />
            <MapLink 
              url="https://maps.app.goo.gl/xpaKKUmWJ6UZPx9U7" 
              label="סופר נוסף - הכספומט הכתום בתוך הסופר" 
            />
            <MapLink 
              url="https://maps.app.goo.gl/7RZahtS1ASsBtLPo6" 
              label="ליד הבנק - 2 הכספומטים הראשונים מצד שמאל" 
            />
          </div>
        </div>

        {/* Casino Option */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800">אופציה 2: הקזינו (0% עמלה!)</h2>
          </div>
          <div className="bg-white p-4 rounded-lg mb-4">
            <p className="text-gray-700 leading-relaxed">
              למי שאין 0% עמלה על משיכה אתם יכולים להיכנס לקזינו. משלמים כניסה שעולה 
              <strong> 4,800 פסו (כ-15 שקל)</strong> ואז אפשר פשוט להעביר את הכרטיס ולהגיד שאתם רוצים כסף.
            </p>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 bg-white p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">אפשר למשוך עד <strong>1,000,000 פסו!</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-white p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">תגידו שזה בשביל לשחק, ואז תחליפו את הפתק בכסף במכונה</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-3 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">צריך להגיע עם דרכון</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-3 rounded-lg">
              <Info className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">נפתח ב-18:00</span>
            </div>
          </div>

          <MapLink 
            url="https://maps.app.goo.gl/cqgN4xd6KDBNLbpB7" 
            label="כתובת הקזינו" 
          />
        </div>

        {/* Summary */}
        <div className="bg-green-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">סיכום</h2>
          <ul className="space-y-2">
            <li>• <strong>האופציה הכי נוחה:</strong> כספומט Banco Estado בסופר Eltit - עמלה 5,500 פסו, עד 600,000 במשיכה</li>
            <li>• <strong>האופציה הכי משתלמת:</strong> הקזינו - עמלה 0% (רק כניסה 4,800), עד 1,000,000 פסו</li>
            <li>• <strong>זכרו:</strong> תמיד לסרב לשער ההמרה של הכספומט!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
