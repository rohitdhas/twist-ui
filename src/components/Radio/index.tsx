import React from 'react';
import { RadioProps } from './Radio.types';
import { v4 as uuidv4 } from 'uuid';

const Radio: React.FC<RadioProps> = React.memo(props => {
  const { itemList, onSelect, value } = props;
  const [selectedValue, setSelectedValue] = React.useState<string>('');

  React.useEffect(() => {
    if (onSelect && selectedValue) {
      onSelect(selectedValue);
    }
  }, [selectedValue]);

  return (
    <div className="twist-radio-group">
      {itemList.map(item => {
        const selected =
          (value && item === value) || (!value && selectedValue === item);
        return (
          <div className="group">
            <div
              key={uuidv4()}
              onClick={() => setSelectedValue(item)}
              className="my-2 group-hover:text-primary transition-colors cursor-pointer flex align items-center"
            >
              <span
                className={`block w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-primary ${
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

Radio.defaultProps = {
  itemList: [],
};

export default Radio;
