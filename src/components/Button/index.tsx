import React from 'react';
import { ButtonProps } from './Button.types';
import Spinner from '../Spinner';

const buttonStyles = {
  primary: {
    bg: 'bg-primary',
    hover: 'bg-primary-dark',
  },
  success: {
    bg: 'bg-success',
    hover: 'bg-success-dark',
  },
  danger: {
    bg: 'bg-danger',
    hover: 'bg-danger-dark',
  },
  warn: {
    bg: 'bg-alert',
    hover: 'bg-alert-dark',
  },
};

const Button: React.FC<ButtonProps> = React.memo(
  React.forwardRef((props, ref) => {
    const { label, children, loading, varient, ...restProps } = props;
    const elementRef = React.useRef(null);

    React.useImperativeHandle(ref, () => ({
      props,
      getElement: () => elementRef.current,
    }));

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

    return (
      <button
        ref={elementRef}
        className={`font-bold flex align items-center justify-center text-white px-4 py-2 rounded-md ${
          buttonStyles[varient!].bg
        } hover:${buttonStyles[varient!].hover} transition-all`}
        {...restProps}
      >
        {children || label || 'Click Me!'}
      </button>
    );
  })
);

Button.defaultProps = {
  varient: 'primary',
};

export default Button;
