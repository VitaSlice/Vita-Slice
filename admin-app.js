// vitablend/admin-app.js

function SignatureProductManager() {
    const products = getSignatureProductData();

    return (
      <div className="bg-white rounded-lg shadow p-6" data-name="signature-manager">
        <h2 className="text-2xl font-bold mb-6">Manajemen Menu Signature (Data JS)</h2>
        <div className="space-y-4">
          {products.map(product => (
            <div key={product.objectId} className="border rounded-lg p-4 flex justify-between items-center">
              <div>
                <div className="font-semibold">{product.objectData.name}</div>
                <div className="text-sm text-gray-600">Rp {product.objectData.price.toLocaleString()}</div>
              </div>
              <span className="text-sm text-blue-600">Detail Nutrisi: {product.objectData.nutrients.length > 50 ? product.objectData.nutrients.substring(0, 50) + '...' : product.objectData.nutrients}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-yellow-600">Fitur penambahan/pengeditan dinonaktifkan. Data hanya ditampilkan dari JS.</p>
      </div>
    );
}

function AdminApp() {
  try {
    const [activeTab, setActiveTab] = React.useState('inventory');

    return (
      <div className="min-h-screen bg-gray-50" data-name="admin-app" data-file="admin-app.js">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-[var(--primary-color)]">Admin Dashboard (Mode JS)</h1>
              <a href="index.html" className="text-[var(--primary-color)] hover:underline">Kembali ke Beranda</a>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="flex space-x-4 mb-6">
            <button onClick={() => setActiveTab('inventory')} className={`px-6 py-3 rounded-lg font-medium ${activeTab === 'inventory' ? 'bg-[var(--primary-color)] text-white' : 'bg-white text-gray-700'}`}>
              Inventaris
            </button>
            <button onClick={() => setActiveTab('signature')} className={`px-6 py-3 rounded-lg font-medium ${activeTab === 'signature' ? 'bg-[var(--primary-color)] text-white' : 'bg-white text-gray-700'}`}>
              Menu Signature
            </button>
          </div>

          {activeTab === 'inventory' && <InventoryManager />}
          {activeTab === 'signature' && <SignatureProductManager />}
        </div>
      </div>
    );
  } catch (error) {
    console.error('AdminApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AdminApp />);