import React from 'react';
import { AlertTypes } from './Alert.types';

const alertStyles = {
  info: {
    bg: 'bg-primary-light',
    text: 'text-primary-dark',
    icon: 'âšī¸',
  },
  success: {
    bg: 'bg-success-light',
    text: 'text-success-dark',
    icon: 'â',
  },
  danger: {
    bg: 'bg-danger-light',
    text: 'text-danger-dark',
    icon: 'đŠ',
  },
  warn: {
    bg: 'bg-alert-light',
    text: 'text-alert-dark',
    icon: 'â ī¸',
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
            â
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
});

export default Alert;
