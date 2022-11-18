import { SelectHTMLAttributes } from 'react';

export interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  itemList: string[];
}

export type SelectProps = Props;
