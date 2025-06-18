import { Container } from './container';
import { Dog } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-white via-green-50 to-amber-50 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-green-300 opacity-20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-20 w-20 h-20 bg-yellow-300 opacity-10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-[40%] left-[30%] w-16 h-16 border-2 border-yellow-400 rounded-full animate-spin-slow opacity-10"></div>
      </div>

      <Container>
        <div className="py-24 space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-extrabold tracking-tight flex justify-center items-center gap-3 text-green-700">
              <Dog className="text-amber-600 text-4xl" />
              BestDogBreeds
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover the most loyal, loving, and playful dog breeds from around the world. Whether you're a first-time pet owner or a seasoned dog lover, we help you find the perfect furry companion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-green-100/60 p-8 rounded-3xl border border-green-300 shadow-xl transform -rotate-1 hover:rotate-0 transition duration-300">
              <h3 className="text-3xl font-bold mb-4 text-green-800">Why Dogs are Amazing</h3>
              <ul className="space-y-3 text-green-700 text-lg">
                <li>🐾 Loyal and protective companions</li>
                <li>🎾 Always ready for playtime and adventure</li>
                <li>❤️ Unconditional love and emotional support</li>
              </ul>
            </div>

            <div className="bg-amber-100/60 p-8 rounded-3xl border border-yellow-300 shadow-xl transform rotate-2 hover:rotate-0 transition duration-300">
              <h3 className="text-3xl font-bold mb-4 text-amber-700">Join the Pack</h3>
              <p className="text-gray-700 mb-6 text-lg">Subscribe for dog care tips, breed recommendations, and adorable stories.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 rounded-lg bg-white border border-yellow-400 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
                <button className="bg-gradient-to-r from-amber-500 to-yellow-400 px-6 py-3 rounded-lg font-semibold text-white hover:scale-105 hover:shadow-lg transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>  
        </div>
      </Container>
    </footer>
  );
}
