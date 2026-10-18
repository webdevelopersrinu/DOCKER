import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Rooms from './pages/Rooms.jsx';
import RoomsSingle from './pages/RoomsSingle.jsx';
import Restaurant from './pages/Restaurant.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import BlogSingle from './pages/BlogSingle.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // re-run the template's jQuery init (carousels, waypoints, parallax...) on each route change
  useEffect(() => {
    window.scrollTo(0, 0);
    window.initTemplate?.();
  }, [location.pathname]);

  // pages are converted template HTML with plain <a href="/..."> links;
  // intercept clicks so navigation stays client-side
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (href && href.startsWith('/') && !e.ctrlKey && !e.metaKey && a.target !== '_blank') {
        e.preventDefault();
        navigate(href);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms-single" element={<RoomsSingle />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-single" element={<BlogSingle />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
