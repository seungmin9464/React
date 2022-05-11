import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`
    @media (max-width: 576px) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 992px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)}
    }
  `,
  pc: (...args) => css`
    @media (max-width: 1400px) {
      ${css(...args)}
    }
  `,
};
