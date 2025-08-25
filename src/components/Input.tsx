'use client';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className = '', ...props }: InputProps) => {
  return (
    <input
      className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      {...props}
    />
  );
};

export default Input;