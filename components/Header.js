function Header({ cartCount, onCartClick }) {
  try {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="icon-leaf text-xl text-white"></div>
              </div>
              <span className="text-2xl font-bold text-[var(--primary-color)]">VitaBlend</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Beranda</a>
              <a href="#menu" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Menu</a>
              <a href="#customize" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Customize</a>
              <a href="admin.html" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Admin</a>
              <a href="kitchen.html" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">Dapur</a>
            </nav>

            <button onClick={onCartClick} className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="icon-shopping-cart text-2xl text-[var(--text-primary)]"></div>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}