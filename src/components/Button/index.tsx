import React from 'react';

type ButtonVariants = 'primary' | 'secondary';
interface Props {
  label: string;
  varient?: ButtonVariants;
}

const Button: React.FC<Props> = ({ label }) => {
  return (
    <button className="font-bold text-white px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-700 transition-all">
      {label || 'Click Me!'}
    </button>
  );
};

export default Button;
