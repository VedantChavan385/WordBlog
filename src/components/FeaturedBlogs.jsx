import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const blogs = [
  {
    category: 'Travel',
    title: 'A Feast for the Senses in Kyoto',
    content:
      "My first sunrise in Kyoto wasn't a blaze of gold and red, but a gentle wash of lavender and soft gray, the kind of light that belongs in a watercolor painting. I came here not just for the temples and gardens, but for the quiet moments that connect you to history and to yourself. As a writer, I'm always searching for stories, and in Kyoto, every stone, every whisper of wind, seemed to hold one.",
    author: 'Sophia Rodriguez',
  },
  {
    category: 'Food',
    title: 'A Taste of Tradition in Bologna',
    content:
      "They say Bologna is the culinary heart of Italy, and after just a few hours here, I can taste why. My journey isn't just about eating; it's about following the flavors, understanding the history woven into every pasta strand and every simmering pot. As a chef, I'm always seeking the stories behind the food, and in this city, every meal is a chapter. My first pilgrimage was to the Quadrilatero, the ancient market district. It's a maze of narrow alleyways overflowing with the vibrant chaos of Italian food.",
    author: 'Marcus Chen',
  },
  {
    category: 'Fitness',
    title: 'Finding My Rhythm in the Swiss Alps',
    content:
      "I've always believed that true fitness isn't confined to a gym; it's about pushing your limits against the backdrop of the world. My trip to the Swiss Alps wasn't about finding a new workout routine, but about finding a new challenge that would reconnect my mind and body. And in this breathtaking landscape, I found a rhythm I never knew I was missing. My mornings began with a run along the trails surrounding Zermatt. The air was thin, crisp, and pure, carrying the scent of pine and fresh earth.",
    author: 'Chloe Davis',
  },
  {
    category: 'Education',
    title: null,
    content: 'Soon to get publish.',
    author: null,
  },
  {
    category: 'Finance',
    title: null,
    content: 'Soon to get publish.',
    author: null,
  },
];

function FeaturedBlogs() {
  const swiperRef = useRef(null);

  useEffect(() => {
    let swiperInstance = null;
    const frameId = requestAnimationFrame(() => {
      if (swiperRef.current) {
        swiperInstance = new Swiper(swiperRef.current, {
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 100,
        });
      }
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (swiperInstance) swiperInstance.destroy();
    };
  }, []);

  return (
    <div id="page4">
      <h1>Explore Our Featured Blogs by Famous Bloggers</h1>
      <div ref={swiperRef} className="swiper mySwiper">
        <div className="swiper-wrapper">
          {blogs.map((blog, index) => (
            <div key={index} className="swiper-slide">
              <b>{blog.category}</b>
              <br />
              <br />
              {blog.title && (
                <>
                  <b>{blog.title}</b>
                  <br />
                </>
              )}
              {blog.content}
              {blog.author && (
                <>
                  <br />
                  <br />
                  By Author: {blog.author}
                  <br />
                  <br />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedBlogs;
