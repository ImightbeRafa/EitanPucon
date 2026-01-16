import { UtensilsCrossed, MapPin } from "lucide-react";

export default function RestaurantsPage() {
  const restaurants = [
    { 
      category: "סושי", 
      places: [
        { name: "Sushi Mora", url: "https://maps.app.goo.gl/yhYVSnqiGwEf3YNh9" },
        { name: "Selva Negra", url: "https://maps.app.goo.gl/n3fX6ABfsQSwxqJo7" }
      ] 
    },
    { 
      category: "אוכל ישראלי", 
      places: [
        { name: "Just Delicious", url: "https://maps.app.goo.gl/zYrB81bRfvztgRAh9" }
      ] 
    },
    { 
      category: "איטלקי", 
      places: [
        { name: "Andiamo", url: "https://maps.app.goo.gl/Zup7m7ebGt43GDjD7" },
        { name: "Fiorentini", url: "https://maps.app.goo.gl/veFGRY6V6ni7ychMA" }
      ] 
    },
    { 
      category: "המבורגר", 
      places: [
        { name: "El Camino", url: "https://maps.app.goo.gl/GCpCorZJB5MgjPgBA" }
      ] 
    },
    { 
      category: "פיצה", 
      places: [
        { name: "Pizza Cala", url: "https://maps.app.goo.gl/E2EK5mH6SeZRco8i9" },
        { name: "La Cova", url: "https://maps.app.goo.gl/da691mQdnk59tzdY8" }
      ] 
    },
    { 
      category: "תאילנדי", 
      places: [
        { name: "Phuket", url: "https://maps.app.goo.gl/7MgpYqHrMvWyyWq19" }
      ] 
    },
    { 
      category: "קפה", 
      places: [
        { name: "Madd Goat", url: "https://maps.app.goo.gl/2MVK8a9RycCXGLGQA" }
      ] 
    },
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
                  place.url ? (
                    <a 
                      key={placeIndex}
                      href={place.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xl text-stone-800 font-light hover:text-green-600 transition-colors group"
                    >
                      {place.name}
                      <MapPin className="w-4 h-4 text-stone-400 group-hover:text-green-600" />
                    </a>
                  ) : (
                    <p 
                      key={placeIndex}
                      className="text-xl text-stone-800 font-light"
                    >
                      {place.name}
                    </p>
                  )
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
