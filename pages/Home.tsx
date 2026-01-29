import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_NOTIFICATIONS, KNOWLEDGE_CARDS } from '../constants';

const Home: React.FC = () => {
  const scrollToContent = () => {
    const content = document.getElementById('home-content');
    content?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Full Viewport with New Color Scheme */}
      <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden">
        
        {/* Column 1: Consular Protection (Red) */}
        <Link to="/protection" className="group relative flex-1 bg-brand-red flex items-center justify-center hover:brightness-110 transition-all duration-300">
          <div className="text-center text-white p-4">
            <div className="text-5xl md:text-6xl mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300">🛡️</div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide">领事保护</h2>
            <p className="mt-2 opacity-0 group-hover:opacity-80 transition-opacity text-sm">Consular Protection</p>
          </div>
        </Link>

        {/* Column 2: Resident Rights (Blue) */}
        <Link to="/rights" className="group relative flex-1 bg-brand-blue flex items-center justify-center hover:brightness-110 transition-all duration-300">
          <div className="text-center text-white p-4">
            <div className="text-5xl md:text-6xl mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300">⚖️</div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide">居民权利</h2>
             <p className="mt-2 opacity-0 group-hover:opacity-80 transition-opacity text-sm">Resident Rights</p>
          </div>
        </Link>

        {/* Column 3: Travel Alerts (Orange) */}
        <Link to="/safety-index" className="group relative flex-1 bg-brand-orange flex items-center justify-center hover:brightness-110 transition-all duration-300">
          <div className="text-center text-white p-4">
            <div className="text-5xl md:text-6xl mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300">📢</div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide">旅游警示</h2>
             <p className="mt-2 opacity-0 group-hover:opacity-80 transition-opacity text-sm">Travel Alerts</p>
          </div>
        </Link>

        {/* Column 4: Emergency (Green - Safety) */}
        <Link to="/emergency" className="group relative flex-1 bg-brand-green flex items-center justify-center hover:brightness-110 transition-all duration-300">
          <div className="text-center text-white p-4">
            <div className="text-5xl md:text-6xl mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300">🚨</div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide">紧急热线</h2>
             <p className="mt-2 opacity-0 group-hover:opacity-80 transition-opacity text-sm">Emergency Hotline</p>
          </div>
        </Link>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none z-20">
          <button 
            onClick={(e) => { e.preventDefault(); scrollToContent(); }}
            className="pointer-events-auto flex flex-col items-center gap-2 bg-black/20 backdrop-blur-md px-6 py-2 rounded-full text-white hover:bg-black/40 transition-colors border border-white/20"
          >
            <span className="text-xs font-medium tracking-widest">下滑浏览更多</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Content Section */}
      <div id="home-content" className="bg-white relative z-10 min-h-screen">
        
        {/* Knowledge Section */}
        <section className="py-8 border-b border-gray-100">
          <div className="px-4 mb-4 flex items-center gap-3">
            <div className="w-1.5 h-6 bg-brand-red rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-800">领保烫知识</h2>
          </div>
          
          <div className="overflow-x-auto flex gap-4 px-4 pb-4 no-scrollbar snap-x snap-mandatory">
            {KNOWLEDGE_CARDS.map((card) => (
              <Link key={card.id} to={card.link} className="flex-none w-[85vw] md:w-96 snap-center group">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold">
                      {card.title}
                    </h3>
                  </div>
                  <div className="px-4 py-3 flex justify-between items-center bg-gray-50">
                    <span className="text-xs text-gray-500 font-pt">KNOWLEDGE</span>
                    <span className="text-sm font-bold text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all">
                      阅读 <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Notifications Panel */}
        <section className="py-8 px-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-brand-blue rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-800">通知面板</h2>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
              <div className="col-span-3">日期</div>
              <div className="col-span-7">内容</div>
              <div className="col-span-2 text-right">下载</div>
            </div>

            <div className="divide-y divide-gray-100">
              {MOCK_NOTIFICATIONS.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-blue-50/50 transition-colors">
                  <div className="col-span-3 text-xs md:text-sm text-gray-500 font-en">
                    {item.date}
                  </div>
                  <div className="col-span-7">
                    <a href={item.link} className="text-sm md:text-base text-gray-800 font-medium hover:text-brand-blue line-clamp-2">
                      {item.title}
                    </a>
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <a href={item.link} className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-gray-50 text-center border-t border-gray-200">
              <Link to="/events" className="text-sm text-gray-500 hover:text-brand-blue font-medium inline-flex items-center gap-1">
                查看更多通知 <span>&darr;</span>
              </Link>
            </div>
          </div>
        </section>

        <div className="h-24"></div>
      </div>
    </div>
  );
};

export default Home;