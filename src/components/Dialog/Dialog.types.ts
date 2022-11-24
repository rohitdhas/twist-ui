import { AllHTMLAttributes } from 'react';

export interface Props extends AllHTMLAttributes<HTMLDivElement> {
  header?: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export type DialogTypes = Props;
