import React from 'react';
import { ButtonProps } from './Button.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button: React.FC<ButtonProps> = React.memo(
  React.forwardRef((props, ref) => {
    const { label, icon, ...restProps } = props;
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
        {icon ? <FontAwesomeIcon className="mr-2" icon={icon} /> : <></>}
        {label || 'Click Me!'}
      </button>
    );
  })
);

export default Button;
