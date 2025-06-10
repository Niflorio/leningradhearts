// src/components/Author.tsx
import React, { useEffect, useRef } from 'react';
import { css, keyframes } from '@emotion/react';
import { colors } from '../styles/theme';

const Author: React.FC = () => {
  const nameRef = useRef<HTMLDivElement>(null);
  
  // Анимация для имени
  const fadeIn = keyframes`
    0% { 
      opacity: 0; 
      transform: translateY(20px); 
    }
    100% { 
      opacity: 1; 
      transform: translateY(0); 
    }
  `;

  const authorStyle = css`
    padding: 150px 0;
    background: linear-gradient(
      to bottom, 
      ${colors.warm.light}, 
      ${colors.warm.accent}
    );
    text-align: center;
    
    .author-content {
      position: relative;
    }
    
    h3 {
      font-size: 1.8rem;
      color: ${colors.warm.primary};
      margin-bottom: 20px;
    }
    
    .author-name {
      font-size: 4rem;
      color: ${colors.warm.dark};
      text-transform: uppercase;
      letter-spacing: 3px;
      opacity: 0;
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
  `;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && nameRef.current) {
            nameRef.current.style.animation = `${fadeIn} 1.5s forwards`;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (nameRef.current) {
      observer.observe(nameRef.current);
    }

    return () => {
      if (nameRef.current) {
        observer.unobserve(nameRef.current);
      }
    };
  }, []);

  return (
    <section css={authorStyle}>
      <div className="container author-content">
        <h3>Автор проекта и создатель журнала</h3>
        <div 
          ref={nameRef} 
          className="author-name"
        >
          Эдуард Предвестников
        </div>
      </div>
    </section>
  );
};

export default Author;