import React from 'react';
import { InputTextTypes } from './InputText.types';

const InputText: React.FC<InputTextTypes> = props => {
  const { searchIcon, ...rest } = props;
  return (
    <form className="group relative">
      {searchIcon ? (
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500 text-gray-500"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
      ) : (
        <></>
      )}
      <input
        className={`focus:ring-4 transition-all focus:ring-primary focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 ring-2 ring-gray-300 shadow-sm ${
          searchIcon ? 'pl-10' : 'px-4'
        }`}
        type="text"
        aria-label="input-text"
        {...rest}
      />
    </form>
  );
};

export default InputText;
