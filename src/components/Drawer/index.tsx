import React from 'react';
import { DrawerTypes } from './Drawer.types';
import './Drawer.css';

const Drawer = React.forwardRef<HTMLDivElement, DrawerTypes>((props, ref) => {
  const { children, header, visible, setVisible, ...rest } = props;

  return (
    <div
      className={`twist-drawer shadow-2xl ${visible ? 'active' : ''}`}
      ref={ref}
      {...rest}
    >
      <div
        onClick={() => setVisible(false)}
        className="ml-auto text-xl cursor-pointer w-min px-2"
      >
        ❌
      </div>
      {header ? (
        <h2 className="text-xl font-bold text-text-color my-2">{header}</h2>
      ) : (
        <></>
      )}
      <div className="children-container">{children}</div>
    </div>
  );
});

export default Drawer;
