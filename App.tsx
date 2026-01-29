import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Challenge from './pages/Challenge';
import SafetyIndex from './pages/SafetyIndex';
import Emergency from './pages/Emergency';
import Multimedia from './pages/Multimedia';

// Placeholder components for routes not fully detailed in requirement
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="p-8 text-center text-gray-500">
    <h1 className="text-2xl font-bold mb-4">{title}</h1>
    <p>内容建设中...</p>
    <div className="mt-8 text-6xl">🚧</div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/safety-index" element={<SafetyIndex />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/multimedia" element={<Multimedia />} />
          
          {/* Routes for other menu items using placeholders */}
          <Route path="/prepare" element={<PlaceholderPage title="我即将出国" />} />
          <Route path="/help" element={<PlaceholderPage title="我在海外遇到困难" />} />
          <Route path="/protection" element={<PlaceholderPage title="领事保护与协助" />} />
          <Route path="/rights" element={<PlaceholderPage title="居民身份权利" />} />
          <Route path="/events" element={<PlaceholderPage title="活动日程" />} />
          <Route path="/resources" element={<PlaceholderPage title="资源专区" />} />
          <Route path="/contact" element={<PlaceholderPage title="联络我们" />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;