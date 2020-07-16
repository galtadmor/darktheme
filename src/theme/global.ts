import { createGlobalStyle } from 'styled-components';
import * as _ from 'lodash';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => _.get(theme, 'body')};
    color: ${({ theme }) => _.get(theme, 'text')};
    font-family: Arial, sans-serif;
    transition: all 0.2s ease-in-out;
  }
`;
