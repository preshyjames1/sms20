'use client';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';

const menuItems = [
  { path: '/dashboard/[schoolId]', label: 'Dashboard' },
  { path: '/dashboard/[schoolId]/users', label: 'User Management' },
  { path: '/dashboard/[schoolId]/students', label: 'Student Management' },
  { path: '/dashboard/[schoolId]/classes', label: 'Class Management' },
  { path: '/dashboard/[schoolId]/timetables', label: 'Timetable Management' },
  { path: '/dashboard/[schoolId]/subjects', label: 'Subject Management' },
  { path: '/dashboard/[schoolId]/exams', label: 'Exam Scheduling' },
  { path: '/dashboard/[schoolId]/grades', label: 'Grade Management' },
  { path: '/dashboard/[schoolId]/calendar', label: 'Academic Calendar' },
  { path: '/dashboard/[schoolId]/cbt', label: 'CBT Platform' },
];

export default function Sidebar() {
  const { schoolId } = useAuth();

  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg p-4"
    >
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path.replace('[schoolId]', schoolId || '')}
              className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white rounded"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
}