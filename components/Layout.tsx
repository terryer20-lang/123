import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-x-hidden font-sans">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 flex items-center justify-between
          ${isHome && !scrolled ? 'bg-gradient-to-b from-black/50 to-transparent py-5' : 'bg-brand-red shadow-md py-3'}
        `}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
             <span className="font-serif font-bold text-white text-lg">EQ</span>
          </div>
          <span className={`font-bold text-white text-lg tracking-wide ${isHome && !scrolled ? 'opacity-90' : 'opacity-100'}`}>
            领事保护
          </span>
        </Link>
        
        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="hidden md:flex bg-black/20 backdrop-blur rounded-full px-4 py-1.5 text-xs font-medium text-white border border-white/20 items-center gap-3">
             <button className="hover:text-brand-orange transition-colors">繁</button>
             <span className="opacity-50">|</span>
             <button className="hover:text-brand-orange transition-colors">简</button>
             <span className="opacity-50">|</span>
             <button className="hover:text-brand-orange transition-colors font-en">EN</button>
             <span className="opacity-50">|</span>
             <button className="hover:text-brand-orange transition-colors font-pt">PT</button>
          </div>
           {/* Mobile simpler lang switcher */}
           <button className="md:hidden w-8 h-8 rounded-full bg-white/20 backdrop-blur text-white border border-white/30 flex items-center justify-center text-xs font-bold">
             繁
           </button>

          {/* Menu Button */}
          <button 
            onClick={toggleMenu}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/30 flex flex-col items-center justify-center gap-1.5 hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Menu"
          >
            <div className="w-5 h-0.5 bg-white rounded-full"></div>
            <div className="w-5 h-0.5 bg-white rounded-full"></div>
            <div className="w-5 h-0.5 bg-white rounded-full"></div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Sidebar Overlay Menu */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-6 flex justify-between items-center bg-brand-red text-white">
            <span className="font-bold text-xl tracking-wider">功能菜单</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl opacity-70 hover:opacity-100 w-8 h-8 flex items-center justify-center">&times;</button>
          </div>
          <div className="overflow-y-auto flex-1 py-2">
            {MENU_ITEMS.map((item) => (
              <Link 
                key={item.id} 
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-8 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors group ${location.pathname === item.path ? 'bg-red-50' : ''}`}
              >
                <span className="mr-4 text-xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                <span className={`text-base font-medium ${location.pathname === item.path ? 'text-brand-red' : 'text-gray-700'}`}>
                  {item.text}
                </span>
              </Link>
            ))}
          </div>
          <div className="p-6 bg-gray-50 text-center text-xs text-gray-400">
            © 2024 澳门领事保护
          </div>
        </div>
      </div>

      {/* Floating SOS Button */}
      <Link 
        to="/emergency"
        className="fixed bottom-8 right-6 bg-brand-red text-white w-14 h-14 rounded-full shadow-xl shadow-red-900/30 flex flex-col items-center justify-center z-40 hover:scale-105 transition-transform border-4 border-white/90 animate-pulse"
        aria-label="Emergency SOS"
      >
        <span className="text-2xl">🆘</span>
      </Link>
    </div>
  );
};

export default Layout;