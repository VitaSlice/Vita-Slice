// vitablend/components/Cart.js

function Cart({ items, onRemove, onClose }) {
  try {
    const total = items.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = () => {
      // MENGHAPUS LOGIC TRICKLE DATABASE CREATION
      if (items.length === 0) return;

      console.log('Pesanan yang di-checkout (tidak disimpan ke database):', items);
      
      alert('Pesanan berhasil dibuat (hanya simulasi checkout)! Pesanan TIDAK tersimpan di Dashboard Dapur.');
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50" onClick={onClose} data-name="cart" data-file="components/Cart.js">
        <div className="bg-white w-full md:w-96 p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Keranjang</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
              <div className="icon-x text-xl"></div>
            </button>
          </div>

          {items.length === 0 ? (
            <p className="text-center text-gray-500 py-10">Keranjang kosong</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{item.name}</h3>
                      <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700">
                        <div className="icon-trash-2 text-lg"></div>
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">{item.type === 'custom' ? 'Custom' : 'Signature'}</p>
                    <p className="font-bold text-[var(--primary-color)]">Rp {item.price.toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-2xl font-bold text-[var(--primary-color)]">Rp {total.toLocaleString()}</span>
                </div>
                {/* Tombol memanggil handleCheckout tanpa koneksi DB */}
                <button onClick={handleCheckout} className="btn-primary w-full">Checkout (Simulasi)</button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Cart component error:', error);
    return null;
  }
}