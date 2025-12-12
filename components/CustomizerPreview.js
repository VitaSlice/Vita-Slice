function CustomizerPreview({ onAddToCart }) {
  try {
    const [size, setSize] = React.useState('medium');
    const [mixType, setMixType] = React.useState('blend');
    const [base, setBase] = React.useState('green_tea');
    const [ingredients, setIngredients] = React.useState([]);
    const [availableFruits, setAvailableFruits] = React.useState([]);
    const [persona, setPersona] = React.useState('');
    
    // Default sugarLevel diubah ke 'no_sugar' agar lebih sehat (opsional)
    const [sugarLevel, setSugarLevel] = React.useState('no_sugar'); // 'no_sugar', 'less', 'normal', 'big'
    const [iceLevel, setIceLevel] = React.useState('no_ice'); // 'no_ice', 'less', 'normal', 'big'

    React.useEffect(() => {
      loadAvailableFruits();
    }, []);

    const loadAvailableFruits = () => {
      try {
        const result = getIngredientData(); 
        setAvailableFruits(result.filter(i => i.objectData.stock > 0));
      } catch (error) {
        console.error('Error loading fruits (from JS data):', error);
      }
    };

    const addIngredient = (fruit) => {
      setIngredients(prevIngredients => {
        const existing = prevIngredients.find(i => i.name === fruit.objectData.name);
        if (existing) {
          // Tambah 50g jika sudah ada, maks 300g
          return prevIngredients.map(i => 
            i.name === fruit.objectData.name ? { ...i, amount: Math.min(i.amount + 50, 300) } : i
          );
        } else {
          return [...prevIngredients, { ...fruit.objectData, id: Date.now(), amount: 100 }];
        }
      });
    };

    const updateAmount = (id, amount) => {
      setIngredients(ingredients.map(i => i.id === id ? { ...i, amount: parseInt(amount) } : i));
    };

    const removeIngredient = (id) => {
      setIngredients(ingredients.filter(i => i.id !== id));
    };

    // Meneruskan state sugarLevel ke fungsi perhitungan
    const nutrition = calculateNutrition(base, ingredients, size, sugarLevel); 

    const handleAddToCart = () => {
      if (ingredients.length === 0) {
        alert('Tambahkan minimal satu buah/sayur');
        return;
      }
      
      const itemName = mixType === 'blend' ? 'Custom Blend' : 'Custom Slices';

      onAddToCart({
        name: itemName,
        type: 'custom',
        mixType, 
        size,
        base,
        ingredients,
        nutrition,
        price: (mixType === 'blend' ? 25000 : 22000) + (size === 'large' ? 5000 : 0),
        sugarLevel,
        iceLevel
      });
      setIngredients([]);
    };

    const activeBtnClass = "bg-[var(--primary-color)] text-white";
    const inactiveBtnClass = "bg-white text-[var(--primary-color)] border border-[var(--primary-color)]";

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-name="customizer" data-file="components/CustomizerPreview.js">
        <div className="card">
          <h3 className="text-2xl font-bold mb-6">Buat Minuman</h3>
          
          {/* Pilihan Mix Type (Blend / Slice) */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Pilih Tipe</label>
            <div className="flex space-x-4">
                <button 
                    onClick={() => setMixType('blend')} 
                    className={`flex-1 p-3 rounded-lg font-medium transition-colors ${mixType === 'blend' ? activeBtnClass : inactiveBtnClass}`}
                >
                    <div className="icon-blender text-lg mr-2 inline-block"></div> Blend (Jus)
                </button>
                <button 
                    onClick={() => setMixType('slice')} 
                    className={`flex-1 p-3 rounded-lg font-medium transition-colors ${mixType === 'slice' ? activeBtnClass : inactiveBtnClass}`}
                >
                    <div className="icon-bowl-food text-lg mr-2 inline-block"></div> Slice (Potongan)
                </button>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block font-semibold mb-2">Ukuran</label>
            <select value={size} onChange={(e) => setSize(e.target.value)} className="w-full p-3 border rounded-lg">
              <option value="medium">Medium (500ml)</option>
              <option value="large">Large (750ml)</option>
            </select>
          </div>
          
          {/* PILIHAN TAKARAN GULA - DIPERBARUI */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Takaran Gula</label>
            <div className="flex space-x-2">
                <button 
                    onClick={() => setSugarLevel('no_sugar')} 
                    className={`flex-1 p-3 rounded-lg text-sm font-medium transition-colors ${sugarLevel === 'no_sugar' ? activeBtnClass : inactiveBtnClass}`}
                >
                    <div className="icon-x text-sm mr-1 inline-block"></div> Tanpa Gula
                </button>
                <button 
                    onClick={() => setSugarLevel('less')} 
                    className={`flex-1 p-3 rounded-lg text-sm font-medium transition-colors ${sugarLevel === 'less' ? activeBtnClass : inactiveBtnClass}`}
                >
                    <div className="icon-minus text-sm mr-1 inline-block"></div> Sedikit
                </button>
                <button 
                    onClick={() => setSugarLevel('normal')} 
                    className={`flex-1 p-3 rounded-lg text-sm font-medium transition-colors ${sugarLevel === 'normal' ? activeBtnClass : inactiveBtnClass}`}
                >
                    <div className="icon-grip-horizontal text-sm mr-1 inline-block"></div> Normal
                </button>
                <button 
                    onClick={() => setSugarLevel('big')} 
                    className={`flex-1 p-3 rounded-lg text-sm font-medium transition-colors ${sugarLevel === 'big' ? activeBtnClass : inactiveBtnClass}`}
                >
                    <div className="icon-plus text-sm mr-1 inline-block"></div> Banyak
                </button>
            </div>
          </div>

          {/* PILIHAN ES BATU - DIPERBARUI */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Es Batu</label>
            <div className="flex space-x-2">
                <button 
                    onClick={() => setIceLevel('no_ice')} 
                    className={`flex-1 p-3 rounded-lg text-sm font-medium transition-colors ${iceLevel === 'no_ice' ? activeBtnClass : inactiveBtnClass}`}
                >
                    <div className="icon-x text-sm mr-1 inline-block"></div> Tanpa Es
                </button>
                <button 
                    onClick={() => setIceLevel('less')} 
                    className={`flex-1 p-3 rounded-lg text-sm font-medium transition-colors ${iceLevel === 'less' ? activeBtnClass : inactiveBtnClass}`}
                >
                    <div className="icon-minus text-sm mr-1 inline-block"></div> Sedikit Es
                </button>
                <button 
                    onClick={() => setIceLevel('normal')} 
                    className={`flex-1 p-3 rounded-lg text-sm font-medium transition-colors ${iceLevel === 'normal' ? activeBtnClass : inactiveBtnClass}`}
                >
                    <div className="icon-grip-horizontal text-sm mr-1 inline-block"></div> Normal
                </button>
                <button 
                    onClick={() => setIceLevel('big')} 
                    className={`flex-1 p-3 rounded-lg text-sm font-medium transition-colors ${iceLevel === 'big' ? activeBtnClass : inactiveBtnClass}`}
                >
                    <div className="icon-plus text-sm mr-1 inline-block"></div> Banyak Es
                </button>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block font-semibold mb-2">Cairan Dasar</label>
            <select value={base} onChange={(e) => setBase(e.target.value)} className="w-full p-3 border rounded-lg">
              <option value="Jasmine_Tea">Teh melati</option>
              <option value="coconut">Air Kelapa</option>
              <option value="none">Original (Tanpa Kuah)</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2">Tambah Buah/Sayur</label>
            <div className="grid grid-cols-2 gap-2">
              {availableFruits.map(fruit => (
                <button key={fruit.objectId} onClick={() => addIngredient(fruit)} className="p-2 border rounded-lg hover:border-[var(--primary-color)] transition-colors">
                  {fruit.objectData.name}
                </button>
              ))}
            </div>
          </div>

          {ingredients.map(ing => (
            <div key={ing.id} className="flex items-center space-x-2 mb-2 p-2 bg-gray-50 rounded">
              <span className="flex-1">{ing.name}</span>
              <input type="number" value={ing.amount} onChange={(e) => updateAmount(ing.id, e.target.value)} className="w-20 p-1 border rounded" min="10" max="300" />
              <span>g</span>
              <button onClick={() => removeIngredient(ing.id)} className="text-red-500 hover:text-red-700">
                <div className="icon-x text-lg"></div>
              </button>
            </div>
          ))}

          <button onClick={handleAddToCart} className="btn-primary w-full mt-6">Tambah ke Keranjang</button>
        </div>

        <NutritionTracker nutrition={nutrition} persona={persona} onPersonaChange={setPersona} />
      </div>
    );
  } catch (error) {
    console.error('CustomizerPreview component error:', error);
    return null;
  }
}
