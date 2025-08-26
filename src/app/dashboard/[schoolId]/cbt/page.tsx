import { motion } from 'framer-motion';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import Button from '@/components/Button';
import { CBTExam } from '@/lib/types';

export default async function CBTDashboard({ params }: { params: { schoolId: string } }) {
  const examsCol = collection(db, `schools/${params.schoolId}/cbtExams`);
  const snapshot = await getDocs(examsCol);
  const exams = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as CBTExam));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8"
    >
      <h1 className="text-3xl font-bold mb-8">CBT Platform</h1>
      <Link href={`/dashboard/${params.schoolId}/cbt/new`}>
        <Button className="mb-4">Create New Exam</Button>
      </Link>
      <ul className="space-y-4">
        {exams.map((exam) => (
          <motion.li
            key={exam.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="p-4 bg-white rounded-lg shadow flex justify-between"
          >
            <span>{exam.title} ({exam.duration} mins)</span>
            <Link href={`/dashboard/${params.schoolId}/cbt/${exam.id}`}>
              <Button>Start Exam</Button>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}