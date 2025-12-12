function NutritionTracker({ nutrition, persona, onPersonaChange }) {
  try {
    const personas = [
      { id: 'high_vitamin_c', label: 'Butuh Vitamin C Tinggi', limit: { calories: 200, sugar: 25 } },
      { id: 'low_calorie', label: 'Rendah Kalori untuk Diet', limit: { calories: 150, sugar: 15 } },
      { id: 'energy_boost', label: 'Boost Energi', limit: { calories: 250, sugar: 30 } }
    ];

    const selectedPersona = personas.find(p => p.id === persona);
    const isWithinLimit = !selectedPersona || 
      (nutrition.calories <= selectedPersona.limit.calories && 
       nutrition.sugar <= selectedPersona.limit.sugar);

    return (
      <div className="card" data-name="nutrition-tracker" data-file="components/NutritionTracker.js">
        <h3 className="text-2xl font-bold mb-6">Pelacak Nutrisi</h3>
        
        <div className="mb-6">
          <label className="block font-semibold mb-2">Pilih Tujuan Kesehatan</label>
          <select value={persona} onChange={(e) => onPersonaChange(e.target.value)} className="w-full p-3 border rounded-lg">
            <option value="">Tidak Ada</option>
            {personas.map(p => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
          </select>
        </div>

        {selectedPersona && !isWithinLimit && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded-lg mb-4">
            <div className="flex items-start">
              <div className="icon-alert-triangle text-xl mr-2"></div>
              <span className="text-sm">Komposisi melebihi batas rekomendasi untuk tujuan Anda</span>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Kalori</span>
              <span className="text-2xl font-bold text-blue-600">{nutrition.calories} kcal</span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${Math.min((nutrition.calories / 300) * 100, 100)}%` }}></div>
            </div>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Gula</span>
              <span className="text-2xl font-bold text-orange-600">{nutrition.sugar} g</span>
            </div>
            <div className="w-full bg-orange-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: `${Math.min((nutrition.sugar / 50) * 100, 100)}%` }}></div>
            </div>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Vitamin C</span>
              <span className="text-2xl font-bold text-green-600">{nutrition.vitaminC} mg</span>
            </div>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Vitamin A</span>
              <span className="text-2xl font-bold text-purple-600">{nutrition.vitaminA} mcg</span>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('NutritionTracker component error:', error);
    return null;
  }
}