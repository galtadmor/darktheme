import React from 'react';
import styled from 'styled-components';

import { Style } from 'theme';

interface Props {
  children: React.ReactNode;
  onClick: Function;
}

const CustomButton = styled.button<Style>`
  min-width: 96px;
  min-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background: #6454f7;
  font-size: 1em;
  line-height: 1;
  font-weight: bold;
  color: ${props => props.theme.text};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #6231de;
  }
  span[role='img'] {
    margin-right: 4px;
  }
`;

export const Button: React.FC<Props> = (props: Props) => {
  const { children, onClick } = props;
  return (
    <CustomButton onClick={onClick}>
      {children}
    </CustomButton>
  );
}