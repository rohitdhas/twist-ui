import React from 'react';
import { ButtonProps } from './Button.types';
import Spinner from '../Spinner';

const buttonStyles = {
  primary: {
    bg: 'bg-primary',
    hover: 'hover:bg-primary-dark',
    outline: 'border-primary',
    text: 'text-primary',
    ring: 'focus:outline-none focus:ring focus:ring-blue-300',
  },
  success: {
    bg: 'bg-success',
    hover: 'hover:bg-success-dark',
    outline: 'border-success',
    text: 'text-success',
    ring: 'focus:outline-none focus:ring focus:ring-green-300',
  },
  danger: {
    bg: 'bg-danger',
    hover: 'hover:bg-danger-dark',
    outline: 'border-danger',
    text: 'text-danger',
    ring: 'focus:outline-none focus:ring focus:ring-red-300',
  },
  warn: {
    bg: 'bg-alert',
    hover: 'hover:bg-alert-dark',
    outline: 'border-alert',
    text: 'text-alert',
    ring: 'focus:outline-none focus:ring focus:ring-yellow-500',
  },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { label, children, loading, varient, outlined, ...restProps } = props;
    const varientClasses = buttonStyles[varient!];

    if (loading) {
      return (
        <button
          disabled
          className="font-bold flex align items-center justify-center text-white px-4 py-2 rounded-md bg-muted transition-all cursor-not-allowed"
        >
          <Spinner />
          <span className="ml-2">{label}</span>
        </button>
      );
    }

    if (outlined) {
      return (
        <button
          ref={ref}
          className={`font-bold flex align items-center justify-center ${varientClasses.text} px-4 py-2 rounded-md border-2 ${varientClasses.outline} ${varientClasses.hover} ${varientClasses.ring} transition-all hover:text-white`}
          {...restProps}
        >
          {children || label || 'Click Me!'}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={`font-bold flex align items-center justify-center text-white px-4 py-2 rounded-md ${varientClasses.bg} ${varientClasses.hover} ${varientClasses.ring} transition-all`}
        {...restProps}
      >
        {children || label || 'Click Me!'}
      </button>
    );
  }
);

Button.displayName = 'Button';
Button.defaultProps = {
  varient: 'primary',
};

export default Button;
