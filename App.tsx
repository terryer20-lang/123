import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Challenge from './pages/Challenge';
import SafetyIndex from './pages/SafetyIndex';
import Emergency from './pages/Emergency';
import Multimedia from './pages/Multimedia';
import Protection from './pages/Protection';
import { LanguageProvider, useLanguage } from './LanguageContext';

// Placeholder components for routes not fully detailed in requirement
const PlaceholderPage = ({ titleKey }: { titleKey: string }) => {
  const { t } = useLanguage();
  return (
    <div className="p-8 text-center text-gray-500 pt-24">
      <h1 className="text-2xl font-bold mb-4">{t(titleKey)}</h1>
      <p>{t('app.placeholder')}</p>
      <div className="mt-8 text-6xl">{t('app.construction')}</div>
    </div>
  );
};

const AppRoutes = () => {
   return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/safety-index" element={<SafetyIndex />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/protection" element={<Protection />} />
          
          <Route path="/prepare" element={<PlaceholderPage titleKey="menu.going-abroad" />} />
          <Route path="/help" element={<PlaceholderPage titleKey="menu.overseas-help" />} />
          <Route path="/rights" element={<PlaceholderPage titleKey="menu.resident-rights" />} />
          <Route path="/events" element={<PlaceholderPage titleKey="menu.events" />} />
          <Route path="/resources" element={<PlaceholderPage titleKey="menu.resources" />} />
          <Route path="/contact" element={<PlaceholderPage titleKey="menu.contact" />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
   )
}

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;