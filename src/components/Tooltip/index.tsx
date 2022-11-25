import React, { useState } from 'react';
import { TooltipProps } from './Tooltip.types';
import './Tooltip.css';

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const [active, setActive] = useState(false);

  const showTip = () => {
    setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div ref={ref} className={`tooltip-tip ${props.postion || 'top'}`}>
          {props.content}
        </div>
      )}
    </div>
  );
});

export default Tooltip;
