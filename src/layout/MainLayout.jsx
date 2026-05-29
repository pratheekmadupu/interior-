import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { FloatingButtons } from '../components/FloatingButtons';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function MainLayout() {
  const scrollPct = useScrollProgress();

  return (
    <div className="relative min-h-screen flex flex-col justify-between select-none">
      {/* Texture grain overlay */}
      <div className="grain-overlay" />

      {/* Luxury Custom cursor */}
      <CustomCursor />

      {/* Top progress indicator bar */}
      <div className="fixed top-0 left-0 w-full h-[4px] z-[10000] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-gold via-primary to-gold transition-all duration-75 ease-out"
          style={{ width: `${scrollPct}%` }}
        />
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Floating Utility actions */}
      <FloatingButtons />

      {/* Render current route */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default MainLayout;
