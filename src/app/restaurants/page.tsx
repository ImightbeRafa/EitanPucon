import { UtensilsCrossed } from "lucide-react";

export default function RestaurantsPage() {
  const restaurants = [
    { category: "סושי", places: ["Sushi Mora", "Selva Negra"] },
    { category: "אוכל ישראלי", places: ["Just Delicious"] },
    { category: "איטלקי", places: ["Andiamo", "Fiorentini"] },
    { category: "המבורגר", places: ["El Camino"] },
    { category: "פיצה", places: ["Pizza Cala", "La Cova"] },
    { category: "תאילנדי", places: ["Phuket"] },
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-stone-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-900 rounded-full mb-4">
            <UtensilsCrossed className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-2">
            מסעדות מומלצות
          </h1>
          <p className="text-stone-500">
            פוקון, צ׳ילה
          </p>
        </div>

        {/* Restaurant List */}
        <div className="space-y-8">
          {restaurants.map((category, index) => (
            <div key={index} className="border-b border-stone-200 pb-6 last:border-0">
              <h2 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-3">
                {category.category}
              </h2>
              <div className="space-y-2">
                {category.places.map((place, placeIndex) => (
                  <p 
                    key={placeIndex}
                    className="text-xl text-stone-800 font-light"
                  >
                    {place}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-stone-200 text-center">
          <p className="text-stone-400 text-sm">
            רוב המסעדות נמצאות ברחוב הראשי של פוקון
          </p>
        </div>
      </div>
    </div>
  );
}
