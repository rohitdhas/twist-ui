import { ButtonHTMLAttributes } from 'react';

type ButtonVariants = 'primary' | 'secondary';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  varient?: ButtonVariants;
}

export type ButtonProps = Props;
