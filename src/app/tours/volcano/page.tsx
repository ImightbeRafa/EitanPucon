import Link from "next/link";
import { ArrowRight, Clock, Mountain, DollarSign, Backpack, CheckCircle, AlertTriangle, Play } from "lucide-react";

export default function VolcanoPage() {
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
              <Mountain className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">הר געש וויאריקה</h1>
          </div>
          <p className="text-xl opacity-90">
            אחד מההרי געש הכי פעילים בדרום אמריקה והכי פעיל בצ׳ילה
          </p>
        </div>

        {/* Video Link */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">צפו בסרטון</h2>
          <a 
            href="https://www.youtube.com/watch?v=pm-luSFB_Vw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative rounded-xl overflow-hidden group"
          >
            <img 
              src="https://img.youtube.com/vi/pm-luSFB_Vw/maxresdefault.jpg" 
              alt="VILLARICA VOLCANO WITH EITAN HOSTEL PUCON"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="bg-red-600 p-4 rounded-full group-hover:scale-110 transition-transform">
                <Play className="w-12 h-12 text-white fill-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-bold">VILLARICA VOLCANO WITH EITAN HOSTEL PUCON</p>
              <p className="text-gray-300 text-sm">צפו בסרטון ביוטיוב</p>
            </div>
          </a>
        </div>

        {/* Safety Notice */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-bold text-green-800 mb-1">מצב ביטחוני</h3>
              <p className="text-green-700">
                ברגע הזה הפעילות שיש בהר רגועה מאוד ולפי ההנחיות הביטחוניות האור כרגע ירוק, 
                זאת אומרת שאין סכנת התפרצות.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">מחירים</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-700">מזומן</span>
              <span className="font-bold text-green-600 text-xl">145,000 פסו</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-700">לבעלי מוצ׳יקארד</span>
              <span className="font-bold text-green-600 text-xl">135,000 פסו</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-700">רכבל (חוסך ~שעה בכל כיוון)</span>
              <span className="font-bold text-blue-600 text-xl">20,000 פסו</span>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg mt-4">
              <p className="text-yellow-800 font-medium">
                <AlertTriangle className="w-5 h-5 inline ml-2" />
                תשלום אך ורק במזומן! עם ביט 10% עמלה
              </p>
            </div>
          </div>
        </div>

        {/* Info about the climb */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">מידע על הטיפוס</h2>
          <div className="space-y-4">
            <div className="border-r-4 border-orange-500 pr-4">
              <h3 className="font-bold text-gray-800">הטיפוס קשה?</h3>
              <p className="text-gray-600">הקושי מאוד תלוי בכל אחד.. הוא בערך 7 מתוך 10.</p>
            </div>
            <div className="border-r-4 border-orange-500 pr-4">
              <h3 className="font-bold text-gray-800">כמה קילומטרים זה?</h3>
              <p className="text-gray-600">
                העלייה בזיגזגים, לא בקו ישר והקצב איטי (יש לנו במיוחד מדריכים מאוד סובלניים) - 
                יוצא בערך 5 ק״מ הליכה.
              </p>
            </div>
            <div className="border-r-4 border-orange-500 pr-4">
              <h3 className="font-bold text-gray-800">מה אם הקצב הליכה שלי איטי?</h3>
              <p className="text-gray-600">
                המדריכים כאן בשביל לעזור בצורה פרטית לכל אחד מכם. תמיד מפרידים מדריך שנשאר 
                מאחורה אם אלה שיותר קשה להם.
              </p>
            </div>
            <div className="border-r-4 border-orange-500 pr-4">
              <h3 className="font-bold text-gray-800">אני רגיל לטרקים ובא לי לרוץ אותו</h3>
              <p className="text-gray-600">
                אין בעיה, אנחנו מביאים מדריך על כל 3-4 מטיילים, אז הקבוצה לא חייבת ללכת כולה יחד.
              </p>
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
                טיפוס
              </div>
              <p className="text-gray-700">
                5 שעות (4 עם רכבל). חשוב מאוד לציין שיש הגבלה של זמן להגיע לפסגה שהיא בערך 
                עד שעה 14:00 מבחינה בטיחותית.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                איסוף
              </div>
              <p className="text-gray-700">
                אנחנו נאסוף אתכם מההוסטל באותו בוקר בין השעה 6:00 ל-6:30. אתם צריכים להיות מוכנים 
                החל מהשעה הזו כי תמיד צריך לאסוף מכמה הוסטלים.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-bold">
                חזרה
              </div>
              <p className="text-gray-700">
                בין השעה 15:00 לשעה 18:00. יהיה תלוי בקצב הקבוצה.
              </p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <p className="text-blue-800">
              <strong>המלצה:</strong> מאוד מומלץ לקחת את הרכבל שתחסוך לכם שעה של הליכה גם בהלוך וגם בחזור
            </p>
          </div>
        </div>

        {/* Equipment provided */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Backpack className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800">מה אתם מקבלים מאיתנו?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "תיק גב",
              "גרזן",
              "חותלות",
              "חליפה מלאה נגד מים ורוח",
              "כפפות",
              "מסיכת גז",
              "סקי טוסיק",
              "דוקרנים",
              "נעלי טרקים לשלג*",
              "מקלות הליכה (לפי בקשה)"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            * מקבלים נעלי טרקים שהם מיועדים לטיפוס הרים בשלג. במקרה ואתם חושבים שיש לכם נעליים מתאימות 
            תביאו אותם. במידה ותקבלו אישור מהמדריך תוכלו לטפס איתם.
          </p>
        </div>

        {/* What to bring */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">מה להביא איתכם?</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { item: "בקבוק מים", detail: "מינימום 2 ליטרים" },
              { item: "אוכל", detail: "2-3 סנדוויצ׳ים טעימים" },
              { item: "קרם הגנה", detail: "לשים בכל עצירה אם שמשי" },
              { item: "משקפי שמש", detail: "להשתמש לאורך כל הדרך!" },
              { item: "מכנסי טיולים או טייץ", detail: "" },
              { item: "לבוש חם בשכבות", detail: "חום צוואר וכפפות מומלץ" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-bold text-gray-800">{item.item}</p>
                {item.detail && <p className="text-gray-600 text-sm">{item.detail}</p>}
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            💡 משקפי שמש אפשר להשכיר ב-5,000 מהסוכנות או לקנות ב-Mall Chino בזול.
          </p>
        </div>

        {/* Registration */}
        <div className="bg-green-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">זהו, אני בפנים! מה השלב הבא?</h2>
          <div className="space-y-4">
            <p>
              <strong>אם אתם נמצאים בפוקון:</strong> להגיע אלי להוסטל לשלם ולהירשם.
            </p>
            <p>
              <strong>אם זה דרך הווטסאפ:</strong> לשלוח בבקשה:
            </p>
            <ul className="list-disc list-inside mr-4 space-y-1">
              <li>שמות מלאים באנגלית</li>
              <li>מידות נעליים</li>
              <li>מידות חולצה לחליפה</li>
            </ul>
            <p>
              לשלוח פיקדון בביט על כל אחד מכם של <strong>350 שקל</strong> וברגע שמתבצע התשלום 
              מולי או מול המדריך אני מסרב את הפיקדון.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
