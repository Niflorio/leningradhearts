// src/components/Hero.tsx
import React from 'react';
import { css } from '@emotion/react';
import { colors} from '../styles/theme';

const Hero: React.FC = () => {
  const heroStyle = css`
    padding-top: 80px;
    position: relative;
    overflow: hidden;

    .text-content {
      flex: 1;
      padding-right: 40px;
      max-height: max-content;
      margin: 0 auto;
      padding: 0 50px;
      
      @media (max-width: 768px) { 
        margin-bottom: 40px;
        text-align: center;
      }
    }
    
    h1 {
      font-size: 3rem;
      color: ${colors.warm.dark};
      margin-bottom: 20px;
      line-height: 1.2;
      
      @media (max-width: 992px) {
        font-size: 1.8rem;
      }
    }
    
    .motto {
      font-size: 1.8rem;
      color: ${colors.warm.primary};
      margin-bottom: 30px;
      font-weight: 300;

      @media (max-width: 992px) {
        font-size: 1.2rem;
      }
    }
    
    .image-container {
      max-width: 1fn;
      flex: 1;
      display: flex;
      justify-content: center;
      
      img {
        max-width: 100%;
      }
    }
    

  `;

  return (
    <section css={heroStyle}>
      <div>
        <div className="container text-content">
          <h1>Неугасаемые сердца{'\n'}под{'\u00A0'}пылающим небом</h1>
          <p className="motto">Искусство в тёмное время</p>
        </div>
        <div className=" image-container">
          <img 
            src="back.png" 
            alt="Мокап журнала" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;