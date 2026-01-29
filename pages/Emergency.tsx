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
    <div className="p-4 space-y-6 text-center">
      {/* Hotline Section */}
      <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-alert-red">
        <h2 className="text-gray-500 font-medium mb-4">外交部全球领事保护与服务<br/>应急热线 (24小时)</h2>
        <div className="text-4xl font-black text-alert-red tracking-wider mb-8">
          +86 10 12308
        </div>
        
        <div className="grid gap-4">
          <a 
            href={`tel:${EXTERNAL_LINKS.emergencyHotline}`}
            className="flex items-center justify-center gap-2 bg-alert-red text-white py-4 rounded-lg font-bold text-lg shadow-lg active:bg-red-700 transition-colors"
          >
            <span className="text-2xl">📞</span> 一键呼叫
          </a>
          
          <button 
            onClick={handleGetLocation}
            className="flex items-center justify-center gap-2 bg-white border-2 border-macau-green text-macau-green py-4 rounded-lg font-bold text-lg"
          >
            <span className="text-2xl">📍</span> 寻找附近使领馆
          </button>
        </div>
        
        {locationStatus && (
          <div className="mt-4 text-sm text-gray-500 animate-pulse">
            {locationStatus}
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="text-left space-y-4">
        <h3 className="font-bold text-gray-800 text-lg border-l-4 border-macau-gold pl-3">求助须知</h3>
        <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 space-y-2">
           <p>1. 遭遇突发紧急情况时，请首先拨打当地报警电话。</p>
           <p>2. 如需领事协助，请拨打12308热线。</p>
           <p>3. 丢失护照请立即向当地警方挂失并联系就近使领馆补办旅行证。</p>
        </div>
      </div>
    </div>
  );
};

export default Emergency;