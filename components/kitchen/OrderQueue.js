// vitablend/components/kitchen/OrderQueue.js

const DUMMY_ORDERS = [
    { objectId: 'ord-101', objectData: { name: 'Pesananku Custom 1', type: 'custom', status: 'pending', orderDate: new Date(Date.now() - 60000).toISOString(), ingredients: '[{"name":"Strawberry","amount":150},{"name":"Pisang","amount":100}]' } },
    { objectId: 'ord-102', objectData: { name: 'Berry Blast', type: 'signature', status: 'processing', orderDate: new Date(Date.now() - 120000).toISOString(), ingredients: '' } },
    { objectId: 'ord-103', objectData: { name: 'Green Detox', type: 'signature', status: 'ready', orderDate: new Date(Date.now() - 180000).toISOString(), ingredients: '' } },
];

function OrderQueue() {
  try {
    // Menggunakan state lokal untuk simulasi orders
    const [orders, setOrders] = React.useState(DUMMY_ORDERS);
    const [loading, setLoading] = React.useState(false);

    // loadOrders sekarang hanya mengembalikan data dummy
    const loadOrders = () => {
      setLoading(true);
      setTimeout(() => {
        setOrders(DUMMY_ORDERS.sort((a, b) => 
            new Date(a.objectData.orderDate) - new Date(b.objectData.orderDate)
        ));
        setLoading(false);
      }, 500);
    };

    React.useEffect(() => {
      loadOrders();
      // Interval dihapus karena tidak ada data real-time dari DB
    }, []);

    const updateOrderStatus = (orderId, newStatus) => {
      // LOGIC SIMULASI: Mengupdate state lokal
      const updatedOrders = orders.map(order => 
        order.objectId === orderId 
        ? { ...order, objectData: { ...order.objectData, status: newStatus } } 
        : order
      );
      setOrders(updatedOrders.filter(o => o.objectData.status !== 'completed'));
      // NOTE: Perubahan ini TIDAK PERSISTEN
    };

    if (loading) return <div className="text-center py-10">Memuat pesanan...</div>;

    const pendingOrders = orders.filter(o => o.objectData.status === 'pending');
    const processingOrders = orders.filter(o => o.objectData.status === 'processing');
    const readyOrders = orders.filter(o => o.objectData.status === 'ready');

    return (
      <div data-name="order-queue" data-file="components/kitchen/OrderQueue.js">
        <p className="text-center text-red-500 mb-4 font-semibold">Dashboard Dapur: Menggunakan Data Pesanan Simulasi (Non-Persisten)</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OrderColumn title="Menunggu" orders={pendingOrders} status="pending" onUpdateStatus={updateOrderStatus} />
          <OrderColumn title="Sedang Diracik" orders={processingOrders} status="processing" onUpdateStatus={updateOrderStatus} />
          <OrderColumn title="Siap Pickup" orders={readyOrders} status="ready" onUpdateStatus={updateOrderStatus} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('OrderQueue error:', error);
    return null;
  }
}

function OrderColumn({ title, orders, status, onUpdateStatus }) {
  const getNextStatus = () => {
    if (status === 'pending') return 'processing';
    if (status === 'processing') return 'ready';
    return 'completed';
  };

  const parseIngredients = (ingredientsData) => {
    try {
      if (!ingredientsData) return [];
      if (typeof ingredientsData === 'string') {
        return JSON.parse(ingredientsData);
      }
      if (Array.isArray(ingredientsData)) {
        return ingredientsData;
      }
      return [];
    } catch (error) {
      console.error('Error parsing ingredients:', error);
      return [];
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-bold mb-4">{title} ({orders.length})</h3>
      <div className="space-y-4">
        {orders.map(order => {
          const ingredients = parseIngredients(order.objectData.ingredients);
          return (
            <div key={order.objectId} className="border rounded-lg p-4">
              <div className="font-semibold mb-2">{order.objectData.name}</div>
              <div className="text-sm text-gray-600 mb-2">
                {new Date(order.objectData.orderDate).toLocaleString('id-ID')}
              </div>
              {order.objectData.type === 'custom' && ingredients.length > 0 && (
                <div className="text-sm mb-2">
                  <div className="font-semibold">Bahan:</div>
                  {ingredients.map((ing, idx) => (
                    <div key={idx}>• {ing.name}: {ing.amount}g</div>
                  ))}
                </div>
              )}
              <button onClick={() => onUpdateStatus(order.objectId, getNextStatus())} className="w-full mt-2 px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg text-sm">
                {status === 'pending' && 'Mulai Racik'}
                {status === 'processing' && 'Tandai Siap'}
                {status === 'ready' && 'Selesai'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}