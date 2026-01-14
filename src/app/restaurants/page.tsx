import { UtensilsCrossed, Fish, Star, Pizza, Beef, Leaf } from "lucide-react";

export default function RestaurantsPage() {
  const restaurants = [
    {
      category: "סושי",
      icon: Fish,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
      places: ["SUSHI MORA", "BLACK FOREST"]
    },
    {
      category: "אוכל ישראלי",
      icon: Star,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      places: ["JUST DELICIOUS"]
    },
    {
      category: "איטלקי",
      icon: UtensilsCrossed,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      places: ["ANDIAMO", "FIORENTINI"]
    },
    {
      category: "המבורגר",
      icon: Beef,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
      places: ["EL CAMINO"]
    },
    {
      category: "פיצה",
      icon: Pizza,
      color: "from-red-500 to-rose-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      places: ["PIZZA CALA", "LA COVA"]
    },
    {
      category: "תאילנדי",
      icon: Leaf,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      places: ["PHUKET"]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <UtensilsCrossed className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">מסעדות בפוקון</h1>
          </div>
          <p className="text-xl opacity-90">
            המלצות למסעדות הכי טובות בעיר
          </p>
        </div>

        {/* Restaurant Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {restaurants.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-br ${category.color} p-4 flex items-center gap-3`}>
                <category.icon className="w-8 h-8 text-white" />
                <h2 className="text-xl font-bold text-white">{category.category}</h2>
              </div>
              <div className="p-4 space-y-2">
                {category.places.map((place, placeIndex) => (
                  <div 
                    key={placeIndex}
                    className={`${category.bgColor} ${category.textColor} p-3 rounded-lg font-medium text-center`}
                  >
                    {place}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tip */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <p className="text-yellow-800 text-center">
            💡 <strong>טיפ:</strong> רוב המסעדות נמצאות ברחוב הראשי של פוקון - פשוט תטיילו ותגלו!
          </p>
        </div>
      </div>
    </div>
  );
}
