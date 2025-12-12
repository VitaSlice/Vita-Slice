function KitchenApp() {
  try {
    return (
      <div className="min-h-screen bg-gray-50" data-name="kitchen-app" data-file="kitchen-app.js">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-[var(--primary-color)]">Dashboard Dapur</h1>
              <a href="index.html" className="text-[var(--primary-color)] hover:underline">Kembali ke Beranda</a>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <OrderQueue />
        </div>
      </div>
    );
  } catch (error) {
    console.error('KitchenApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<KitchenApp />);