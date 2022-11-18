import React from 'react';
import { SelectProps } from './Select.types';
import { v4 as uuidv4 } from 'uuid';
import './Select.css';

const Select: React.FC<SelectProps> = React.memo(props => {
  const { itemList, ...restProps } = props;
  const [val, setVal] = React.useState<string>('');

  return (
    <div className="custom-select">
      <select value={val} onChange={e => setVal(e.target.value)} {...restProps}>
        {itemList.map(item => {
          return (
            <option key={uuidv4()} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
});

Select.defaultProps = {
  itemList: [],
};

export default Select;
