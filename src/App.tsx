import React from 'react';

const App: React.FC = () => {
  const sharedPadding = "px-6 md:px-12";
  const maxWidth = "max-w-7xl mx-auto";

  return (
    <div className="relative min-h-screen text-white selection:bg-white selection:text-black font-sans">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
        <div className={`${maxWidth} ${sharedPadding} h-16 md:h-20 flex justify-between items-center`}>

          <div className="text-black font-bold text-[30px] tracking-[0.1em]" style={{ fontFamily: 'Arial, sans-serif' }}>
            Haikal Zafri
          </div>

          <nav className="flex items-center gap-10 text-[15px] tracking-[0.1em]" style={{ fontFamily: 'Arial, sans-serif' }}>
            <a href="#projects" className="text-black hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-black hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* 2. BODY */}
      <main className={`relative ${maxWidth} ${sharedPadding} pt-30`}>
        <div className="max-w-2xl space-y-10" style={{ fontFamily: 'Arial, sans-serif' }}>

          {/* Tagline */}
          <div className="flex items-center gap-4">
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.4em]">
              Software Developer
            </p>
          </div>

          {/* About Text */}
          <div className="space-y-5">
            <p className="text-base leading-relaxed max-w-lg">
              I develop software that work (well). This website is one of the example-
            </p>
          </div>

        </div>
      </main>

    </div>
  );
};

export default App;