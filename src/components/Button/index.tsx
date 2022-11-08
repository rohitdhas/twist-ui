import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = React.memo(
  React.forwardRef((props, ref) => {
    const { label, ...restProps } = props;
    const elementRef = React.useRef(null);

    React.useImperativeHandle(ref, () => ({
      props,
      getElement: () => elementRef.current,
    }));

    return (
      <button
        ref={elementRef}
        className="font-bold text-white px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-700 transition-all"
        {...restProps}
      >
        {label || 'Click Me!'}
      </button>
    );
  })
);

export default Button;
