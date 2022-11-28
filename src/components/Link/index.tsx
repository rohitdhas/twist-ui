import React from 'react';
import { LinkTypes } from './Link.types';

const Link: React.FC<LinkTypes> = props => {
  return (
    <a
      className="font-bold text-primary hover:underline hover:text-primary-dark"
      {...props}
    >
      {props.children}
    </a>
  );
};

export default Link;
