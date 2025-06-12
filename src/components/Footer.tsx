// src/components/Footer.tsx
import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../styles/theme';

const Footer: React.FC = () => {
  const footerStyle = css`
    background-color: ${colors.cold.primary};
    color: ${colors.warm.accent};
    padding: 60px 0 30px;
    text-align: center;
    
    .footer-content {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .journal-title {
      font-size: 1.3rem;
      margin-bottom: 15px;
      color: white;
      opacity: 0.75;
    }
    
    .motto {
      font-size: 1.3rem;
      margin-bottom: 30px;
      color: ${colors.warm.light};
      opacity: 0.75;
    }
    
    .copyright {
      font-size: 0.9rem;
      color: ${colors.cold.light};
      border-top: 1px solid ${colors.cold.secondary};
      padding-top: 20px;
      margin-top: 30px;
      opacity: 0.75;
      font-style: italic;
    }
  `;

  return (
    <footer css={footerStyle}>
      <div className="container footer-content">
        <div className="journal-title">Неугасаемые сердца{'\n'}под{'\u00A0'}пылающим небом</div>
        <div className="motto">Искусство в тёмное время</div>
        <div className="copyright">
          © 2025 Распространяется по лицензии CC{'\u00A0'}BY-NC-SA{'\u00A0'}4.0
        </div>
      </div>
    </footer>
  );
};

export default Footer;