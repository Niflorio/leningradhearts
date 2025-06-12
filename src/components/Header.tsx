// src/components/Header.tsx
import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../styles/theme';

const Header: React.FC = () => {
  const headerStyle = css`
    background-color: ${colors.warm.dark};
    padding: 20px 0;
    border-bottom: 2px solid ${colors.warm.primary};
    
    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${colors.warm.light};
      
      @media (max-width: 768px) {
        gap: 20px;
      }
    }
    
    .university-name {
      font-size: 1.2rem;
      color: ${colors.warm.light};
      letter-spacing: 1px;
      font-weight: 700;
      max-width: 600px;
      text-align: right;

      @media (max-width: 780px) {
         font-size: 0.7rem;
      }
    }

    .logo {
      /* Делаем логотип адаптивным */
      width: auto;
      transition: height 0.3s ease;
      
      img {
        width: auto;
        object-fit: contain;
        height: 6rem;
      }

    }
  `;

  return (
    <header css={headerStyle}>
      <div className="container header-content">
        <div className="logo">
          {/* Замените на ваш логотип */}
          <img src='./logo.svg'></img>
        </div>
        <div className="university-name">
          Российский{'\u00A0'}государственный педагогический{'\u00A0'}университет имени{'\u00A0'}А.И.{'\u00A0'}Герцена
        </div>
      </div>
    </header>
  );
};

export default Header;