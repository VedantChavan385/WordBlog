import { useState, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Categories from './components/Categories';
import FeaturedBlogs from './components/FeaturedBlogs';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fixedImage, setFixedImage] = useState({ visible: false, url: '' });
  const mainRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: mainRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Loader />

      <div
        id="fixed-image"
        style={{
          display: fixedImage.visible ? 'block' : 'none',
          backgroundImage: fixedImage.url ? `url(${fixedImage.url})` : 'none',
        }}
      />

      <div id="main" ref={mainRef}>
        <div id="page1">
          <Navbar onMenuToggle={handleMenuToggle} menuOpen={menuOpen} />
          <Hero />
        </div>

        <div id="page2">
          <Marquee />
          <About />
        </div>

        <Categories onImageChange={setFixedImage} />

        <FeaturedBlogs />

        <div id="page5"></div>

        <MobileMenu isOpen={menuOpen} />
      </div>

      <Footer />
    </>
  );
}

export default App;
