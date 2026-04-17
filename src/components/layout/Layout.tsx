import { useState, type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-50 dark:bg-dark-950">
      <Navbar onMenuToggle={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

