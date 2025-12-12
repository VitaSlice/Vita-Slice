// vitablend/app.js

class ErrorBoundary extends React.Component {
// ... kode ErrorBoundary tetap sama
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Terjadi Kesalahan</h1>
            <p className="text-gray-600 mb-4">Maaf, terjadi kesalahan yang tidak terduga.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Muat Ulang Halaman
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [cart, setCart] = React.useState([]);
    const [showCart, setShowCart] = React.useState(false);

    // MENGHAPUS PEMANGGILAN initializeDatabase()
    
    const addToCart = (item) => {
      setCart([...cart, { ...item, id: Date.now() }]);
    };

    const removeFromCart = (id) => {
      setCart(cart.filter(item => item.id !== id));
    };

    return (
      <div className="min-h-screen bg-gray-50" data-name="app" data-file="app.js">
        <Header cartCount={cart.length} onCartClick={() => setShowCart(!showCart)} />
        <Hero />
        <SignatureMenu onAddToCart={addToCart} />
        <div id="customize" className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">Buat Minuman Custom</h2>
          <CustomizerPreview onAddToCart={addToCart} />
        </div>
        {showCart && <Cart items={cart} onRemove={removeFromCart} onClose={() => setShowCart(false)} />}
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);