// types.ts
interface TrainingCardProps {
  title: string;
  duration: string;
  purpose: string;
  forWho: string;
}

// App.tsx
import React from 'react';
import ContactForm from './components/ContactForm';
import logo from './assets/compassnvstlogo-white.svg';
import handout from './assets/photos/handout.jpg';
import choose from './assets/photos/touch.jpg';

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

const AboutSection: React.FC = () => (
  <section className="mb-12 p-8 bg-white rounded-lg shadow grid grid-cols-1 xl:grid-cols-2 gap-2">
      <div>
          <img
              src={handout}
              alt="Handout during training"
              className="h-auto max-w-78 mx-auto md:max-w-lg lg:max-w-xl"
          />
      </div>
      <div>
          <p className="text-xl font-bold text-blue-900 text-center mt-9 lg:text-2xl xl:text-3xl">Our mission empowers individuals and organizations with the tools and techniques needed to navigate
              challenging conversations and interactions with confidence and compassion. Our certified facilitator-led
              training sessions provide participants with practical skills that promote understanding, respect, and
              resolution without resorting to aggression or hostility.</p>
      </div>
  </section>
);

const BenefitsSection: React.FC = () => (
    <section className="mb-12 p-8 bg-white rounded-lg shadow grid grid-cols-1 xl:grid-cols-2 gap-2">
        <div>
            <h2 className="text-2xl text-blue-900 mb-4">Why Choose Our Service?</h2>
            <h3 className="text-xl text-blue-700 mb-3">Expertise and Compassion</h3>
            <p className="mb-6">Our facilitator is a trained and certified professional, He brings both expertise in
                non-violent de-escalation techniques and a compassionate approach to defusing tense situations through
                careful, verbal communication.</p>
            <h3 className="text-xl text-blue-700 mb-3">Accredited</h3>
            <p className="mb-6">This is an approved Nonviolent Crisis Intervention course, certified to provide instruction and to teach the core principles and practices of verbal de-escalation/ nonviolent crisis intervention.</p>

            <h3 className="text-xl text-blue-700 mb-3">What we provide:</h3>
            <ul className="list-none">
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Understanding crisis situations
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Understanding Cognitive Behavior Crisis Intervention (CBT)
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Principles of Nonviolent Crisis Intervention
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Communication skills
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    De-escalation Techniques
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Core skills for verbal de-escalation
                </li>
            </ul>
        </div>
        <div className="">
            <img
                src={choose}
                alt="why choose us"
                className="h-auto max-w-78 mx-auto md:max-w-lg lg:max-w-xl xl:mt-20"
            />
        </div>
    </section>
);

const TrainingCard: React.FC<TrainingCardProps> = ({title, duration, purpose, forWho}) => (
    <div className="bg-gray-50 p-6 mb-6 h-full">
        <h3 className="text-xl text-blue-700 mb-3">{title}</h3>
        <p className="mb-1"><strong>Duration:</strong> {duration}</p>
        <p className="mb-1"><strong>Format:</strong> Face-to-face</p>
        <p className="mb-1"><strong>Purpose:</strong> {purpose}</p>
        <p className="mb-1"><strong>For Who:</strong> {forWho} </p>
    </div>
);

