import React from 'react';
import styled from 'styled-components';

type ButtonVariants = 'primary' | 'secondary';
interface Props {
  label: string;
  varient?: ButtonVariants;
}

const StyledButton = styled.button.attrs(({}: { variant: ButtonVariants }) => ({
  className: 'font-bold text-white bg-purple-500 px-3 py-2 rounded-md',
}))<{ variant: ButtonVariants }>``;

const Button: React.FC<Props> = ({ label }) => {
  return <StyledButton variant="primary">{label || 'Click Me!'}</StyledButton>;
};

export default Button;
