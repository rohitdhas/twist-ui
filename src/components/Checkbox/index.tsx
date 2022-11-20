import React from 'react';
import { CheckboxProps } from './Checkbox.types';
import { v4 as uuidv4 } from 'uuid';

const Checkbox: React.FC<CheckboxProps> = React.memo(props => {
  const { itemList, onSelect, values } = props;
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (onSelect && selectedValues) {
      onSelect(selectedValues);
    }
  }, [selectedValues]);

  return (
    <div className="twist-select-group">
      {itemList.map(item => {
        const selected =
          (values && values.includes(item)) ||
          (!values && selectedValues.includes(item));
        return (
          <div className="group">
            <div
              key={uuidv4()}
              onClick={() => {
                if (selected) {
                  setSelectedValues(selectedValues.filter(val => val !== item));
                } else {
                  setSelectedValues([...selectedValues, item]);
                }
              }}
              className="my-2 group-hover:text-primary transition-colors cursor-pointer flex align items-center"
            >
              <span
                className={`block w-5 h-5 rounded-sm border-2 border-gray-300 group-hover:border-primary ${
                  selected ? 'bg-primary' : ''
                }`}
              ></span>
              <span className="mx-2">{item}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
});

Checkbox.defaultProps = {
  itemList: [],
};

export default Checkbox;
