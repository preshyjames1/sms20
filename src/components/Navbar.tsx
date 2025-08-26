'use client';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import Button from './Button';

export default function Navbar() {
  const { user, loading } = useAuth();

  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          SchoolManagementSystem.com
        </Link>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : user ? (
            <Link href={`/dashboard/${user.schoolId}`}>
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link href="/login" className="mr-4">
                <Button variant="secondary">Log In</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );}