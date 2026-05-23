import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const updateCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', updateCursor);

    // Hide cursor when leaving window
    const hideCursor = () => {
      cursor.style.opacity = '0';
    };

    const showCursor = () => {
      cursor.style.opacity = '1';
    };

    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', showCursor);

    // Hide cursor on scroll
    window.addEventListener('scroll', hideCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', showCursor);
      window.removeEventListener('scroll', hideCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CustomCursor;