const TrainingSection: React.FC = () => (
  <section className="mb-12 p-8 bg-white rounded-lg shadow">
    <h2 className="text-2xl text-blue-900 mb-4">Nonviolent Crisis Intervention Training Programs</h2>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="h-full border-l-4 border-blue-900">
              <TrainingCard
                  title="Annual Training"
                  duration="2 hours"
                  purpose="This training refreshes participants on the principles and techniques of Nonviolent Crisis Intervention, ensuring staff remain knowledgeable and prepared to manage crisis situations effectively."
                  forWho="All direct care staff in residential programs and outpatient programs shall recieve this training annually. The face-to-face training shall teach staff how to use verbal and other non-physical methods for prevention, early intervention, and crisis management."
              />
          </div>

          <div className="h-full border-l-4 border-blue-900">
              <TrainingCard
                  title="New Hire Training"
                  duration="4 hours"
                  purpose="This comprehensive training provides new employees with foundational knowledge and skills in Nonviolent Crisis Intervention, covering essential concepts, techniques, and strategies."
                  forWho="All direct care staff in residential programs and outpatient programs shall recieve this training when first hired. The face-to-face training shall teach staff how to use verbal and other non-physical methods for prevention, early intervention, and crisis management."
              />
          </div>

          <div className="h-full border-r-0 border-blue-900 border-l-4 lg:border-r-4">
              <TrainingCard
                  title="Abuse, Neglect, Exploitation (ANE) Training"
                  duration="8 hours (Residential) / 2 hours (Outpatient)"
                  purpose="This training provides comprehensive education on recognizing, preventing, and responding to abuse, neglect, and exploitation. Participants will learn to identify warning signs and symptoms, understand various forms of mistreatment, and implement effective prevention strategies and protective measures."
                  forWho="All residential program personnel with any direct client contact shall recieive eight hours of ANE training. All outpatient program personnel with any direct client contact shall receive two hours of ANE training."
              />
          </div>
      </section>
  </section>
);

const FAQSection: React.FC = () => (
    <section className="mb-12 p-8 bg-white rounded-lg shadow grid grid-cols-2 xl:grid-cols-2 gap-2">
        <div>
            <h2 className="text-2xl text-blue-900 mb-4">Frequently Asked Questions - Nonviolent Crisis Intervention (NVCI/NVIC) Training</h2>
            <h3 className="text-xl text-blue-700 mb-3">What is Nonviolent Crisis Intervention Training?</h3>
            <p className="mb-6">Nonviolent Crisis Intervention Training teaches individuals how to recognize, prevent, and safelty respond to escalating behaviors using communication, de-escalation, and crisis intervention techniques.</p>
            <h3 className="text-xl text-blue-700 mb-3">Who should attend this training?</h3>
            <p className="mb-6">This training is beneficial for:</p>
          <ul className="list-none">
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Healthcare professionals
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Residential care staff
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Educators and school personnel
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Social service providers
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Security personnel 
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Mental health professionals
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Direct care workers
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Anyone working with individuals who may exhibit challenging behaviors
                </li>
            </ul>

            <h3 className="text-xl text-blue-700 mb-3">What skills will participants learn?</h3>
            <ul className="list-none">
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Early warning signs of crisis behavior
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Verbal de-escalation techniques
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Conflict resolution strategies
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Non-threatening communication methods
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Crisis prevention techniques
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Personal safety awareness
                </li>
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Post-crisis intervention strategies
                </li>
            </ul>
          <h3 className="text-xl text-blue-700 mb-3">Is physical intervention taught in the course?</h3>
            <p className="mb-6">No. Compass NVST program focuses primarily on prevention, de-escalation, and nonphysical interventions.</p>
          <h3 className="text-xl text-blue-700 mb-3">How long is the training?</h3>
            <p className="mb-6">Training length varies depending on organizational needs, typically ranging from 2, 4, and 8 hours.</p>
          <h3 className="text-xl text-blue-700 mb-3">Will participants receive a certificate?</h3>
            <p className="mb-6">Yes. Participants who successfully complete the training receive a certificate of completion.</p>
          <h3 className="text-xl text-blue-700 mb-3">Why is de-escalation important?</h3>
          <p className="mb-6">Effective de-escalation can:</p>
            <ul className="list-none">
                <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Reduce the risk of injury
                </li>
              <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Improve staff and resident safety
                </li>
              <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Preserve dignity and respect
                </li>
              <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Reduce liability
                </li>
              <li className="mb-2 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-900 before:font-bold">
                    Promote positive outcomes during difficult situations
                </li>
              </ul>
        </div>
      <div>
            <h2 className="text-2xl text-blue-900 mb-4">Frequently Asked Questions - Abuse, Neglect, and Elder Exploitation (ANE) Training</h2>
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
    <p>&copy; 2028 CompassNVST LLC. All rights reserved.</p>
    <p>Compass Non Violent Crisis Intervention DBA of CompassNVST LLC</p>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
          <AboutSection />
          <BenefitsSection />
          <TrainingSection />
          <FAQSection />
          <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
