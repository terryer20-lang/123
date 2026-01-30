import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Challenge from './pages/Challenge';
import SafetyIndex from './pages/SafetyIndex';
import Emergency from './pages/Emergency';
import Protection from './pages/Protection';
import Rights from './pages/Rights';
import Help from './pages/Help';
import Prepare from './pages/Prepare';
import Events from './pages/Events';
import Resources from './pages/Resources';
import NotificationDetail from './pages/NotificationDetail';
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

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
   return (
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/safety-index" element={<SafetyIndex />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/protection" element={<Protection />} />
          <Route path="/rights" element={<Rights />} />
          <Route path="/help" element={<Help />} />
          <Route path="/prepare" element={<Prepare />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          
          <Route path="/notification/:id" element={<NotificationDetail />} />
          
          <Route path="/past-notifications" element={<PlaceholderPage titleKey="menu.past-notifications" />} />
          <Route path="/graphics" element={<PlaceholderPage titleKey="menu.graphics" />} />
          <Route path="/hot-knowledge" element={<PlaceholderPage titleKey="menu.hot-knowledge" />} />
          
          <Route path="/contact" element={<PlaceholderPage titleKey="menu.contact" />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
   )
}

const App = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;