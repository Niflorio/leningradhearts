// src/components/Header.tsx
import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../styles/theme';

const Header: React.FC = () => {
  const headerStyle = css`
    background-color: ${colors.warm.background};
    padding: 20px 0;
    border-bottom: 2px solid ${colors.warm.primary};
    
    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 10px;
      }
    }
    
    .university-name {
      font-size: 1.2rem;
      color: ${colors.cold.secondary};
      letter-spacing: 1px;
      font-weight: 700;
    }
  `;

  return (
    <header css={headerStyle}>
      <div className="container header-content">
        <div className="logo">
          {/* Замените на ваш логотип */}
          <span>ЛОГОТИП ВУЗА</span>
        </div>
        <div className="university-name">
          НАЗВАНИЕ ВАШЕГО ВУЗА
        </div>
      </div>
    </header>
  );
};

export default Header;