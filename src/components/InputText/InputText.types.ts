import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  searchIcon?: boolean;
}

export type InputTextTypes = Props;
