import React from 'react';
import { CardTypes } from './Card.types';

const Card = React.forwardRef<HTMLDivElement, CardTypes>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <div className="rounded-md shadow-md p-6" ref={ref} {...rest}>
      {children}
    </div>
  );
});

export default Card;
