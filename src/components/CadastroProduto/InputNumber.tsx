import React from 'react';

interface InputNumberProps {
  value: number;
  onChange: (value: number) => void;
  placeholder: string;
}

const InputNumber: React.FC<InputNumberProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder={placeholder}
      className="input p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
    />
  );
};

export default InputNumber;
