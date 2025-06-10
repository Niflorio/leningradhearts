// src/components/Downloads.tsx
import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../styles/theme';

const Downloads: React.FC = () => {
  const downloadsStyle = css`
    padding: 100px 0;
    text-align: center;
    background-color: ${colors.warm.background};
    
    h2 {
      font-size: 2.5rem;
      color: ${colors.warm.dark};
      margin-bottom: 50px;
    }
    
    .download-cards {
      display: flex;
      justify-content: center;
      gap: 40px;
      flex-wrap: wrap;
      
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }
    }
    
    .card {
      background-color: white;
      border-radius: 10px;
      padding: 30px;
      width: 300px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 30px rgba(0,0,0,0.15);
      }
    }
    
    .card-title {
      font-size: 1.5rem;
      color: ${colors.warm.primary};
      margin-bottom: 20px;
    }
    
    .card-description {
      color: ${colors.cold.secondary};
      margin-bottom: 25px;
      min-height: 80px;
    }
    
    .download-btn {
      display: inline-block;
      background-color: ${colors.warm.primary};
      color: white;
      padding: 12px 30px;
      border-radius: 30px;
      text-decoration: none;
      font-size: 1.1rem;
      transition: background-color 0.3s ease;
      
      &:hover {
        background-color: ${colors.warm.dark};
      }
    }
  `;

  return (
    <section css={downloadsStyle}>
      <div className="container">
        <h2>Материалы для скачивания</h2>
        <div className="download-cards">
          <div className="card">
            <h3 className="card-title">Журнал</h3>
            <p className="card-description">
              Основное издание "Неугасаемые сердца под пылающим небом"
            </p>
            <a 
              href="/journal.pdf" 
              download 
              className="download-btn"
            >
              Скачать журнал
            </a>
          </div>
          
          <div className="card">
            <h3 className="card-title">Методическое пособие</h3>
            <p className="card-description">
              Учебно-методические материалы для педагогов
            </p>
            <a 
              href="/manual.pdf" 
              download 
              className="download-btn"
            >
              Скачать пособие
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;