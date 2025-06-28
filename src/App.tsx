import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Socials from './pages/Socials';
import LinkInBio from './pages/LinkInBio';
import Leads from './pages/Leads';
import LinkShortener from './pages/LinkShortener';
import Referrals from './pages/Referrals';
import Settings from './pages/Settings';
import Contact from './pages/Contact';
import WebsiteBuilder from './pages/WebsiteBuilder';
import Users from './pages/Users';
import FormTemplates from './pages/FormTemplates';
import DiscountCodes from './pages/DiscountCodes';
import Finance from './pages/Finance';
import Courses from './pages/Courses';
import Marketplace from './pages/Marketplace';
import Templates from './pages/Templates';
import Escrow from './pages/Escrow';
import Analytics from './pages/Analytics';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/link-in-bio" element={<LinkInBio />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/link-shortener" element={<LinkShortener />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/website-builder" element={<WebsiteBuilder />} />
          <Route path="/users" element={<Users />} />
          <Route path="/form-templates" element={<FormTemplates />} />
          <Route path="/discount-codes" element={<DiscountCodes />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/escrow" element={<Escrow />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;