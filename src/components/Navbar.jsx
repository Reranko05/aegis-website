import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import aegisLogo from '../assets/aegis-logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const navItems = [
    { id: 'home', label: 'Main', prefix: '>' },
    { id: 'about', label: 'Intel', prefix: '>' },
    { id: 'events', label: 'Ops', prefix: '>' },
    { id: 'team', label: 'Unit', prefix: '>' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-cyber-black/95 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative w-10 h-10 border border-gray-500 rounded-sm p-1 group-hover:border-cyber-neon transition-all duration-300">
                <img 
                  src={aegisLogo} 
                  alt="AEGIS Logo" 
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="absolute inset-0 border border-cyber-neon/30 animate-ping rounded-sm opacity-75"></div>
              </div>
              <div className="flex flex-col">
                <div className="relative">
                  <span className="text-xl font-bold tracking-wider text-white group-hover:text-cyber-neon transition-colors font-mono glitch-text" data-text="AEGIS SRM">
                    AEGIS SRM
                  </span>
                </div>
                <span className="text-[0.6rem] text-gray-400 uppercase tracking-[0.2em] mt-0.5">
                  Cyber Defense Unit
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveLink(item.id)}
                  className={`font-mono text-sm tracking-widest uppercase py-1 transition-all duration-300 ${
                    activeLink === item.id
                      ? 'text-white border-b-2 border-cyber-neon'
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  <span className="text-cyber-neon mr-1">{item.prefix}</span>
                  {item.label}
                </button>
              ))}
              
              <button className="cyber-btn bg-gray-800 border border-gray-600 text-gray-300 px-6 py-2 hover:bg-gray-700 hover:text-white hover:border-white font-bold uppercase transition-all duration-300 hover:scale-105">
                Join Protocol
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cyber-neon hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 font-mono">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveLink(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left uppercase py-2 px-4 rounded transition-all duration-300 ${
                      activeLink === item.id
                        ? 'text-white bg-gray-800 border-l-2 border-cyber-neon'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                    }`}
                  >
                    _{item.label}
                  </button>
                ))}
                <button className="text-left text-cyber-neon font-bold py-3 px-4 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                  _JOIN_NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;