import { AllHTMLAttributes } from 'react';

type Positions = 'left' | 'right' | 'top' | 'bottom';

export interface Props extends AllHTMLAttributes<HTMLDivElement> {
  postion?: Positions;
  content: string;
}

export type TooltipProps = Props;
