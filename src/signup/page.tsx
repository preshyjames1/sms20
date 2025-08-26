'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Input from '@/components/Input';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center mt-16"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSignup}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
            />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <Link href="/login" className="text-primary">
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}