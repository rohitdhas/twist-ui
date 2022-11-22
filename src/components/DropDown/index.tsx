import React from 'react';
import { DropDownProps } from './Dropdown.types';
import { v4 as uuidv4 } from 'uuid';

const Dropdown: React.FC<DropDownProps> = props => {
  const { itemList, defaultText, onSelect, value } = props;
  const [selectedValue, setSelectedValue] = React.useState<string>('');
  const [dropdownVisible, setDropdownVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    document.addEventListener('click', () => setDropdownVisible(false));

    return () =>
      document.removeEventListener('click', () => setDropdownVisible(false));
  }, []);

  React.useEffect(() => {
    if (onSelect && selectedValue) {
      onSelect(selectedValue);
    }
  }, [selectedValue]);

  return (
    <div
      onClick={e => e.stopPropagation()}
      className="twist-select relative transition-all w-full"
    >
      <div
        onClick={() => setDropdownVisible(!dropdownVisible)}
        className="bg-white px-4 py-2 border-2 border-gray-200 rounded-md text-left text-text-color cursor-pointer hover:border-primary flex justify-between"
      >
        <span>{value || selectedValue || defaultText || 'Select Option'}</span>
        <span className="ml-2 text-gray-400">
          {dropdownVisible ? '▲' : '▼'}
        </span>
      </div>
      {dropdownVisible ? (
        <ul className="absolute bg-white border-2 border-gray-200 rounded-md mt-1 w-full">
          {itemList.map(item => {
            return (
              <li
                className="px-2 py-2 rounded-sm hover:bg-gray-100 m-1"
                key={uuidv4()}
                onClick={() => {
                  setSelectedValue(item);
                  setDropdownVisible(false);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropdown;
