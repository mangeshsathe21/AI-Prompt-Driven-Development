import { useState, useEffect } from 'react';

/**
 * useFadeIn – returns true once the referenced element enters the viewport.
 * Uses IntersectionObserver so components fade in on scroll.
 *
 * @param {React.RefObject} ref – attach to the element you want to observe
 * @param {number} threshold   – fraction of element visible before triggering (default 0.15)
 */
export default function useFadeIn(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // fire only once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return visible;
}
