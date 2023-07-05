import React from 'react';

type ButtonProps = {
  text: string;
  size?: 'big' | 'medium';
};

const Button = ({ text, size = 'big' }: ButtonProps) => (
  <button
    className={`bg-gradient-to-r from-accent-100 to-accent-200  py-5 rounded-full font-extrabold ${
      size === 'big' ? 'w-72' : 'w-60'
    }`}
    type="button"
  >
    {text}
  </button>
);

export default Button;
