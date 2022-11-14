import React from 'react';
import { ButtonProps } from './Button.types';
import Spinner from '../Spinner';

const buttonStyles = {
  primary: {
    bg: 'bg-primary',
    hover: 'hover:bg-primary-dark',
    outline: 'border-primary',
    text: 'text-primary',
  },
  success: {
    bg: 'bg-success',
    hover: 'hover:bg-success-dark',
    outline: 'border-success',
    text: 'text-success',
  },
  danger: {
    bg: 'bg-danger',
    hover: 'hover:bg-danger-dark',
    outline: 'border-danger',
    text: 'text-danger',
  },
  warn: {
    bg: 'bg-alert',
    hover: 'hover:bg-alert-dark',
    outline: 'border-alert',
    text: 'text-alert',
  },
};

const Button: React.FC<ButtonProps> = React.memo(
  React.forwardRef((props, ref) => {
    const { label, children, loading, varient, outlined, ...restProps } = props;
    const elementRef = React.useRef(null);
    const varientClasses = buttonStyles[varient!];

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

    if (outlined) {
      return (
        <button
          ref={elementRef}
          className={`font-bold flex align items-center justify-center ${varientClasses.text} px-4 py-2 rounded-md border-2 ${varientClasses.outline} ${varientClasses.hover} transition-all hover:text-white`}
          {...restProps}
        >
          {children || label || 'Click Me!'}
        </button>
      );
    }

    return (
      <button
        ref={elementRef}
        className={`font-bold flex align items-center justify-center text-white px-4 py-2 rounded-md ${varientClasses.bg} ${varientClasses.hover} transition-all`}
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
