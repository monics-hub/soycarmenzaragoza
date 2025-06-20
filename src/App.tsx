import React, { useState } from 'react';
import { ChevronDown, Menu, X, Linkedin, Github, Twitter, Youtube, Globe } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import ExperienceSection from './pages/ExperienceSection';
import EducationSection from './pages/EducationSection';
import WhoIAmSection from './pages/WhoIAmSection';
import RecognitionSection from './pages/RecognitionSection';
import ContactSection from './pages/ContactSection';

type SectionId = 'inicio' | 'educacion' | 'experiencia' | 'reconocimientos' | 'contacto';
const App: React.FC = () => {
  const [, setActiveSection] = useState<SectionId>('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: SectionId): void => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const sections: { id: SectionId; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'educacion', label: 'Educación' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'reconocimientos', label: 'Reconocimientos' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const name = "María del Carmen Zaragoza González"
  const position = "Directora General de Desarrollo Social"

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <img src="carranza_logo.png" alt="logo" className="w-12 h-10"/>
            <div className="text-2xl font-bold text-brand">{name}</div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mt-4 space-y-4">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white hover:text-brand py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 min-h-screen">
            {/* Left Side - Red */}
            <div className="bg-brand flex flex-col justify-center items-center min-h-140 pt-24 md:pt-8">
              <div data-aos="fade-right" className="w-80 h-80 rounded-full overflow-hidden bg-brand-bright mb-8 flex items-center justify-center">
                <div className="w-72 h-72 bg-gray-300 rounded-full flex items-center justify-center">
                  <img src="carmen2.jpg" alt="Imagen de perfil" className="object-cover w-full h-full rounded-full" />
                </div>
              </div>
              
              <div className="flex space-x-6 text-gray-200">
                <Linkedin size={24} className="hover:text-gray-600 cursor-pointer" />
                <Github size={24} className="hover:text-gray-600 cursor-pointer" />
                <Twitter size={24} className="hover:text-gray-600 cursor-pointer" />
                <Youtube size={24} className="hover:text-gray-600 cursor-pointer" />
                <Globe size={24} className="hover:text-gray-600 cursor-pointer" />
              </div>
            </div>
            
            {/* Right Side - Dark */}
            <div className="bg-gray-900 flex flex-col justify-center p-8 lg:p-16">
              <div className="w-full">
                <p className="text-brand text-lg mb-4">{position}.</p>
                <h1 className="text-5xl lg:text-6xl font-bold mb-8">{name}</h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Especialista en derecho administrativo con más de 8 años de experiencia en el sector gubernamental.
                  Actualmente laboro en la Alcaldía Venustiano Carranza. Comprometida con la excelencia jurídica y la transparencia 
                  en el servicio público para construir instituciones sólidas y confiables que permitan el desarrollo de
                  la población general pero en partícular aquellxs en situación vulnerable.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="border-2 border-brand text-brand px-8 py-3 rounded-full hover:border-red-900 
                  hover:text-white transition-colors cursor-pointer">
                    Descargar CV
                  </button>
                  <button 
                    onClick={() => scrollToSection('contacto')}
                    className="bg-brand-bright text-white px-8 py-3 rounded-full hover:bg-red-900 transition-colors cursor-pointer"
                  >
                    Contacto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhoIAmSection/>
      <EducationSection/>
      <ExperienceSection/>
      <RecognitionSection/>
      <ContactSection/>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection('inicio')}
        className="fixed bottom-8 right-8 w-12 h-12 bg-brand-bright rounded-full flex items-center justify-center 
        hover:bg-red-900 transition-colors shadow-lg cursor-pointer"
      >
        <ChevronDown size={20} className="text-white transform rotate-180" />
      </button>
    </div>
  );
};

export default App;