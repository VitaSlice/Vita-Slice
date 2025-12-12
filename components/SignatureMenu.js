// vitablend/components/SignatureMenu.js

function SignatureMenu({ onAddToCart }) {
  try {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
      loadProducts();
    }, []);

    const loadProducts = () => {
      try {
        const result = getSignatureProductData();
        setProducts(result);
      } catch (error) {
        console.error('Error loading products:', error);
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
    
    // Kelompokkan produk
    const blendedProducts = products.filter(p => p.objectData.type === 'blended');
    const slicedProducts = products.filter(p => p.objectData.type === 'sliced');

    // --- FUNGSI RENDER DIPERBARUI UNTUK GAMBAR ---
    const renderProducts = (productList, typeLabel, iconClass) => (
      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-8 border-b pb-2 flex items-center">
            <div className={`icon-${iconClass} text-3xl mr-3 text-[var(--primary-color)]`}></div>
            {typeLabel}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productList.map(product => (
            <div key={product.objectId} className="card hover:shadow-lg transition-shadow bg-white rounded-xl overflow-hidden">
              
              {/* BAGIAN GAMBAR */}
              <div className="h-48 w-full relative">
                {product.objectData.image ? (
                  // Jika ada link gambar di database, tampilkan gambar
                  <img 
                    src={product.objectData.image} 
                    alt={product.objectData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Jika gambar error/rusak, sembunyikan gambar dan tampilkan icon cadangan
                      e.target.style.display = 'none';
                      e.target.nextSibling.classList.remove('hidden');
                      e.target.nextSibling.classList.add('flex');
                    }}
                  />
                ) : null}

                {/* Fallback Icon (Muncul jika tidak ada gambar atau gambar error) */}
                <div className={`absolute inset-0 items-center justify-center bg-gradient-to-br from-[var(--secondary-color)] to-[var(--primary-color)] bg-opacity-20 ${product.objectData.image ? 'hidden' : 'flex'}`}>
                   <div className={`icon-${iconClass} text-6xl text-[var(--primary-color)]`}></div>
                </div>
              </div>

              {/* BAGIAN TEKS */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.objectData.name}</h3>
                <p className="text-[var(--text-secondary)] mb-4 text-sm">{product.objectData.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-2xl font-bold text-[var(--primary-color)]">Rp {product.objectData.price.toLocaleString()}</span>
                  <button onClick={() => handleAddToCart(product)} className="btn-primary py-2 px-4 text-sm">Tambah</button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    );

    return (
      <section id="menu" className="container mx-auto px-4 py-16" data-name="signature-menu" data-file="components/SignatureMenu.js">
        <h2 className="text-4xl font-bold text-center mb-12">Menu Signature</h2>
        
        {/* Tampilkan Menu Sliced */}
        {renderProducts(slicedProducts, 'Opsi Sliced (Potongan Buah)', 'bowl-food')}

        {/* Jika Anda ingin menampilkan Blended juga, uncomment baris di bawah: */}
        {/* {renderProducts(blendedProducts, 'Opsi Blended (Jus)', 'glass-water')} */}

      </section>
    );
  } catch (error) {
    console.error('SignatureMenu component error:', error);
    return null;
  }
}
