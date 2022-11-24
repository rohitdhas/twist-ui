import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  searchIcon?: boolean;
  label?: string;
}

export type InputTextTypes = Props;
