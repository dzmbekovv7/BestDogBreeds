import { Container } from '../components/shared/container';

export const PrivacyPolicyPage = () => {
	return (
		<div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700  text-white overflow-hidden">
			{/* Background Design Elements */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<div className="absolute top-24 left-1/4 w-2 h-48 bg-gradient-to-b from-pink-500 to-transparent transform rotate-12 opacity-30 animate-pulse" />
				<div className="absolute top-1/3 right-1/4 w-32 h-2 bg-gradient-to-r from-indigo-400 to-transparent transform -rotate-45 opacity-40" />
				<div className="absolute bottom-1/4 left-1/3 w-1 h-64 bg-gradient-to-t from-blue-500 to-transparent transform rotate-45 opacity-35" />
				<div className="absolute top-1/2 right-1/6 w-24 h-24 border-2 border-fuchsia-300 transform rotate-45 opacity-20 animate-spin-slow" />
			</div>
<Container className="relative z-10 py-20 lg:py-28 rounded-3xl ">
  {/* Header */}
  <div className="flex flex-col lg:flex-row justify-between items-start gap-12 px-6 lg:px-12">
    {/* Title and description */}
    <div>
      <h1 className="text-6xl font-extrabold tracking-tight text-white select-text leading-tight">
        <span className="text-white drop-shadow-lg">Best</span>{' '}
        <span className="text-yellow-400 drop-shadow-xl">Dogs</span>{' '}
        <span className="text-white drop-shadow-lg">Breeds</span>
      </h1>
      <p className="mt-4 max-w-md text-gray-300 text-lg leading-relaxed italic">
        Privacy Policy
      </p>
    </div>

    {/* Privacy Policy Section */}
    <div className="text-right max-w-sm">
      <h2 className="text-3xl font-bold text-yellow-400 drop-shadow-md">Privacy Policy</h2>
      <p className="mt-2 text-sm text-gray-400 max-w-xs leading-relaxed">
        We care about your data. Read how we handle and protect your information.
      </p>
    </div>
  </div>

  {/* Decorative line */}
  <div className="mt-12 flex justify-center items-center space-x-4">
    <div className="w-20 h-1 rounded-full bg-yellow-400 opacity-70 animate-pulse"></div>
    <div className="w-5 h-5 bg-yellow-400 rounded-full animate-ping opacity-80"></div>
    <div className="w-20 h-1 rounded-full bg-yellow-400 opacity-70 animate-pulse"></div>
  </div>

  {/* Page Content */}
  <div className="mt-20 max-w-4xl mx-auto space-y-12 px-4">
    {[{
      title: "1. What Data We Collect",
      text: "We only collect essential data such as browser type and visit duration. No sensitive personal data is stored without your permission.",
      border: "border-l-4 border-yellow-400",
      bg: "bg-gray-800/50",
      round: "rounded-tr-3xl rounded-bl-xl",
      shadow: "shadow-lg",
      leftIcon: true,
    },{
      title: "2. How We Use Your Data",
      text: "Data helps us improve your experience, like recommending music-related articles based on what you enjoy reading most.",
      border: "border-r-4 border-yellow-500",
      bg: "bg-gray-700/60",
      round: "rounded-tl-xl rounded-br-3xl",
      shadow: "shadow-lg",
      leftIcon: false,
    },{
      title: "3. Your Rights",
      text: "You can request to view, change, or delete your data at any time. Just contact our support team.",
      border: "border-l-4 border-yellow-300",
      bg: "bg-gray-800/40",
      round: "rounded-tl-3xl rounded-br-xl",
      shadow: "shadow-md",
      leftIcon: true,
    },{
      title: "4. Updates to This Policy",
      text: "Our Privacy Policy may change over time. We recommend checking back once a month to stay informed.",
      border: "border-r-4 border-yellow-400",
      bg: "bg-gray-700/50",
      round: "rounded-tr-xl rounded-bl-3xl",
      shadow: "shadow-xl",
      leftIcon: false,
    }].map(({title, text, border, bg, round, shadow, leftIcon}, idx) => (
      <div
        key={idx}
        className={`relative ${border} px-6 py-6 ${bg} ${round} ${shadow} hover:scale-[1.02] transition-transform duration-300`}
      >
        <h4 className={`text-2xl font-bold text-yellow-400 mb-2 ${leftIcon ? '' : 'text-right'}`}>
          {title}
        </h4>
        <p className={`text-gray-300 leading-relaxed ${leftIcon ? '' : 'text-right'}`}>
          {text}
        </p>

        {/* Decorative corner */}
        <div
          className={`absolute w-6 h-6 bg-yellow-400 rotate-45 opacity-50 
            ${leftIcon ? '-top-3 -left-3' : '-bottom-3 -right-3'}`}
        />
      </div>
    ))}
  </div>

  {/* Contact Section */}
  <div className="mt-20 text-center px-6 lg:px-0">
    <h3 className="text-3xl font-bold text-yellow-400 drop-shadow-lg">
      Have questions about privacy?
    </h3>
    <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto italic">
      Feel free to reach out to our support team. We're here to make your journey safe and inspiring.
    </p>
    <a
      href="/contacts"
      className="inline-block mt-6 px-8 py-3 bg-yellow-400 rounded-full text-gray-900 font-bold shadow-lg hover:scale-105 transform transition-all duration-300"
    >
      Contact Us
    </a>
  </div>

  {/* Footer Texts */}
  <div className="mt-20 flex justify-between items-end text-sm text-gray-400 px-6 lg:px-0">
    <p className="max-w-xs select-text">
      © 2025 BestDogsBreeds — Your trusted companion.
    </p>
    <p>Last updated: June 2025</p>
  </div>
</Container>

				<style>{`
				/* Clip-path utilities for geometric shapes */
				.clip-path-slant-left {
					clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
				}

				.clip-path-slant-right {
					clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
				}

				.clip-path-corner-cut {
					clip-path: polygon(0 0, 100% 0, 100% 85%, 15% 100%, 0 15%);
				}

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

				/* Mobile responsiveness */
				@media (max-width: 768px) {
					.clip-path-slant-left,
					.clip-path-slant-right,
					.clip-path-corner-cut {
						clip-path: none;
						border-radius: 0.5rem;
					}
				}
			`}</style>
		</div>
	);
};
