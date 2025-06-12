// src/components/Author.tsx
/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import { colors } from '../styles/theme';

const Author: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const fullName = "Эдуард Предвестников";
  const pseudonym = "The Niflorio";
  
  // Анимация курсора
  const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  `;

  const authorStyle = css`
    padding: 150px 0;
    background: linear-gradient(
      to bottom, 
      ${colors.warm.light}, 
      ${colors.warm.accent}
    );
    text-align: center;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .author-content {
      position: relative;
    }
    
    h3 {
      font-size: 1.5rem;
      color: ${colors.warm.primary};
      margin-bottom: 30px;
      font-weight: 400;
      
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }
    
    .author-name {
      font-size: 2rem;
      color: ${colors.warm.dark};
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 700;
      min-height: 80px;
      position: relative;
      display: inline-block;
      letter-spacing: 0.1rem;
      
    }
    
    .cursor {
      display: inline-block;
      width: 3px;
      height: 1em;
      background-color: ${colors.warm.dark};
      margin-left: 4px;
      animation: ${blink} 1s infinite;
      vertical-align: middle;
    }
  `;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isTyping) {
            setIsTyping(true);
            typeWriter(fullName, 100, () => {
              setTimeout(() => {
                deleteText(80, () => {
                  setTimeout(() => {
                    typeWriter(pseudonym, 100);
                  }, 500);
                });
              }, 1500);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const typeWriter = (text: string, speed: number, onComplete?: () => void) => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setCurrentText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        if (onComplete) onComplete();
      }
    }, speed);
  };

  const deleteText = (speed: number, onComplete?: () => void) => {
    let text = currentText;
    const deletingInterval = setInterval(() => {
      if (text.length > 0) {
        text = text.substring(0, text.length - 1);
        setCurrentText(text);
      } else {
        clearInterval(deletingInterval);
        if (onComplete) onComplete();
      }
    }, speed);
  };

  return (
    <section ref={sectionRef} css={authorStyle}>
      <div className="container author-content">
        <h3>Создатель проекта и автор журнала</h3>
        <a href="https://t.me/niflorio"> 
          <div className="author-name">
            {currentText}
            <span className="cursor" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Author;