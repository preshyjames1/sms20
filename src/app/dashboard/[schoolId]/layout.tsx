import Sidebar from '@/components/Sidebar';
import { auth } from '@/lib/firebase';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { schoolId: string };
}) {
  const user = await auth.currentUser;
  if (!user) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 ml-64">{children}</main>
    </div>
  );
}