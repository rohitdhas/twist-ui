import React from 'react';

type ButtonVariants = 'primary' | 'secondary';
interface Props {
  label: string;
  varient?: ButtonVariants;
}

const Button: React.FC<Props> = ({ label }) => {
  return <button>{label || 'Click Me!'}</button>;
};

export default Button;
