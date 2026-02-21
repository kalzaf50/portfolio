import React from 'react';
import './App.css';

const fadeInStyle = (delay: number): React.CSSProperties => ({
  opacity: 0,
  animation: `fadeIn 0.6s ease forwards`,
  animationDelay: `${delay}s`,
});

interface ProjectItemProps {
  title: string;
  link: string;
  organization: string;
  date: string;
  description: string;
  tags: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, organization, date, description, tags, link }) => (
  <div>
    <div className="flex justify-between items-start mb-1">
      <a href={link} className="name-row" style={{ fontFamily: 'InterBold' }}>{title}</a>
      <span className="date-row">{date}</span>
    </div>
    <p className="text-sm font-bold text-[#7f0000] mb-1">{organization}</p>
    <p className="text-sm mb-2">{description}</p>
    <div className="text-xs flex flex-wrap gap-2">
      {tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fffbf7] text-black" style={{ fontFamily: 'InterRegular' }}>
      <div className="max-w-4xl mx-auto px-8 py-12 md:py-16">

        {/* HEADER */}
        <header className="pb-3" style={fadeInStyle(0)}>
          <h1 className="text-3xl text-zinc-700 md:text-3xl" style={{ fontFamily: 'InterBold' }}>
            Haikal Zafri
          </h1>
        </header>

        {/* SUMMARY */}
        <section className="mb-5" style={fadeInStyle(0.15)}>
          <h2 className="text-s font-bold text-[#7f0000] mb-5" style={{ fontFamily: 'InterRegular' }}>
            Full Stack Developer
          </h2>
          <p className="text-sm leading-relaxed">
            Mara Scholar · Kyung Hee University, South Korea · Software Convergence.
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            My journey into tech didn't start in a lecture hall, but back in high school with a fascination
            of how software and games are built from the ground up.
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            When I'm not coding, you'll find me on the badminton court!
          </p>
        </section>

        {/* LINKS */}
        <div className="text-sm flex gap-5 mb-10 mt-1" style={fadeInStyle(0.22)}>
          <a href="https://github.com/kalzaf50" target="_blank" rel="noreferrer" className="social-link">
            GitHub ↗
          </a>
          <a href="https://linkedin.com/in/kalzaf" target="_blank" rel="noreferrer" className="social-link">
            LinkedIn ↗
          </a>
          <a href="mailto:kalzaf50@gmail.com" className="social-link">
            Email ↗
          </a>
        </div>

        {/* EXPERIENCE */}
        <section className="mb-10" style={fadeInStyle(0.3)}>
          <h2 className="section-heading" style={{ fontFamily: 'InterBold' }}>
            Experience
          </h2>

          <div className="entry-row">
            <img src="/ftm-logo.svg" alt="FTM TECH logo" className="org-logo" />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <a href="https://ftmtech.com.my/" className="name-row" style={{ fontFamily: 'InterBold' }}>FTM Tech</a>
                  <p className="text-xs mt-1">Crafting Digital Excellence Through Innovation</p>
                </div>
                <span className="date-row">Jun 2025 – Dec 2025</span>
              </div>
              <p className="text-sm text-zinc-700 mt-1" style={{ fontFamily: 'InterBold' }}>Software Engineer Intern</p>
            </div>
          </div>

          <div className="entry-row">
            <img src="/syunaz-logo.avif" alt="Syunaz logo" className="flex-shrink-0 w-11 h-11 rounded-md object-contain" />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <a href="https://syunaztravel.com/" className="name-row" style={{ fontFamily: 'InterBold' }}>Syunaz Travel & Tours</a>
                  <p className="text-xs text-zinc-500 mt-1">Affordable Muslim Global Travel Experience</p>
                </div>
                <span className="date-row">Jul 2023 – Jan 2026</span>
              </div>
              <p className="text-sm text-zinc-700 mt-1" style={{ fontFamily: 'InterBold' }}>Tour Guide (Part-time)</p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-10" style={fadeInStyle(0.45)}>
          <h2 className="section-heading" style={{ fontFamily: 'InterBold' }}>
            Education
          </h2>

          <div className="entry-row">
            <img src="/kyunghee-logo.avif" alt="kyunghee logo" className="flex-shrink-0 w-11 h-11 rounded-md object-contain" />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <a href="https://www.khu.ac.kr/eng/user/main/view.do" className="name-row" style={{ fontFamily: 'InterBold' }}>Kyung Hee University, South Korea</a>
                  <p className="text-xs text-zinc-500 mt-1">Bachelor's Degree in Software Convergence</p>
                </div>
                <span className="date-row">Mar 2022 – Feb 2026</span>
              </div>
            </div>
          </div>

          <div className="entry-row">
            <img src="/unikl-logo.avif" alt="unikl logo" className="flex-shrink-0 w-11 h-11 rounded-md object-contain" />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <a href="https://www.unikl.edu.my/institute/malaysian-institute-of-information-technology/" className="name-row" style={{ fontFamily: 'InterBold' }}>UniKL Malaysian Institute of Information Technology</a>
                  <p className="text-xs text-zinc-500 mt-1">Foundation in Science and Technology for Korean University</p>
                </div>
                <span className="date-row">Jul 2020 – Dec 2021</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-10" style={fadeInStyle(0.6)}>
          <h2 className="section-heading" style={{ fontFamily: 'InterBold' }}>
            Projects
          </h2>
          <div className="space-y-5">
            <ProjectItem
              title="Integrating Reality: Real-Time Hand Tracking for Interactive 3D Game Mechanics"
              link="https://github.com/kalzaf50/integrating-reality-game"
              organization="Kyung Hee University"
              date="Dec 2025"
              description="A camera-based hand-tracking system that enhances immersion in 3D games by allowing
              the player's real hand to interact with the virtual world as a dynamic platform or obstacle without
              any special hardware required."
              tags={['Python', 'OpenCV', 'MediaPipe', 'Godot Engine']}
            />
            <ProjectItem
              title="Interactive Digital Games for National Primary Schools"
              link="https://pdisk-alpha.onrender.com/"
              organization="FTM Tech"
              date="Dec 2025"
              description="An interactive 3D educational web platform for Malaysian national primary schools to learn
              about coding."
              tags={['Figma', 'Three.js', 'JavaScript', 'WebGL']}
            />
            <ProjectItem
              title="DegreeMate: AI-Powered Career Guidance Platform"
              organization="FTM Tech"
              link="https://degreemate-dev.vercel.app/"
              date="Sep 2025"
              description="A cloud-based career guidance platform that leverages real-time job market intelligence to
              support informed academic and career decisions."
              tags={['React', 'Node.js', 'Express.js', 'Postman', 'AWS', 'MongoDB', 'Perplexity API']}
            />
            <ProjectItem
              title="Informatics-Based Flood Management Project in Klang Valley"
              organization="Kyung Hee University"
              date="Jul 2025"
              description="A research project in Klang Valley on informatics-driven flood management framework aligned
              with UN SDG 11 (Sustainable Cities and Communities)."
              tags={['Data Analysis', 'Research', 'UN SDG 11']}
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>Kal's · {new Date().getFullYear()}</p>
        </footer>

      </div>
    </div>
  );
};

export default App;