import React from 'react';
import { DialogTypes } from './Dialog.types';
import './Dialog.css';

const Dialog = React.forwardRef<HTMLDivElement, DialogTypes>((props, ref) => {
  const { children, visible, header, setVisible, ...rest } = props;

  return (
    <div
      className={`twist-dialog ${visible ? 'active' : ''}`}
      ref={ref}
      onClick={() => setVisible(false)}
      {...rest}
    >
      <div onClick={e => e.stopPropagation()} className="twist-dialog-box">
        <div className="flex justify-between mb-4 mt-2">
          {header ? (
            <h3 className="text-text-color text-xl font-bold">{header}</h3>
          ) : (
            <></>
          )}
          <div
            onClick={() => setVisible(false)}
            className="ml-auto cursor-pointer w-min px-2"
          >
            ❌
          </div>
        </div>
        <div className="children-container">{children}</div>
      </div>
    </div>
  );
});

export default Dialog;
