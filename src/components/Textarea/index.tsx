import React from 'react';
import { TextareaTypes } from './Textarea.types';

const Textarea: React.FC<TextareaTypes> = props => {
  const { ...rest } = props;
  return (
    <form className="group relative">
      <textarea
        className={`focus:ring-4 transition-all focus:ring-primary focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 ring-2 ring-gray-300 shadow-sm p-4`}
        type="text"
        aria-label="text-area"
        {...rest}
      />
    </form>
  );
};

export default Textarea;
