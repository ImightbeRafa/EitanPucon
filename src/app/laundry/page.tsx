import { Shirt, MapPin, Clock } from "lucide-react";

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

        {/* NEW - Our Laundry Service */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            {/* Image */}
            <div className="md:w-2/5">
              <img
                src="/hostels/lavanderia.jpeg"
                alt="המכבסה שלנו"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="md:w-3/5 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  🆕 חדש!
                </span>
              </div>
              <h2 className="text-2xl font-bold text-stone-800 mb-4">יש לנו מכבסה!</h2>
              
              <div className="space-y-3 text-stone-600 mb-4">
                <a 
                  href="https://maps.app.goo.gl/QmdFSrWs4R9thaLy7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-700 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Arauco 265</span>
                  <span className="text-xs text-green-600">← לחץ לניווט</span>
                </a>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>כל יום: 09:30 - 18:00</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-700">4,000</p>
                  <p className="text-xs text-stone-500">פסו לק״ג</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-orange-600">6,000</p>
                  <p className="text-xs text-stone-500">פסו לק״ג (ימי ראשון)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
