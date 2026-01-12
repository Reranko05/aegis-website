import { useState } from 'react';
import { Linkedin, Instagram, Github, MessageSquare, Shield, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com/company/aegis-srm' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Discord', href: '#' },
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: '#' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitting(false);
      alert('Transmission received! You are now subscribed.');
    }, 1500);
  };

  return (
    <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-lg relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 border border-gray-700 rounded-sm p-1">
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                    <Shield className="w-6 h-6 text-cyber-neon" />
                  </div>
                  <div className="absolute inset-0 border border-cyber-neon/30 animate-ping rounded-sm opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono tracking-wider">AEGIS SRM</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Cyber Defense Unit</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                The premier student-run cybersecurity organization at SRMIST. 
                We guard the digital frontier through education, collaboration, and innovation.
              </p>
              <div className="bg-gray-900/50 p-3 rounded border border-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <code className="text-xs text-gray-400 font-mono">
                    SYSTEM_ENCRYPTED: ACTIVE | UPTIME: 100%
                  </code>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 font-mono tracking-wider border-b border-gray-800 pb-2">
                <span className="text-cyber-neon"></span> QUICK_ACCESS
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {['Home', 'Intel', 'Operations', 'Team', 'Join', 'Events'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-400 hover:text-white text-sm font-mono transition-colors group flex items-center"
                  >
                    <span className="text-cyber-neon opacity-0 group-hover:opacity-100 transition-opacity mr-1">_</span>
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 font-mono tracking-wider border-b border-gray-800 pb-2">
                <span className="text-cyber-neon"></span> STAY_UPDATED
              </h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 font-mono block">
                    ENTER_COMM_FREQUENCY
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@domain.com"
                      className="w-full bg-gray-900/50 border border-gray-700 text-white pl-10 pr-4 py-3 rounded focus:border-cyber-neon focus:outline-none font-mono text-sm placeholder-gray-600 transition-colors"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-btn w-full bg-gray-800 border border-gray-700 text-white py-3 font-mono text-sm uppercase tracking-widest hover:bg-gray-700 hover:border-cyber-neon transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ENCRYPTING...
                    </>
                  ) : (
                    'SUBSCRIBE_TO_FEED'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-8">
            <div className="flex space-x-6 mb-6 sm:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white transition-all duration-300 group relative"
                  aria-label={social.label}
                >
                  <div className="p-2 border border-gray-800 rounded group-hover:border-cyber-neon group-hover:bg-gray-900/50 transition-all">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Security Badge */}
            <div className="flex items-center space-x-3 bg-gray-900/30 border border-gray-800 rounded-lg px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="text-xs font-mono">
                <span className="text-gray-400">SECURITY_STATUS: </span>
                <span className="text-green-400">OPTIMAL</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center text-center">
              <p className="text-gray-600 font-mono text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} AEGIS SRM. SYSTEM SECURE.
                <br className="sm:hidden" /> 
                <span className="hidden sm:inline"> | </span>
                DESIGNED BY CYBER SENTINEL UNIT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;