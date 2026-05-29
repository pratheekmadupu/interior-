import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { Portfolio } from '../pages/Portfolio';
import { ProjectDetails } from '../pages/ProjectDetails';
import { Testimonials } from '../pages/Testimonials';
import { FAQ } from '../pages/FAQ';
import { Contact } from '../pages/Contact';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectId" element={<ProjectDetails />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;
