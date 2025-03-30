import React from 'react';

interface TextAreaProps {
  value: string
  onChange: (value: string) => void;
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="textarea p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
    />
  );
};

export default TextArea;
