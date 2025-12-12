// vitablend/components/admin/InventoryManager.js

function InventoryManager() {
  // Menggunakan data awal dari dbHelper sebagai sumber data
  const initialData = getIngredientData().map(item => ({
    ...item,
    objectData: {
      ...item.objectData,
      stock: parseInt(item.objectData.stock) // Memastikan stok adalah integer
    }
  }));

  try {
    const [ingredients, setIngredients] = React.useState(initialData);
    const [loading, setLoading] = React.useState(false); // Langsung false karena data sudah ada
    const [showAddForm, setShowAddForm] = React.useState(false);
    const [formData, setFormData] = React.useState({
      name: '', stock: 0, unit: 'gram', calories: 0, sugar: 0, vitaminC: 0, vitaminA: 0
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // LOGIC SIMULASI: Membuat ID unik dan menambahkannya ke state
      const newIngredient = {
        objectId: `new-ing-${Date.now()}`,
        objectData: {
            ...formData,
            stock: parseInt(formData.stock),
            calories: parseFloat(formData.calories) || 0,
            sugar: parseFloat(formData.sugar) || 0,
            vitaminC: parseFloat(formData.vitaminC) || 0,
            vitaminA: parseFloat(formData.vitaminA) || 0,
        }
      };

      setIngredients([...ingredients, newIngredient]);
      setFormData({ name: '', stock: 0, unit: 'gram', calories: 0, sugar: 0, vitaminC: 0, vitaminA: 0 });
      setShowAddForm(false);
      // NOTE: Perubahan ini TIDAK PERSISTEN (tidak tersimpan setelah refresh halaman)
      alert(`Bahan baku ${newIngredient.objectData.name} berhasil ditambahkan ke memori lokal!`);
    };

    const updateStock = (id, newStockValue) => {
      const newStockInt = parseInt(newStockValue) || 0;
      
      // LOGIC SIMULASI: Mengupdate state lokal
      setIngredients(ingredients.map(ing => 
        ing.objectId === id 
        ? { ...ing, objectData: { ...ing.objectData, stock: newStockInt } } 
        : ing
      ));
      // NOTE: Perubahan ini TIDAK PERSISTEN
    };

    if (loading) return <div className="text-center py-10">Memuat data...</div>;

    return (
      <div data-name="inventory-manager" data-file="components/admin/InventoryManager.js">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Manajemen Inventaris (Data JS)</h2>
          <button onClick={() => setShowAddForm(!showAddForm)} className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg">
            {showAddForm ? 'Batal' : 'Tambah Bahan'}
          </button>
        </div>

        {showAddForm && (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Nama" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="p-2 border rounded" required />
              <input type="number" placeholder="Stok (gram)" value={formData.stock} onChange={(e) => setFormData({...formData, stock: e.target.value})} className="p-2 border rounded" required />
              <input type="number" placeholder="Kalori per 100g" value={formData.calories} onChange={(e) => setFormData({...formData, calories: e.target.value})} className="p-2 border rounded" />
              <input type="number" placeholder="Gula per 100g" value={formData.sugar} onChange={(e) => setFormData({...formData, sugar: e.target.value})} className="p-2 border rounded" />
              <input type="number" placeholder="Vitamin C per 100g" value={formData.vitaminC} onChange={(e) => setFormData({...formData, vitaminC: e.target.value})} className="p-2 border rounded" />
              <input type="number" placeholder="Vitamin A per 100g" value={formData.vitaminA} onChange={(e) => setFormData({...formData, vitaminA: e.target.value})} className="p-2 border rounded" />
            </div>
            <button type="submit" className="mt-4 px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg">Simpan ke Memori Lokal</button>
          </form>
        )}

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">Nama</th>
                <th className="px-6 py-3 text-left">Stok (gram)</th>
                <th className="px-6 py-3 text-left">Kalori/100g</th>
                <th className="px-6 py-3 text-left">Gula/100g (g)</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map(ing => (
                <tr key={ing.objectId} className="border-t">
                  <td className="px-6 py-4">{ing.objectData.name}</td>
                  <td className="px-6 py-4">
                    {/* Input di sini mengupdate state lokal, BUKAN database */}
                    <input 
                      type="number" 
                      value={ing.objectData.stock} 
                      onChange={(e) => updateStock(ing.objectId, e.target.value)} 
                      className="w-24 p-1 border rounded" 
                      min="0"
                    />
                  </td>
                  <td className="px-6 py-4">{ing.objectData.calories}</td>
                  <td className="px-6 py-4">{ing.objectData.sugar}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-sm ${ing.objectData.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {ing.objectData.stock > 0 ? 'Tersedia' : 'Habis'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('InventoryManager error:', error);
    return null;
  }
}