import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export type TextareaTypes = Props;
