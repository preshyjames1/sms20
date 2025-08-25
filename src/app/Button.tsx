'use client';
import { motion } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors';
  const variantStyles =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-blue-700'
      : 'bg-secondary text-white hover:bg-gray-600';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;