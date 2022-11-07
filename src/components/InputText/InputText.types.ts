import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  searchIcon?: boolean;
}

export type InputTextTypes = Props;
