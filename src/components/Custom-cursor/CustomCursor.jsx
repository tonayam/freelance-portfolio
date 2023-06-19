import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import { gsap } from 'gsap';

const CustomCursor = forwardRef((props, ref) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;

    const moveCursor = (x, y) => {
      gsap.set(el, { x, y, duration: 0.2, ease: 'power3.out', delay: 0.2 });
    };

    const handleMouseMove = (e) => {
      const x = e.pageX;
      const y = e.pageY;
      moveCursor(x, y);
    };

    const handleMouseScroll = (e) => {
      const scrollY = window.scrollY;
      moveCursor(gsap.getProperty(el, 'x'), e.pageY + scrollY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('wheel', handleMouseScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('wheel', handleMouseScroll);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    moveTo(x, y) {
      const el = elRef.current;
      gsap.set(el, { x, y, duration: 0.2, ease: 'power3.out', delay: 0.2 });
    },
  }));

  return <div className='custom-cursor' ref={elRef} />;
});

export default CustomCursor;
