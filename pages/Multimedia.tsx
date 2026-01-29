import React from 'react';

const Multimedia: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Video Section */}
      <div className="mb-8">
        <div className="px-4 py-3 bg-gray-100 sticky top-16 z-10 font-bold text-gray-700">
          一分钟短片集
        </div>
        <div className="overflow-x-auto flex gap-4 p-4 no-scrollbar">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-none w-72 snap-center">
              <div className="aspect-video bg-gray-800 rounded-lg mb-2 relative group overflow-hidden">
                <img src={`https://picsum.photos/400/225?random=${i}`} alt="Video Thumbnail" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <h4 className="font-medium text-gray-800 line-clamp-2">海外出行安全指南 - 第{i}集：证件保管的重要性</h4>
              <span className="text-xs text-gray-500">01:30</span>
            </div>
          ))}
        </div>
      </div>

      {/* Podcast Section */}
      <div>
        <div className="px-4 py-3 bg-gray-100 sticky top-16 z-10 font-bold text-gray-700 flex justify-between items-center">
          <span>领保播客</span>
          <button className="text-xs text-macau-green border border-macau-green px-2 py-0.5 rounded">RSS 订阅</button>
        </div>
        <div className="p-4 space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-3 rounded-lg shadow-sm flex gap-3 items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded flex items-center justify-center text-indigo-500 font-bold shrink-0">
                Vol.{i}
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-medium text-gray-800 truncate">领事保护真实案例解析 #{i}</h5>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-1 flex-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-macau-green w-1/3"></div>
                  </div>
                  <span className="text-xs text-gray-400">12:00</span>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600">
                ▶
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Multimedia;