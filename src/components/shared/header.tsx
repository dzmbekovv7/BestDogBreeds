import { useLocation, Link } from 'react-router';
import { Container } from './container';
import { useMemo, useState } from 'react';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contacts' },
  { label: 'Privacy', href: '/privacy-policy' },
];

export function Header() {
  const location = useLocation();
  const isSpecialBg = useMemo(() => location.pathname === '/' || location.pathname === '/blog' || location.pathname === '/privacy-policy', [location.pathname]);

  const [menuOpen, setMenuOpen] = useState(false);

const headerBg = isSpecialBg
  ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700' // тёмный градиент, не чёрный, а приятный
  : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700'; // светлый с лёгким серым оттенком

const textColor = isSpecialBg ? 'text-gray-200' : 'text-gray-200'; // светлый текст на темном, темный на светлом
const linkHoverColor = isSpecialBg ? 'hover:text-yellow-700' : 'hover:text-yellow-700';


  return (
    <header className={`relative overflow-hidden transition-colors duration-500 ${headerBg}`}>
      {/* Animated circles + lines */}
<div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
  {/* 🔵 Левый крайний пульсирующий круг */}
  <div className="absolute top-10 left-[-60px] w-48 h-48 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

  {/* 🔴 Правый крайний пульсирующий круг */}
  <div className="absolute top-10 right-[-60px] w-48 h-48 bg-pink-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

  {/* 🟣 Левая вертикальная линия из 3-х кругов */}
  <div className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-center gap-6 pl-2">
    <div className="w-36 h-36 bg-purple-300 rounded-full opacity-10 blur-2xl"></div>
    <div className="w-24 h-24 bg-purple-300 rounded-full opacity-10 blur-xl"></div>
    <div className="w-14 h-14 bg-purple-300 rounded-full opacity-10 blur"></div>
  </div>

  {/* 🟠 Правая вертикальная линия из 3-х кругов */}
  <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col items-center gap-6 pr-2">
    <div className="w-36 h-36 bg-pink-300 rounded-full opacity-10 blur-2xl"></div>
    <div className="w-24 h-24 bg-pink-300 rounded-full opacity-10 blur-xl"></div>
    <div className="w-14 h-14 bg-pink-300 rounded-full opacity-10 blur"></div>
  </div>
</div>


      <Container>
        <div className="relative z-10 py-6 lg:py-10 text-center">
        <div className="flex justify-center items-center gap-6 p-4 relative">
  {/* Фон вокруг лого и текста — компактный с плавным градиентом */}
  <div className="absolute inset-0 max-w-[500px] mx-auto rounded-xl bg-black opacity-20 blur-3xl pointer-events-none -z-10"></div>

  {/* Лого с мягкой анимацией масштабирования */}
  <div className="px-5 py-3 bg-white rounded-full shadow-lg cursor-pointer 
                  animate-[pulse_6s_ease-in-out_infinite] hover:animate-none transition-transform duration-700">
    <img 
      src="https://cdn-icons-png.freepik.com/256/5100/5100114.png?semt=ais_hybrid" 
      alt="Logo"
      className="w-14 h-14 transform hover:scale-110 transition-transform duration-500"
    />
  </div>

  {/* Текст с тенью и плавным появлением */}
  <div className="flex flex-col text-center select-text">
    <div className="text-4xl font-extrabold tracking-tight leading-none drop-shadow-md">
      <span className="text-white">Best</span>
      <span className="text-yellow-700 mx-2 drop-shadow-lg">Dog</span>
      <span className="text-white">Breeds</span>
    </div>
    <span className="mt-1 text-sm text-gray-300 opacity-80 italic animate-fadeIn">
      Discover your perfect furry friend
    </span>
  </div>
</div>


          {/* Right links (3 last) */}
  <nav className="hidden md:flex justify-center gap-6 mt-8">
            {LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative px-6 py-4 rounded-full text-xl font-semibold ${textColor} ${linkHoverColor} bg-gradient-to-r  hover:scale-105 transition-all`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className={`md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8 z-50 focus:outline-none ${
              menuOpen ? 'text-pink-400' : textColor
            }`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block w-6 h-0.5 rounded bg-current transform transition duration-300 ${
                menuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 rounded bg-current transition duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 rounded bg-current transform transition duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>
      </Container>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 z-40 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <Container>
          <nav className="flex flex-col items-center justify-center min-h-screen gap-8">
            {LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-2xl font-semibold text-white hover:text-pink-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 30s linear infinite;
        }
      `}</style>
    </header>
  );
}
