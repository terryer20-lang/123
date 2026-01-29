import React, { useState } from 'react';
import { EXTERNAL_LINKS } from '../constants';

const Emergency: React.FC = () => {
  const [locationStatus, setLocationStatus] = useState<string>('');

  const handleGetLocation = () => {
    setLocationStatus('正在获取位置...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationStatus(`位置已获取: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          // In a real app, this would query a backend/map service to find the nearest consulate
          setTimeout(() => {
            window.location.href = EXTERNAL_LINKS.consulateFinder;
          }, 1500);
        },
        (error) => {
          setLocationStatus(`无法获取位置: ${error.message}`);
        }
      );
    } else {
      setLocationStatus('您的浏览器不支持地理位置服务');
    }
  };

  return (
    <div className="min-h-[80vh] p-4 md:p-6 space-y-6 text-center max-w-xl mx-auto pb-24">
      <div className="mt-16 md:mt-24"></div>
      
      {/* Hotline Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border-t-8 border-brand-red relative overflow-hidden">
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-red-50 rounded-full opacity-50"></div>
        
        <h2 className="text-gray-500 font-medium mb-4 text-sm md:text-base relative z-10">
          外交部全球领事保护与服务<br/>应急热线 (24小时)
        </h2>
        
        <div className="text-4xl md:text-5xl font-black text-brand-red tracking-wider mb-8 font-en select-all relative z-10">
          +86 10 12308
        </div>
        
        <div className="grid gap-4 relative z-10">
          <a 
            href={`tel:${EXTERNAL_LINKS.emergencyHotline}`}
            className="flex items-center justify-center gap-3 bg-brand-red text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-200 active:bg-red-700 active:scale-[0.98] transition-all"
          >
            <span className="text-2xl animate-pulse">📞</span> 
            <span>一键呼叫</span>
          </a>
          
          <button 
            onClick={handleGetLocation}
            className="flex items-center justify-center gap-3 bg-white border-2 border-brand-green text-brand-green py-4 rounded-xl font-bold text-lg active:bg-green-50 active:scale-[0.98] transition-all"
          >
            <span className="text-2xl">📍</span> 
            <span>寻找附近使领馆</span>
          </button>
        </div>
        
        {locationStatus && (
          <div className="mt-4 text-xs md:text-sm text-gray-500 animate-pulse bg-gray-50 py-2 rounded">
            {locationStatus}
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="text-left space-y-3 px-1">
        <h3 className="font-bold text-gray-800 text-lg border-l-4 border-brand-orange pl-3 flex items-center gap-2">
          <span>⚠️</span> 求助须知
        </h3>
        <div className="bg-gray-100/80 p-5 rounded-xl text-sm text-gray-600 space-y-3 leading-relaxed shadow-inner">
           <p className="flex gap-2">
             <span className="font-bold text-gray-400">1.</span>
             <span>遭遇突发紧急情况时，请首先拨打当地报警电话。</span>
           </p>
           <p className="flex gap-2">
             <span className="font-bold text-gray-400">2.</span>
             <span>如需领事协助，请拨打12308热线。</span>
           </p>
           <p className="flex gap-2">
             <span className="font-bold text-gray-400">3.</span>
             <span>丢失护照请立即向当地警方挂失并联系就近使领馆补办旅行证。</span>
           </p>
        </div>
      </div>
    </div>
  );
};

export default Emergency;