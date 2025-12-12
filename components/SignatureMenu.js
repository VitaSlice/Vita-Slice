// vitablend/components/SignatureMenu.js

function SignatureMenu({ onAddToCart }) {
  try {
    // Menggunakan data awal dari dbHelper sebagai sumber data
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false); // Langsung false

    React.useEffect(() => {
      loadProducts();
    }, []);

    const loadProducts = () => {
      try {
        // MENGAMBIL DATA DARI JS GLOBAL (dbHelper.js)
        const result = getSignatureProductData();
        setProducts(result);
      } catch (error) {
        console.error('Error loading products (from JS data):', error);
      } finally {
        setLoading(false);
      }
    };

    const handleAddToCart = (product) => {
      onAddToCart({
        name: product.objectData.name,
        price: product.objectData.price,
        type: 'signature',
        nutrients: product.objectData.nutrients
      });
    };

    if (loading) {
      return <div className="text-center py-20">Memuat menu...</div>;
    }
    
    // Kelompokkan produk berdasarkan tipe
    const blendedProducts = products.filter(p => p.objectData.type === 'blended');
    const slicedProducts = products.filter(p => p.objectData.type === 'sliced');

    const renderProducts = (productList, typeLabel, iconClass) => (
      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-8 border-b pb-2 flex items-center">
            <div className={`icon-${iconClass} text-3xl mr-3 text-[var(--primary-color)]`}></div>
            {typeLabel}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productList.map(product => (
            <div key={product.objectId} className="card hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[var(--secondary-color)] to-[var(--primary-color)] bg-opacity-20 rounded-lg mb-4 flex items-center justify-center">
                <div className={`icon-${iconClass} text-6xl text-[var(--primary-color)]`}></div>
              </div>
              <h3 className="text-xl font-bold mb-2">{product.objectData.name}</h3>
              <p className="text-[var(--text-secondary)] mb-4">{product.objectData.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[var(--primary-color)]">Rp {product.objectData.price.toLocaleString()}</span>
                <button onClick={() => handleAddToCart(product)} className="btn-primary">Tambah</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <section id="menu" className="container mx-auto px-4 py-16" data-name="signature-menu" data-file="components/SignatureMenu.js">
        <h2 className="text-4xl font-bold text-center mb-12">Menu Signature</h2>
        
        {/* Tampilkan Menu Blended */}
        {renderProducts(blendedProducts, 'Opsi Blended (Jus)', 'glass-water')}
        
        {/* Tampilkan Menu Sliced */}
        {renderProducts(slicedProducts, 'Opsi Sliced (Potongan Buah)', 'bowl-food')}

      </section>
    );
  } catch (error) {
    console.error('SignatureMenu component error:', error);
    return null;
  }
}