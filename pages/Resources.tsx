import React from 'react';
import { useLanguage } from '../LanguageContext';

const Resources: React.FC = () => {
  const { t } = useLanguage();

  const links = [
    { label: t('resources.link_1'), url: "https://www.fmprc.gov.cn/web/", icon: "🇨🇳" },
    { label: t('resources.link_2'), url: "https://portaldascomunidades.mne.gov.pt/pt/", icon: "🇵🇹" },
    { label: t('resources.link_3'), url: "https://cs.mfa.gov.cn/", icon: "🌏" },
    { label: t('resources.link_4'), url: "https://mo.ocmfa.gov.cn/chn/", icon: "🏢" },
    { label: t('resources.link_5'), url: "https://www.gov.mo/zh-hant/", icon: "🇲🇴" },
    { label: t('resources.link_6'), url: "https://www.dsi.gov.mo/index_cn.jsp", icon: "🆔" },
    { label: t('resources.link_7'), url: "https://www.elctp.k12.edu.mo/elctp/", icon: "🏫" },
  ];

  return (
    <div className="pb-24 min-h-screen bg-gray-50 font-sans">
      
      {/* Hero: Digital Backpack Theme */}
      <div className="relative pt-32 pb-12 px-6 bg-gray-900 overflow-hidden rounded-b-[3rem] shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/4.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
            {t('resources.hero_title')}
          </h1>
          <div className="h-1.5 w-20 bg-brand-green rounded-full mt-4 mx-auto md:mx-0"></div>
        </div>
      </div>

      <div className="px-4 mt-8 space-y-10">

        {/* Section 1: Bento Grid - Must-Have Guides */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 px-1">
            <span>📦</span> {t('resources.section_guide')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            
            {/* Main Item - Large */}
            <div className="col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 text-white relative overflow-hidden group shadow-lg min-h-[180px] flex flex-col justify-between cursor-pointer hover:scale-[1.01] transition-transform">
               <div className="absolute right-0 bottom-0 text-9xl opacity-10 group-hover:opacity-20 transition-opacity">📖</div>
               <div>
                  <div className="bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded inline-block mb-2">PDF</div>
                  <h3 className="text-2xl font-bold leading-tight">{t('resources.guide_1_t')}</h3>
                  <p className="text-sm text-gray-400 mt-1">{t('resources.guide_1_d')}</p>
               </div>
               <div className="flex items-center gap-2 mt-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-brand-red transition-colors">
                     <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </div>
                  <span className="text-xs font-bold">{t('resources.download_btn')}</span>
               </div>
            </div>

            {/* Side Item 1 - Emergency Card */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="absolute -right-2 -top-2 w-16 h-16 bg-yellow-50 rounded-full z-0"></div>
               <div className="relative z-10">
                  <div className="text-3xl mb-2">📇</div>
                  <h3 className="font-bold text-gray-800 text-sm leading-tight">{t('resources.guide_2_t')}</h3>
                  <p className="text-[10px] text-gray-400 mt-1">{t('resources.guide_2_d')}</p>
               </div>
            </div>

            {/* Side Item 2 - Flowchart */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="absolute -right-2 -top-2 w-16 h-16 bg-blue-50 rounded-full z-0"></div>
               <div className="relative z-10">
                  <div className="text-3xl mb-2">🗺️</div>
                  <h3 className="font-bold text-gray-800 text-sm leading-tight">{t('resources.guide_3_t')}</h3>
                  <p className="text-[10px] text-gray-400 mt-1">{t('resources.guide_3_d')}</p>
               </div>
            </div>
          </div>
        </section>

        {/* Removed Section: Visual Learning (圖解領保) as requested */}

        {/* Section 4: External Portals - Pill Buttons */}
        <section className="pb-8">
           <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 px-1">
             <span>🔗</span> {t('resources.section_links')}
           </h2>
           <div className="flex flex-col gap-3">
              {links.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 bg-white px-4 py-4 rounded-xl border border-gray-200 shadow-sm hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                   <span className="text-xl shrink-0">{link.icon}</span>
                   <span className="text-sm font-bold flex-1">{link.label}</span>
                   <span className="text-gray-300 text-xs">↗</span>
                </a>
              ))}
           </div>
        </section>

      </div>
    </div>
  );
};

export default Resources;