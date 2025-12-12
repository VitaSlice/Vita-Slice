function Hero() {
  try {
    return (
      <section id="home" className="bg-gradient-to-br from-[var(--secondary-color)] to-white py-20" data-name="hero" data-file="components/Hero.js">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            
            {/* --- BAGIAN KIRI: TEKS & TOMBOL --- */}
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

            {/* --- BAGIAN KANAN: GAMBAR LINGKARAN --- */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                
                {/* 1. Efek Cahaya Hijau (Glow) di belakang gambar */}
                <div className="absolute inset-0 bg-[var(--primary-color)] blur-2xl opacity-20 rounded-full"></div>
                
                {/* 2. Gambar Utama */}
                {/* PENTING: Ganti 'jus-sehat.jpg' dengan nama file gambar yang Anda upload di GitHub */}
                <img 
                  src="./jus-sehat.jpg" 
                  alt="Minuman Sehat VitaBlend" 
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-white shadow-2xl"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://github.com/VitaSlice/Vita-Slice/blob/main/banner.jpg.png?raw=true"; // Gambar cadangan jika file Anda tidak ketemu
                  }}
                />

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
