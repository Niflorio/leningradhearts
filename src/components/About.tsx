// src/components/About.tsx
import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../styles/theme';

const About: React.FC = () => {
  const aboutStyle = css`
    padding: 100px 0;
    background-color: ${colors.warm.light};
    
    .about-content {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
    
    h2 {
      font-size: 2.5rem;
      color: ${colors.warm.dark};
      margin-bottom: 30px;

      @media (max-width: 992px) {
        font-size: 1.8rem;
      }
    }
    
    p {
      font-size: 1.2rem;
      color: ${colors.cold.secondary};
      margin-bottom: 20px;
      line-height: 1.8;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  `;

  return (
    <section css={aboutStyle}>
      <div className="container about-content">
        <h2>О проекте</h2>
        <p>
          Этот сайт создан для{'\u00A0'}распространения учебно-методических материалов,
          посвященных изучению исторических событий блокады Ленинграда.
        </p>
        <p>
          Цель проекта — Воспитание ценностного отношения к{'\u00A0'}историческому наследию Великой{'\u00A0'}Отечественной{'\u00A0'}войны.
        </p>
      </div>
    </section>
  );
};

export default About;