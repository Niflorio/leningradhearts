// src/components/Hero.tsx
import React from 'react';
import { css } from '@emotion/react';
import { colors, fonts } from '../styles/theme';

const Hero: React.FC = () => {
  const heroStyle = css`
    padding: 80px 0;
    position: relative;
    overflow: hidden;

    .hero-content {
      display: flex;
      align-items: center;
      min-height: 70vh;
      
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
    
    .text-content {
      flex: 1;
      padding-right: 40px;
      
      @media (max-width: 768px) {
        padding-right: 0;
        margin-bottom: 40px;
        text-align: center;
      }
    }
    
    h1 {
      font-size: 3.5rem;
      color: ${colors.warm.dark};
      margin-bottom: 20px;
      line-height: 1.2;
      
      @media (max-width: 992px) {
        font-size: 2.5rem;
      }
    }
    
    .motto {
      font-family: ${fonts.body};
      font-size: 1.8rem;
      color: ${colors.warm.primary};
      margin-bottom: 30px;
      font-weight: 300;
    }
    
    .image-container {
      flex: 1;
      display: flex;
      justify-content: center;
      
      img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        max-height: 500px;
        object-fit: cover;
      }
    }
    
    .divider {
      height: 100px;
      background: linear-gradient(
        to bottom, 
        ${colors.warm.background}, 
        ${colors.warm.light}
      );
      clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
    }
  `;

  return (
    <section css={heroStyle}>
      <div className="container hero-content">
        <div className="text-content">
          <h1>Неугасаемые сердца под пылающим небом</h1>
          <p className="motto">Искусство в тёмное время</p>
        </div>
        <div className="image-container">
          <img 
            src="/journal-mockup.jpg" 
            alt="Мокап журнала" 
          />
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
};

export default Hero;