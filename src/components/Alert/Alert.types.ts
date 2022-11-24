import { AllHTMLAttributes } from 'react';

type AlertVariants = 'info' | 'success' | 'danger' | 'warn';

export interface Props extends AllHTMLAttributes<HTMLDivElement> {
  message: string;
  varient?: AlertVariants;
  closeIcon?: boolean;
}

export type AlertTypes = Props;
