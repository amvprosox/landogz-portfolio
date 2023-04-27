import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Transition } from '@barba/core';

const BarbaWrapper = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const transition = {
      name: 'fade-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.5,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          duration: 0.5,
        });
      },
    };

    Transition.register(transition);

    return () => {
      Transition.unregister(transition);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default BarbaWrapper;
