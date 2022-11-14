import { ButtonHTMLAttributes } from 'react';

type ButtonVariants = 'primary' | 'success' | 'danger' | 'warn';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: ButtonVariants;
  label?: string;
  loading?: boolean;
  outlined?: boolean;
}

export type ButtonProps = Props;
