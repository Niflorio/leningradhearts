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
    }
    
    p {
      font-size: 1.2rem;
      color: ${colors.cold.secondary};
      margin-bottom: 20px;
      line-height: 1.8;
    }
  `;

  return (
    <section css={aboutStyle}>
      <div className="container about-content">
        <h2>О проекте</h2>
        <p>
          Этот сайт создан для распространения учебно-методических материалов,
          посвященных изучению исторических событий блокады Ленинграда.
        </p>
        <p>
          Наша цель - помочь педагогам передать подрастающему поколению 
          глубокое понимание исторических событий.
        </p>
      </div>
    </section>
  );
};

export default About;