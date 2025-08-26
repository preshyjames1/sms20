import { motion } from 'framer-motion';

export default function Dashboard({ params }: { params: { schoolId: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8"
    >
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <p>Welcome to your school dashboard (School ID: {params.schoolId})</p>
    </motion.div>
  );
}