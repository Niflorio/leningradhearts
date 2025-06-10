// src/styles/globalStyles.ts
import { css } from '@emotion/react';
import { colors, fonts } from './theme';

export const globalStyles = css`
  @import './fonts.css';
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${fonts.body};
    color: ${colors.cold.primary};
    background-color: ${colors.warm.background};
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4 {
    font-family: ${fonts.heading};
    font-weight: normal;
    letter-spacing: 0.5px;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;