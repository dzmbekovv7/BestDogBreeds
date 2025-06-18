export function AboutSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-gray-900 to-gray-900 overflow-hidden py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-1/4 w-44 h-44 bg-yellow-600 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-pink-600 rounded-full blur-2xl opacity-20"></div>
        <div className="absolute top-40 right-1/4 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-25"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Dogs Are More Than Pets —
            <span className="block text-yellow-700">They’re Family.</span>
          </h2>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto font-medium">
            Celebrate the boundless loyalty, joy, and unconditional love that dogs bring into our lives. Every wag, bark, and cuddle tells a story of{' '}
            <span className="text-yellow-700 font-semibold">friendship</span> and <span className="text-yellow-700 font-semibold">trust</span>.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <div className="md:w-1/3 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer border-4 border-yellow-700">
            <img
              src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80"
              alt="Happy dog playing outside"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/3 text-left text-white">
            <h3 className="text-3xl font-bold mb-6 text-yellow-700">
              The Heartbeat of Our Homes
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Dogs teach us the true meaning of <span className="font-semibold text-yellow-700">loyalty</span> and <span className="font-semibold text-yellow-700">joy</span>. They are our protectors, our playmates, and our most trusted friends.
            </p>
            <p>
              Whether it’s a gentle nuzzle or an enthusiastic tail wag, every moment with a dog reminds us that <span className="font-semibold text-yellow-700">love is unconditional</span>.
            </p>
          </div>

          <div className="md:w-1/3 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer border-4 border-yellow-700">
            <img
              src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=600&q=80"
              alt="Dog resting calmly"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-24 bg-gradient-to-r from-yellow-700 via-pink-600 to-pink-700 text-white px-12 py-16 rounded-3xl shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-4xl font-extrabold mb-6 leading-tight">
            🐾 Discover the World of Dogs
          </h3>
          <p className="text-xl max-w-3xl mx-auto font-light">
            From caring tips to heartwarming stories, join us as we explore the incredible bond between humans and their furry companions.
          </p>

          <a
            href="/breeds"
            className="inline-block mt-10 px-12 py-4 bg-white text-yellow-700 font-bold text-lg rounded-full hover:bg-yellow-100 transition"
          >
            Explore Dog Breeds
          </a>
        </div>
      </div>
    </section>
  );
}
