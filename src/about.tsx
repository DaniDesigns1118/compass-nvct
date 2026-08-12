// types.ts

// App.tsx
import React from 'react';
import ContactForm from './components/ContactForm';
import logo from './assets/compassnvstlogo-white.svg';
import profile from "./assets/photos/instructor.jpeg";

const Header: React.FC = () => (
  <div className="bg-blue-900 text-white p-8 text-center">
      <img
          src={logo}
          alt="CompassNVST Logo"
          className="max-h-40 mx-auto mb-4"
      />
      <p className="text-xl">Transforming Conflicts into Opportunities for Understanding and Growth</p>

      <nav>
          <ul className="flex flex-row justify-center space-x-6 mt-3">
              <li>
                  <a href="/" className="text-white text-2xl hover:text-gray-300 cursor-pointer">
                      Home
                  </a>
              </li>
              <li>
                  <a href="/about" className="text-white text-2xl hover:text-gray-300 cursor-pointer">
                      About
                  </a>
              </li>
              <li>
                  <a href="/#contact-section"
                     className="text-white text-2xl hover:text-gray-300 cursor-pointer"
                     onClick={(e) => {
                         e.preventDefault();
                         document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth'});
                     }}
                  >
                      Contact Us
                  </a>
              </li>
          </ul>
      </nav>
  </div>
);

const AboutMe: React.FC = () => (
    <section className="mb-12 p-8 bg-white rounded-lg shadow">
        <div>
            <img
                src={profile}
                alt="profile picture"
                className="h-auto max-w-78 mt-3 mb-7 mx-auto md:max-w-lg lg:max-w-xl "
            />
        </div>
            <p className="text-xl mb-3">
                Samuel King is a certified Battering Intervention and Prevention Program (BIPP) facilitator, specializing in working with domestic violence clients. He retired from the State of Texas – Texas Department of Criminal Justice and Board of Pardons and Parole after 29 years of service. His roles included Senior Hearing Analyst, Training Officer, Unit Supervisor, and 15 years in a specialized unit working with sex offenders.
            </p>

            <p className="text-xl mb-3">
                As a certified Nonviolent Verbal De-escalation instructor, Samuel has a strong foundation in criminal justice and conflict resolution. He specializes in equipping individuals and teams with verbal de-escalation techniques to effectively manage and prevent aggressive behavior, particularly in substance use disorder (SUD) residential and outpatient settings.
            </p>

            <p className="text-xl mb-3">
                Samuel holds a Master’s Degree in Criminal Justice Administration from Central Texas University (now Texas A&M University-Central Texas, Killeen, TX), a Bachelor’s Degree in Criminal Justice Police Science from Sam Houston State University, and an Associate of Arts degree from New Mexico Military Institute, Roswell, NM.
            </p>

            <p className="text-xl">
                With his extensive expertise and years of experience, Samuel is committed to fostering safe and respectful environments through practical, actionable communication strategies.
            </p>
        <div>

        </div>
    </section>
);

const ContactSection: React.FC = () => (
    <div className="bg-blue-900 text-white p-12 mt-8 text-center" id="contact-section">
        <h2 className="text-2xl mb-4">Get in Touch</h2>
        <p className="mb-4">Let's work together to create a peaceful and supportive environment for all.</p>
        <p className="mb-2">Samuel King, MSCJ</p>
        <p className="mb-2">Phone: 512-608-1380</p>
        <p className="mb-8">Manager, Non-Violent Verbal De-escalation Intervention Service</p>
        <ContactForm/>
    </div>
);

const Footer: React.FC = () => (
    <footer className="bg-blue-700 text-white text-center p-4">
    <p>&copy; 2028 CompassNVST. All rights reserved.</p>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
          <AboutMe />
          <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
