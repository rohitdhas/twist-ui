import { ButtonHTMLAttributes } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type ButtonVariants = 'primary' | 'secondary';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: IconProp;
  varient?: ButtonVariants;
}

export type ButtonProps = Props;
