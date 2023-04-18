import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import './Marquee.css'

const Marquee = () => {

    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        const container = element.parentElement;
        const elementWidth = element.offsetWidth;
        const containerWidth = container.offsetWidth;
        const repeatTextCount = Math.ceil(containerWidth / elementWidth) + 5;
        const repeatedText = element.textContent.repeat(repeatTextCount);
        element.textContent = repeatedText;
        const distance = -elementWidth * repeatTextCount;
        const duration = 150;
        const tween = gsap.to(element, {
          x: distance,
          duration: duration,
          ease: 'none',
          repeat: -2,
          paused: true,
        });
    
        const playAnimation = () => tween.play();
    
        playAnimation();
      }, []);
    


  return (
    <section id="marquee" className='my-32'>
        <div className="bg-purple-950 py-3">
            <div className="overflow-hidden">
                <h1 className='text-xl md:text-7xl' ref={elementRef}>
                    LANDOGZ WEB SOLUTION &nbsp; ━ &nbsp;
                </h1>
            </div>
        </div>
    </section>
  )
}

export default Marquee