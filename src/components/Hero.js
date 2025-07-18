import React, { useEffect, useRef } from 'react';
import './Hero.css';

// Simple animated starfield
function Starfield() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = 400;
    let stars = Array.from({length: 120}, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.5,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2
    }));
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (let s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(127,92,255,0.7)';
        ctx.shadowColor = '#00ffe7';
        ctx.shadowBlur = 8;
        ctx.fill();
        s.x += s.dx; s.y += s.dy;
        if (s.x < 0) s.x = w; if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h; if (s.y > h) s.y = 0;
      }
      requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = 400;
    });
    return () => ctx && ctx.clearRect(0, 0, w, h);
  }, []);
  return <canvas ref={canvasRef} className="hero__starfield" />;
}

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Starfield />
      <div className="hero__content glass">
        <img src="/profile.jpg" alt="Khushi Kohli" className="hero__photo" />
        <h1 className="neon">Hi, I'm Khushi Kohli</h1>
        <h2 className="neon">Aspiring Frontend Developer</h2>
      </div>
    </section>
  );
};

export default Hero; 