import React, { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  searchIcon?: boolean;
  ref: React.Ref<HTMLInputElement>;
}

export type InputTextTypes = Props;
