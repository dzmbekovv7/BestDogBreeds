import { ContactForm } from '../components/shared/contact-form'

export function ContactsPage() {
  return (
    <>
      {/* Hero Section с анимированным текстом */}
   <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-28 overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    {/* Абстрактные легкие элементы для глубины */}
    <div className="absolute top-20 left-16 w-4 h-48 bg-gradient-to-b from-pink-600 to-transparent rounded-full opacity-20 animate-pulse"></div>
    <div className="absolute top-1/3 right-1/4 w-48 h-2 bg-gradient-to-r from-indigo-600 to-transparent rounded-full opacity-15 animate-pulse"></div>
    <div className="absolute bottom-32 left-1/5 w-6 h-56 bg-gradient-to-t from-purple-600 to-transparent rounded-full opacity-10 animate-pulse"></div>
    <div className="absolute top-1/2 right-1/2 w-60 h-60 border-2 border-pink-600 rounded-full opacity-5 animate-spin-slow"></div>
  </div>

  <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 cursor-default">
      WELCOME TO THE <span className="relative inline-block">
        <span className="bg-pink-600 rounded-md px-2 py-1">DOG BLOG</span>
        <span className="absolute left-0 bottom-0 w-full h-1 bg-pink-400 rounded-sm"></span>
      </span>
    </h1>
    <p className="max-w-xl mx-auto text-lg font-light opacity-90 leading-relaxed">
      Your go-to source for <span className="bg-indigo-700 rounded px-1 underline decoration-pink-400 decoration-2">dog care tips</span>, <span className="bg-indigo-700 rounded px-1 underline decoration-pink-400 decoration-2">training guides</span>, and heartwarming stories.
    </p>
    <p className="mt-4 max-w-lg mx-auto text-sm italic opacity-70 text-pink-400">
      “Dogs are not our whole life, but they make our lives whole.” — Roger Caras
    </p>

    <div className="mt-14 flex justify-center items-center space-x-8">
      <div className="w-28 h-1 bg-gradient-to-r from-pink-600 via-indigo-700 to-purple-700 rounded-full shadow-lg animate-pulse"></div>
      <div className="w-7 h-7 bg-pink-600 rounded-full animate-pulse shadow-lg"></div>
      <div className="w-28 h-1 bg-gradient-to-r from-purple-700 via-indigo-700 to-pink-600 rounded-full shadow-lg animate-pulse"></div>
    </div>
  </div>
</section>

<section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 py-24 px-8 sm:px-16 lg:px-28 text-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

    {/* Left - Form container */}
    <div className="bg-gray-900 rounded-3xl shadow-2xl p-12 relative overflow-hidden animate-fade-slide-left">
      <div className="absolute -top-16 -right-16 w-52 h-52 bg-pink-700 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-14 left-12 w-36 h-36 bg-indigo-800 opacity-15 rounded-full blur-xl animate-pulse"></div>
      <ContactForm />
    </div>

    {/* Right - Text content */}
    <div className="pl-6 sm:pl-12 animate-fade-slide-right">
      <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
        Discover Your <span className="bg-pink-600 rounded px-2 underline decoration-pink-400 decoration-2">Best Friend’s World</span>
      </h2>
      <p className="text-gray-300 mb-6 leading-relaxed text-lg">
        Explore expert <span className="bg-indigo-700 px-1 rounded underline decoration-pink-400 decoration-2">training advice</span>, health <span className="bg-indigo-700 px-1 rounded underline decoration-pink-400 decoration-2">tips</span>, and inspiring dog stories to make every moment with your pet unforgettable.
      </p>
      <p className="italic text-gray-400 max-w-md mb-12">
        “A dog is the only thing on earth that loves you more than he loves himself.” — Josh Billings
      </p>

      <div className="flex space-x-8">
        <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-indigo-800 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"></div>
        <div className="w-14 h-14 bg-gradient-to-br from-indigo-700 to-pink-700 rounded-full shadow-md animate-pulse"></div>
        <div className="w-24 h-10 bg-gradient-to-r from-purple-700 to-indigo-900 rounded-xl shadow-lg animate-pulse"></div>
      </div>
    </div>
  </div>
</section>

<section className="bg-gray-900 py-16 text-center text-white">
  <h3 className="text-3xl font-extrabold mb-6 tracking-wide">
    JOIN OUR <span className="text-pink-600">DOG COMMUNITY</span>
  </h3>
  <p className="max-w-lg mx-auto mb-10 opacity-80 text-lg">
    Subscribe to get <span className="bg-pink-700 rounded px-1 underline decoration-pink-400 decoration-2">exclusive tips</span>, updates, and stories delivered straight to your inbox.
  </p>
  <div className="flex justify-center space-x-12 animate-pulse delay-500">
    <div className="w-28 h-1 bg-gradient-to-r from-pink-600 via-indigo-700 to-purple-700 rounded-full shadow-lg"></div>
    <div className="w-4 h-4 bg-pink-600 rounded-full animate-pulse shadow-lg"></div>
    <div className="w-28 h-1 bg-gradient-to-r from-purple-700 via-indigo-700 to-pink-600 rounded-full shadow-lg"></div>
  </div>
</section>

      {/* Кастомные анимации */}
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeSlideLeft {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeSlideRight {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 1s ease forwards;
        }
        .animate-fade-slide-left {
          animation: fadeSlideLeft 1s ease forwards;
        }
        .animate-fade-slide-right {
          animation: fadeSlideRight 1s ease forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease forwards;
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 4s ease infinite;
        }
      `}</style>
    </>
  )
}
