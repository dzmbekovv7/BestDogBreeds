import { Container } from '../components/shared/container'

export function AboutPage() {
	return (
		<div className='min-h-screen bg-white'>
			<div className='fixed inset-0 pointer-events-none overflow-hidden'>
				<div className='absolute top-20 left-1/4 w-2 h-40 bg-gradient-to-b from-violet-500 to-transparent transform rotate-12 opacity-30 animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-emerald-500 to-transparent transform -rotate-45 opacity-40'></div>
				<div className='absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-pink-500 to-transparent transform rotate-45 opacity-35'></div>
				<div className='absolute top-1/2 right-1/6 w-24 h-24 border-2 border-cyan-300 transform rotate-45 opacity-20 animate-spin-slow'></div>
			</div>
<Container className="relative py-12 lg:py-20">
  <section className="relative mb-24 lg:mb-40 overflow-hidden rounded-3xl shadow-2xl">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center filter brightness-75"></div>
    <div className="relative z-10 px-6 lg:px-20 py-20 text-center lg:text-left">
      <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fadeInDown">
        Welcome to <span className="text-yellow-300">DogLife</span>
      </h1>
      <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 animate-fadeInDown delay-200">
        Your ultimate hub for dog care, training tips, breed guides, and heartwarming stories.
      </p>
      <button className="mt-8 px-8 py-3 bg-yellow-300 hover:bg-yellow-400 text-gray-900 rounded-full font-semibold shadow-lg transition transform hover:scale-105 animate-fadeInDown delay-400">
        Explore Now
      </button>
    </div>
  </section>

  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-20">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-12">
        Pup Stories That <span className="text-yellow-500">Inspire</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: "Rescue & Redemption",
            img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
            desc: "How Max found his forever home and overcame adversity."
          },
          {
            title: "Training Triumphs",
            img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
            desc: "Step-by-step guide to mastering basic obedience with any pup."
          },
          {
            title: "Health & Wellness",
            img: "https://d2zp5xs5cp8zlg.cloudfront.net/image-92987-800.jpg",
            desc: "Vet-approved tips to keep your dog happy and healthy."
          }
        ].map((s, i) => (
          <div key={i} className="group overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
            <img src={s.img} alt={s.title} className="w-full h-48 object-cover group-hover:scale-105 transition"/>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="py-20">
    <div className="max-w-6xl mx-auto px-6 lg:px-20 text-center mb-12">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
        Why Dogs Make Life <span className="text-yellow-500">Better</span>
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        From wagging tails to loyal companionship, dogs bring joy, health, and purpose into our lives.
      </p>
    </div>
    <div className="max-w-6xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { icon: "💪", title: "Active Lifestyle", desc: "Daily walks and playtime keep both you and your pup fit." },
        { icon: "❤️", title: "Unconditional Love", desc: "Their loyalty and affection never fail to lift your spirits." },
        { icon: "🧠", title: "Mental Health", desc: "Studies show dogs reduce stress, anxiety, and loneliness." }
      ].map((f, i) => (
        <div key={i} className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-xl transition">
          <div className="text-4xl mb-4">{f.icon}</div>
          <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>

  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/3 text-center lg:text-left">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Meet the <span className="text-yellow-500">Experts</span>
        </h2>
        <p className="text-gray-700 text-lg">
          A passionate team of professionals — trainers, vets & volunteer dog lovers — all here to share knowledge.
        </p>
      </div>
      <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[
          { name: "Emma Johnson", role: "Certified Trainer", img: "https://randomuser.me/api/portraits/women/68.jpg" },
          { name: "James Smith", role: "Veterinarian", img: "https://randomuser.me/api/portraits/men/45.jpg" },
          { name: "Olivia Brown", role: "Dog Behaviorist", img: "https://randomuser.me/api/portraits/women/52.jpg" },
          { name: "Liam Davis", role: "Pet Photographer", img: "https://randomuser.me/api/portraits/men/33.jpg" }
        ].map((e, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-xl transition">
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-yellow-300 shadow-lg mb-4">
              <img src={e.img} alt={e.name} className="w-full h-full object-cover"/>
            </div>
            <h5 className="text-2xl font-semibold">{e.name}</h5>
            <p className="text-yellow-500 font-medium mb-2">{e.role}</p>
            <p className="text-gray-600">Bringing expert care and insights for your furry friend.</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="py-16 text-center">
    <div className="max-w-3xl mx-auto px-6 lg:px-20 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-3xl shadow-xl py-12">
      <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
        Ready to make your dog’s life extraordinary?
      </h3>
      <button className="mt-4 px-10 py-4 bg-white hover:bg-gray-100 text-yellow-600 font-semibold rounded-full shadow-lg transition transform hover:scale-105">
        Join Our Pack
      </button>
    </div>
  </section>

  <style>{`
    @keyframes fadeInDown {0% { opacity: 0; transform: translateY(-30px) } 100% { opacity: 1; transform: translateY(0) }}
    .animate-fadeInDown { animation: fadeInDown 0.8s ease forwards }
    .animate-fadeInDown.delay-200 { animation-delay: 0.2s }
    .animate-fadeInDown.delay-400 { animation-delay: 0.4s }
  `}</style>
</Container>

		</div>
	)
}

if (typeof document !== 'undefined' && !document.getElementById('about-page-styles')) {
	const style = document.createElement('style')
	style.id = 'about-page-styles'
	style.textContent = `
		/* Custom animation for slow spin */
		@keyframes spin-slow {
			from { 
				transform: rotate(0deg); 
			}
			to { 
				transform: rotate(360deg); 
			}
		}

		.animate-spin-slow {
			animation: spin-slow 20s linear infinite;
		}

		/* Responsive adjustments for clip-path */
		@media (max-width: 768px) {
			[style*="clip-path"] {
				clip-path: none !important;
			}
		}

		/* Ensure proper spacing on mobile */
		@media (max-width: 640px) {
			.transform.skew-x-12,
			.transform.-skew-x-12 {
				transform: none !important;
			}
		}
	`
	document.head.appendChild(style)
}