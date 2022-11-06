import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = props => {
  const { label, ...rest } = props;
  return (
    <button
      className="font-bold text-white px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-700 transition-all"
      {...rest}
    >
      {label || 'Click Me!'}
    </button>
  );
};

export default Button;
