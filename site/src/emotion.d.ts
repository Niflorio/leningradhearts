// src/emotion.d.ts
import '@emotion/react';
import { CSSProp } from '@emotion/react';

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}