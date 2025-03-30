import React from 'react';

interface InputTextProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const InputText: React.FC<InputTextProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="input p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
    />
  );
};

export default InputText;
