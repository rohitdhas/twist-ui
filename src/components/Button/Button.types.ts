import { ButtonHTMLAttributes } from 'react';
import { MotionProps } from 'framer-motion';

type ButtonVariants = 'primary' | 'secondary';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  varient?: ButtonVariants;
}

export type ButtonProps = Props & MotionProps;
