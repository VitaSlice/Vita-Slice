function Hero() {
  try {
    return (
      <section id="home" className="bg-gradient-to-br from-[var(--secondary-color)] to-white py-20" data-name="hero" data-file="components/Hero.js">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold mb-6 text-[var(--text-primary)]">
                Minuman Sehat <span className="text-[var(--primary-color)]">Custom</span> Sesuai Kebutuhan Anda
              </h1>
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                Buat minuman dengan nutrisi yang tepat. Lacak kalori, gula, dan vitamin secara real-time.
              </p>
              <div className="flex space-x-4">
                <a href="#customize" className="btn-primary">Mulai Customize</a>
                <a href="#menu" className="btn-secondary">Lihat Menu</a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center">
                  <div className="icon-glass-water text-[180px] text-[var(--primary-color)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}