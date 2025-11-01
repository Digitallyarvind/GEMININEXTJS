import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import AffordableSeoPage from './components/AffordableSeoPage'; // Import the new page
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const renderPage = useCallback(() => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'Services':
        return <ServicesPage />;
      case 'Services/SEO': // Add case for the new page
        return <AffordableSeoPage />;
      case 'Blog':
        return <BlogPage />;
      case 'Contact':
        return <ContactPage />;
      case 'AI Solutions':
      case 'Industry':
      case 'Training':
        // Fallback for new pages that don't have a dedicated component yet
        return <HomePage />;
      default:
        return <HomePage />;
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow pt-20"> {/* Add padding-top to account for sticky header */}
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;