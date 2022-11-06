import React from 'react';
import { motion } from 'framer-motion';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = props => {
  const { label, ...rest } = props;
  return (
    <motion.button
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      exit={{ x: -100 }}
      className="font-bold text-white px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-700 transition-all"
      {...rest}
    >
      {label || 'Click Me!'}
    </motion.button>
  );
};

export default Button;
