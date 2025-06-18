import { Container } from '@/components/shared/container'
import { useState } from 'react'

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-gray-900 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-20 w-3 h-56 bg-gradient-to-b from-yellow-300 to-transparent opacity-40 rounded-full animate-pulse rotate-12"></div>
        <div className="absolute top-1/4 right-24 w-36 h-3 bg-gradient-to-r from-red-400 to-transparent opacity-30 -rotate-45 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-72 bg-gradient-to-t from-pink-400 to-transparent opacity-50 rounded-full rotate-45"></div>
        <div className="absolute top-1/2 right-1/5 w-48 h-48 border-4 border-yellow-300 rounded-full opacity-20 animate-spin-slow"></div>
      </div>
      <Container className="relative z-10 min-h-screen flex items-center py-20 lg:py-32 px-6">
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

          {/* Левая часть: заголовок + новый текстовый блок */}
          <div className="lg:w-3/5 select-none">
            <h1 className="text-white font-extrabold text-7xl leading-[1.1] tracking-tight mb-12">
              DISCOVER THE{' '}
              <span className="text-yellow-400">WORLD'S BEST DOG BREEDS</span>
            </h1>

            <div className="bg-gray-900 bg-opacity-60 rounded-3xl p-10 text-yellow-100 text-lg font-semibold leading-relaxed max-w-xl">
              <p>
                Dogs are <span className="relative underline decoration-yellow-400 decoration-4 underline-offset-4 bg-yellow-700/30 rounded px-1">faithful companions</span> that bring
                joy and unconditional love to our lives. Their{' '}
                <span className="relative underline decoration-pink-400 decoration-4 underline-offset-4 bg-pink-700/30 rounded px-1">playfulness</span> and{' '}
                <span className="relative underline decoration-red-400 decoration-4 underline-offset-4 bg-red-700/30 rounded px-1">boundless energy</span> inspire us to embrace
                every moment with happiness and warmth.
              </p>
              <p className="mt-6">
                Whether it's a calm evening cuddle or an active outdoor adventure,
                <span className="relative underline decoration-yellow-400 decoration-4 underline-offset-4 bg-yellow-700/30 rounded px-1"> dogs enrich</span> our days and teach us
                <span className="relative underline decoration-pink-400 decoration-4 underline-offset-4 bg-pink-700/30 rounded px-1"> loyalty</span> and <span className="relative underline decoration-red-400 decoration-4 underline-offset-4 bg-red-700/30 rounded px-1">friendship</span>.
              </p>
            </div>
          </div>

          {/* Правая часть: даты с новым дизайном */}
          <div className="lg:w-2/5 flex flex-col gap-12 select-none">

   <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-8 rounded-3xl shadow-xl text-yellow-100 text-lg font-semibold leading-relaxed select-text">
  <p>
    Dogs are <span className="bg-yellow-400/30 underline decoration-yellow-400 decoration-4 rounded">loyal friends</span> and
    <span className="bg-pink-500/30 underline decoration-pink-500 decoration-4 rounded mx-1">brilliant companions</span> that
    bring <span className="bg-red-500/30 underline decoration-red-500 decoration-4 rounded">joy</span> and
    <span className="bg-yellow-400/30 underline decoration-yellow-400 decoration-4 rounded mx-1">comfort</span> to our lives.
  </p>
  <p className="mt-4">
    Their <span className="bg-pink-500/30 underline decoration-pink-500 decoration-4 rounded">playful spirit</span> and
    unwavering <span className="bg-red-500/30 underline decoration-red-500 decoration-4 rounded mx-1">devotion</span> make every moment special.
  </p>
  <p className="mt-4">
    Discover the <span className="bg-yellow-400/30 underline decoration-yellow-400 decoration-4 rounded">beauty</span> of each breed and find your perfect furry friend.
  </p>
</div>

            <div className="flex gap-8 flex-wrap justify-center mt-6">
              <a
                href="/breeds"
                className="relative inline-block px-14 py-4 bg-gradient-to-r from-yellow-500 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-300 hover:brightness-110"
                style={{ boxShadow: "0 8px 20px rgba(255, 184, 0, 0.7)" }}
              >
                EXPLORE BREEDS
                <span className="absolute -bottom-2 -right-3 w-4 h-4 bg-white rounded-full animate-ping"></span>
              </a>

              <a
                href="/about"
                className="relative inline-block px-14 py-4 border-2 border-white/80 text-white font-semibold text-lg rounded-2xl shadow-md transform rotate-3 hover:-rotate-1 hover:scale-110 transition-all duration-300 hover:bg-white hover:text-pink-700"
              >
                ABOUT US
                <span className="absolute -top-2 -left-3 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></span>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
