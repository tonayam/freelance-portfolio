import { gsap } from 'gsap';
import Splitting from 'splitting';

const godsEye = (item, options) => {
  return new Promise((reslove) => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reslove();
        }
      });
    }, options);
    observer.observe(item);
  });
};

const split = () => {
  // HEADINGS
  const headers = document.querySelectorAll(`[data-splitting="heading"]`);
  headers.forEach((item) => {
    Splitting({
      target: item,
      by: `chars`,
    });

    gsap.set(item.querySelectorAll('.char'), {
      opacity: 0,
      yPercent: 100,
      transformStyle: 'preserve-3d',
      overflow: `hidden`,
    });
    godsEye(item, {
      threshold: 1,
    }).then(() => {
      const elem = item.querySelectorAll('.char');
      gsap.to(elem, {
        opacity: 1,
        yPercent: 0,
        stagger: elem.length > 100 ? 0.01 : 0.02,
        duration: elem.length > 100 ? 0.5 : 0.6,
        ease: 'easeOut',
      });
    });
  });

  //   PARAGRAPHS
  const paragraphs = document.querySelectorAll(`[data-splitting="paragraph"]`);

  paragraphs.forEach((paragraph) => {
    const lines = Splitting({
      target: paragraph,
      by: `lines`,
    });
    console.log(lines[0].lines);
  });
};

export { split };
