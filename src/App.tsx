import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Eye, Settings, Zap, CheckCircle } from 'lucide-react';
import heroImage from 'figma:asset/fa6f1675cb409a0c9920a22114d2e15fb14dc6a9.png';
import awardImage from 'figma:asset/f10ed71124d5c0a4655cb18970aff3f536939c7b.png';
import marathonImage from 'figma:asset/f9807466b65886ce5c36c69f179e640f278ed63d.png';
import innovestImage from 'figma:asset/40669da32bf67ec7b247fb23fc8085375f8cac18.png';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const processSteps = [
    { icon: '✏️', label: 'Sketch', step: '01' },
    { icon: '📐', label: 'CAD', step: '02' },
    { icon: '🔧', label: 'Prototype', step: '03' },
    { icon: '🧪', label: 'Test', step: '04' }
  ];

  const materials = ['Metal', 'Polymer', 'Recycled', 'Paper-based'];

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Google Fonts Import */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Portrait Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gray-50 flex items-center justify-center p-8 lg:p-16"
        >
          {/* Baseline Grid Hint */}
          <div className="absolute inset-0 opacity-5">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="absolute w-full h-px bg-gray-400" style={{ top: `${i * 5}%` }}></div>
            ))}
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="absolute h-full w-px bg-gray-400" style={{ left: `${i * 8.33}%` }}></div>
            ))}
          </div>
          
          <div className="relative z-10 max-w-md">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl mb-6">
              <img
                src={heroImage}
                alt="Manav R. Sirwani - Industrial Designer with award"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Spec Callouts */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1A6DFF] rounded-full"></div>
                <span className="text-xs font-medium text-[#1A6DFF] tracking-wide">FOCUS: PRODUCT SYSTEMS</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1A6DFF] rounded-full"></div>
                <span className="text-xs font-medium text-[#1A6DFF] tracking-wide">STRENGTH: APP-FIRST HARDWARE UX</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1A6DFF] rounded-full"></div>
                <span className="text-xs font-medium text-[#1A6DFF] tracking-wide">METHOD: PROTOTYPE → TEST → ITERATE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center justify-center p-8 lg:p-16"
        >
          <div className="max-w-lg space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-black mb-4 tracking-tight" style={{ fontWeight: 900 }}>
                Manav R. Sirwani
              </h1>
              <div className="w-16 h-px bg-black mb-6"></div>
              <h2 className="text-xl font-medium text-gray-700 mb-6">
                Industrial Designer | Entrepreneur
              </h2>
              <div className="space-y-3">
                <p className="text-lg leading-relaxed">
                  From the spark of an <span className="text-[#1A6DFF] font-semibold">Idea</span> to Real-World <span className="text-[#1A6DFF] font-semibold">Utility</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  Design that delivers <span className="text-[#1A6DFF] font-semibold">Value</span>, not Just Visuals.
                </p>
                <p className="text-sm text-gray-600 pt-2">
                  Designing with purpose. Innovating with intent.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('background')}
                className="bg-[#1A6DFF] hover:bg-[#1557cc] text-white px-8 py-3 font-medium transition-all duration-200"
              >
                View Background
              </Button>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-3 font-medium transition-all duration-200"
              >
                Download 1-page CV
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Background Section */}
      <section id="background" className="py-24 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight" style={{ fontWeight: 900 }}>
              About, Education, Achievements, Proof
            </h2>
            <div className="w-24 h-px bg-black mx-auto"></div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* About Manav */}
              <div>
                <h3 className="text-2xl font-bold mb-6">About Manav</h3>
                <p className="text-lg leading-relaxed mb-8">
                  I design products that bridge <span className="text-[#1A6DFF] font-semibold">innovation</span> and <span className="text-[#1A6DFF] font-semibold">affordability</span> — from IoT security systems to sustainable material experiments. 
                  Driven by curiosity and a belief that good design should improve <span className="text-[#FF3B3B] font-semibold">everyday life</span>, 
                  I build ideas that are functional, meaningful, and ready for the real world.
                </p>
              </div>

              {/* Process Strip */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-4 tracking-wide">DESIGN PROCESS</h4>
                <div className="flex items-center justify-between bg-gray-50 p-6 rounded-lg">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
                        {step.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-600">{step.step}</span>
                      <span className="text-sm font-semibold">{step.label}</span>
                      {index < processSteps.length - 1 && (
                        <div className="absolute w-8 h-px bg-gray-300 transform translate-x-8 -translate-y-6"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials/CMF Chips */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-4 tracking-wide">MATERIALS & CMF</h4>
                <div className="flex flex-wrap gap-3">
                  {materials.map((material, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-[#1A6DFF] hover:text-white cursor-pointer transition-colors duration-200"
                    >
                      {material}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Education</h3>
                <div className="space-y-6">
                  <div className="pb-4 border-b border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold">B.Des, Nirma University</p>
                        <p className="text-gray-600">Ahmedabad, Gujarat</p>
                      </div>
                      <span className="text-sm text-gray-500 font-mono">2022–2026</span>
                    </div>
                  </div>
                  <div className="pb-4 border-b border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold">HSC, Bai Ava Bai High School</p>
                        <p className="text-gray-600">Valsad, Gujarat</p>
                      </div>
                      <span className="text-sm text-gray-500 font-mono">2019–2021</span>
                    </div>
                  </div>
                  <div className="pb-4 border-b border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold">SSC, Bai Ava Bai High School</p>
                        <p className="text-gray-600">Valsad, Gujarat</p>
                      </div>
                      <span className="text-sm text-gray-500 font-mono">2015–2019</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Achievements</h3>
                <div className="space-y-4">
                  {[
                    'India\'s Best Design Student Award',
                    'SSIP Grant Recipient',
                    'Marketing Marathon Winner',
                    'Innovest 2.0 – 2nd Runner-Up'
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[#1A6DFF] rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Press & Recognition */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Press & Recognition</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* First card - India's Best Design Award */}
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-gray-100">
                    <div className="aspect-[4/3] bg-gray-100 relative">
                      <img
                        src={awardImage}
                        alt="India's Best Design Awards 2025 - Manav R. Sirwani receiving award"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute bottom-2 left-2">
                        <span className="text-xs font-medium text-[#1A6DFF] bg-white px-2 py-1 rounded">
                          Award ceremony — IBDA 2025
                        </span>
                      </div>
                    </div>
                  </Card>
                  {/* Second card - Marketing Marathon Winner */}
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-gray-100">
                    <div className="aspect-[4/3] bg-gray-100 relative">
                      <img
                        src={marathonImage}
                        alt="Marketing Marathon Winner - Nirma University press coverage"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute bottom-2 left-2">
                        <span className="text-xs font-medium text-[#1A6DFF] bg-white px-2 py-1 rounded">
                          Marketing Marathon — Nirma Press
                        </span>
                      </div>
                    </div>
                  </Card>
                  {/* Third card - Innovest 2.0 Winner */}
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-gray-100">
                    <div className="aspect-[4/3] bg-gray-100 relative">
                      <img
                        src={innovestImage}
                        alt="Innovest 2.0 - 2nd Runner-Up press coverage in Gujarati newspaper"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute bottom-2 left-2">
                        <span className="text-xs font-medium text-[#1A6DFF] bg-white px-2 py-1 rounded">
                          Innovest 2.0 — 2nd Runner-Up
                        </span>
                      </div>
                    </div>
                  </Card>
                  {/* Fourth card - Additional coverage */}
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-gray-100">
                    <div className="aspect-[4/3] bg-gray-100 relative">
                      <img
                        src={heroImage}
                        alt="Additional Press Coverage"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute bottom-2 left-2">
                        <span className="text-xs font-medium text-[#1A6DFF] bg-white px-2 py-1 rounded">
                          Press coverage — Additional Media
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
                <a href="#" className="text-[#1A6DFF] font-medium hover:underline transition-all duration-200">
                  View All Press →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight" style={{ fontWeight: 900 }}>
              Let's Connect
            </h2>
            
            <div className="space-y-6 text-lg font-medium">
              <div className="flex justify-center items-center space-x-4">
                <span className="text-gray-500 w-16 text-right">Phone:</span>
                <a href="tel:9537982580" className="hover:text-[#1A6DFF] transition-colors duration-200">
                  9537982580
                </a>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <span className="text-gray-500 w-16 text-right">LinkedIn:</span>
                <a href="#" className="hover:text-[#1A6DFF] transition-colors duration-200">
                  Manav Sirwani
                </a>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <span className="text-gray-500 w-16 text-right">Mail:</span>
                <a href="mailto:manavsirwanidesign@gmail.com" className="hover:text-[#1A6DFF] transition-colors duration-200">
                  manavsirwanidesign@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                onClick={() => window.open('https://wa.me/919537982580', '_blank')}
                className="bg-[#FF3B3B] hover:bg-[#e03333] text-white px-12 py-4 font-medium transition-all duration-200"
              >
                Chat on WhatsApp
              </Button>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-12 py-4 font-medium transition-all duration-200"
              >
                Email Me
              </Button>
            </div>

            {/* Ruler Tick Graphic */}
            <div className="pt-12">
              <div className="flex justify-center items-center space-x-1 opacity-30">
                <div className="w-px h-3 bg-gray-400"></div>
                <div className="w-px h-2 bg-gray-400"></div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-px h-2 bg-gray-400"></div>
                <div className="w-px h-3 bg-gray-400"></div>
                <div className="w-px h-2 bg-gray-400"></div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-px h-2 bg-gray-400"></div>
                <div className="w-px h-3 bg-gray-400"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 lg:px-16 bg-black text-white text-center">
        <p className="text-sm font-mono">
          © 2025 Manav R. Sirwani — Industrial Designer
        </p>
      </footer>
    </div>
  );
}