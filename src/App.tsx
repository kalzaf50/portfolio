import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F8FF] text-black" style={{ fontFamily: 'InterRegular' }}>
      <div className="max-w-4xl mx-auto px-8 py-12 md:py-16">

        {/* HEADER */}
        <header className="pb-6">
          <h1 className="text-5xl md:text-5xl mb-3" style={{ fontFamily: 'InterBold' }}>
            Haikal Zafri
          </h1>
        </header>

        {/* SUMMARY */}
        <section className="mb-5">
          <h2 className="text-s mb-5" style={{ fontFamily: 'InterRegular' }}>
            Software Engineering Graduate
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            Malaysian student graduated from Kyung Hee University in Software Convergence.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-10">
          <h2 className="text-2xl mb-5 border-b border-zinc-300 pb-2" style={{ fontFamily: 'InterBold' }}>
            Experience
          </h2>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg" style={{ fontFamily: 'InterBold' }}>Software Engineering Intern</h3>
                <p className="text-sm text-zinc-600">FTM TECH</p>
              </div>
              <span className="text-sm text-zinc-500">Jun 2025 - Dec 2025</span>
            </div>
            <p className="text-sm text-zinc-600">FTM TECH</p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-10">
          <h2 className="text-2xl mb-5 border-b border-zinc-300 pb-2" style={{ fontFamily: 'InterBold' }}>
            Projects
          </h2>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base" style={{ fontFamily: 'InterBold' }}>Integrating Reality: Real-Time Hand Tracking for Interactive 3D Game Mechanics</h3>
                <span className="text-sm text-zinc-500 whitespace-nowrap ml-4">Dec 2025</span>
              </div>
              <p className="text-sm text-zinc-600 mb-1">Kyunghee University</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-800 leading-relaxed">
                <li>Improved a real-time hand-tracking interaction system, enabling natural 3D game interaction with a standard webcam.</li>
                <li>Integrated MediaPipe, OpenCV, Python, and Godot Engine to support responsive, hand-driven game mechanics.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base" style={{ fontFamily: 'InterBold' }}>Permainan Digital Interaktif Sekolah Kebangsaan</h3>
                <span className="text-sm text-zinc-500 whitespace-nowrap ml-4">Dec 2025</span>
              </div>
              <p className="text-sm text-zinc-600 mb-1">FTM TECH</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-800 leading-relaxed">
                <li>Built and enhanced interactive 3D educational web experiences using Three.js to develop features and enhance user engagement.</li>
                <li>Proposed and implemented technical solutions that improved development efficiency and accelerated problem resolution.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base" style={{ fontFamily: 'InterBold' }}>DegreeMate: AI-Powered Career Guidance Platform</h3>
                <span className="text-sm text-zinc-500 whitespace-nowrap ml-4">Sep 2025</span>
              </div>
              <p className="text-sm text-zinc-600 mb-1">FTM TECH</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-800 leading-relaxed">
                <li>Developed cloud-hosted application components with AWS services, and managed MongoDB databases in a cloud environment.</li>
                <li>Integrated an external API (Sonar by Perplexity) to gather and analyze real-time job-market data, providing insights into industry trends.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base" style={{ fontFamily: 'InterBold' }}>Informatics-Based Flood Management Project in Klang Valley</h3>
                <span className="text-sm text-zinc-500 whitespace-nowrap ml-4">July 2025</span>
              </div>
              <p className="text-sm text-zinc-600 mb-1">Kyunghee University</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-800 leading-relaxed">
                <li>Led a multicultural research team in Klang Valley, delivering an informatics-driven flood management study aligned with UN SDG 11.</li>
                <li>Coordinated with local government and technical agencies to collect, analyze, and validate flood-related data and operational workflows.</li>
                <li>Produced clear visual and written deliverables to communicate technical findings to stakeholders.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-10">
          <h2 className="text-2xl mb-5 border-b border-zinc-300 pb-2" style={{ fontFamily: 'InterBold' }}>
            Education
          </h2>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base" style={{ fontFamily: 'InterBold' }}>Bachelor's Degree in Software Convergence</h3>
                  <p className="text-sm text-zinc-600">Kyunghee University, Global Campus</p>
                </div>
                <span className="text-sm text-zinc-500 whitespace-nowrap ml-4">Mar 2022 - Feb 2026</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base" style={{ fontFamily: 'InterBold' }}>Foundation in Science and Technology for Korean University</h3>
                  <p className="text-sm text-zinc-600">UniKL Malaysian Institute of Information Technology</p>
                </div>
                <span className="text-sm text-zinc-500 whitespace-nowrap ml-4">Jul 2020 - Dec 2021</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS & ADDITIONALS */}
        <section className="mb-10">
          <h2 className="text-2xl mb-5 border-b border-zinc-300 pb-2" style={{ fontFamily: 'InterBold' }}>
            SKILLS & ADDITIONALS
          </h2>

          <div className="space-y-3 text-sm">
            <div>
              <span className="font-bold">Programming Languages: </span>
              <span className="text-zinc-800">Python, C++, HTML, JavaScript, Lua, SQL</span>
            </div>
            <div>
              <span className="font-bold">Frameworks & Libraries: </span>
              <span className="text-zinc-800">React, Node.js, Three.js, OpenCV, MediaPipe</span>
            </div>
            <div>
              <span className="font-bold">Tools & Platforms: </span>
              <span className="text-zinc-800">AWS, MongoDB, Git, Postman, Figma, Notion</span>
            </div>
            <div>
              <span className="font-bold">Languages: </span>
              <span className="text-zinc-800">Malay, English, Korean</span>
            </div>
            <div>
              <span className="font-bold">Certifications: </span>
              <span className="text-zinc-800">Oracle Cloud Infrastructure 2025 Foundations Associate, Cisco (Introduction to Cybersecurity)</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default App;