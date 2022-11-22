import React, { AllHTMLAttributes } from 'react';
import './Spinner.css';

type SpinnerVarients = 'default' | 'primary' | 'success' | 'danger' | 'warn';
interface Props extends AllHTMLAttributes<HTMLDivElement> {
  varient?: SpinnerVarients;
}

const Spinner: React.FC<Props> = React.memo(({ varient, ...rest }) => {
  return <div className={`spinner ${varient}`} {...rest}></div>;
});

export default Spinner;
