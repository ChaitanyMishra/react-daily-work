import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <Header />
      <main className="flex-grow p-2 sm:p-4 md:p-8 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
