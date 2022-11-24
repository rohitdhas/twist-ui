import React from 'react';
import { AlertTypes } from './Alert.types';

const alertStyles = {
  info: {
    bg: 'bg-primary-light',
    text: 'text-primary-dark',
    icon: 'ℹ️',
  },
  success: {
    bg: 'bg-success-light',
    text: 'text-success-dark',
    icon: '✅',
  },
  danger: {
    bg: 'bg-danger-light',
    text: 'text-danger-dark',
    icon: '🚩',
  },
  warn: {
    bg: 'bg-alert-light',
    text: 'text-alert-dark',
    icon: '⚠️',
  },
};

const Alert = React.forwardRef<HTMLDivElement, AlertTypes>((props, ref) => {
  const { message, varient, closeIcon, ...rest } = props;
  const varientStyles = alertStyles[varient || 'success'];
  const [visible, setVisible] = React.useState<boolean>(true);

  return (
    <div
      className={`rounded-md shadow-sm p-4 flex justify-between align item-center ${
        varientStyles.bg
      } ${visible ? 'block' : 'hidden'}`}
      ref={ref}
      {...rest}
    >
      <div className="flex align items-center">
        <span className="mx-2 text-2xl">{varientStyles.icon}</span>
        <span className={varientStyles.text}>{message}</span>
      </div>
      {closeIcon ? (
        <div className="flex align items-center">
          <span
            onClick={() => setVisible(false)}
            className="cursor-pointer mx-2"
          >
            ❌
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
});

export default Alert;
