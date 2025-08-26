'use client';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-16"
      >
        <h1 className="text-5xl font-bold text-primary mb-4">
          SchoolManagementSystem.com
        </h1>
        <p className="text-xl text-secondary mb-8">
          Streamline your school operations with our powerful platform
        </p>
        <Link href="/signup">
          <Button className="bg-primary text-white px-6 py-3 rounded-lg">
            Get Started
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}