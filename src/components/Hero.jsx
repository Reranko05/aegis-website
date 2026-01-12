import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Shield, Zap, Cpu, Lock } from 'lucide-react';
import aegisLogo from '../assets/aegis-logo.jpg';

const Hero = () => {
  const statusRef = useRef(null);
  const [statusIndex, setStatusIndex] = useState(0);

  const statusMessages = [
    "System Status: ONLINE...",
    "Scanning for threats...",
    "Aegis Protocol: ACTIVE",
    "Firewall: ENGAGED",
    "Encryption: 256-BIT ACTIVE"
  ];

  // Typing effect
  useEffect(() => {
    const element = statusRef.current;
    if (!element) return;

    const text = statusMessages[statusIndex];
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    function type() {
      const currentText = text;
      
      if (isDeleting) {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setStatusIndex((prev) => (prev + 1) % statusMessages.length);
        speed = 500;
      }

      timeout = setTimeout(type, speed);
    }

    type();

    return () => clearTimeout(timeout);
  }, [statusIndex]);

  const stats = [
    { value: "50+", label: "Events Hosted", icon: <Zap className="w-4 h-4" /> },
    { value: "2k+", label: "Community", icon: <Shield className="w-4 h-4" /> },
    { value: "100%", label: "Student Run", icon: <Cpu className="w-4 h-4" /> },
    { value: "24/7", label: "Active", icon: <Lock className="w-4 h-4" /> },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* CRT Scanline */}
      <div className="scanline-overlay"></div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto py-12 sm:py-20">
          {/* Logo Animation */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-500 to-white rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              
              {/* Main Logo Container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-gray-800 bg-black p-2">
                <img 
                  src={aegisLogo} 
                  alt="AEGIS Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
                
                {/* Rotating Border Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyber-neon animate-spin-slow"></div>
              </div>
              
              {/* Floating Dots */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-cyber-neon rounded-full animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-cyber-neon rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyber-neon rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-cyber-neon rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 glitch-text tracking-tighter text-white" data-text="AEGIS SRM">
              AEGIS SRM
            </h1>
            
            {/* Status Display */}
            <div className="inline-flex items-center space-x-3 text-gray-400 font-mono text-sm sm:text-base md:text-lg mb-8 bg-gray-900/50 px-4 py-3 border border-gray-700 rounded-lg backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span ref={statusRef} className="text-white font-medium">
                System Status: ONLINE...
              </span>
              <div className="w-2 h-4 bg-cyber-neon animate-pulse ml-1"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto text-lg sm:text-xl mb-10 text-center leading-relaxed">
            The Student Run Organization dedicated to{' '}
            <span className="text-white font-bold">Cybersecurity</span>,{' '}
            <span className="text-white font-bold">Ethical Hacking</span>, and{' '}
            <span className="text-white font-bold">Technical Intelligence</span> at SRMIST.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="cyber-btn bg-white text-black font-bold px-8 py-4 text-lg hover:bg-gray-200 transition-all duration-300 group flex items-center justify-center gap-2 hover:scale-105">
              EXPLORE OPERATIONS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="cyber-btn border-2 border-gray-600 text-gray-400 px-8 py-4 text-lg hover:border-cyber-neon hover:text-white transition-all duration-300 hover:scale-105">
              DECRYPT INFO
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-gray-800 pt-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center cyber-card p-6 hover:border-cyber-neon transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white font-mono mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-neon/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-neon/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;