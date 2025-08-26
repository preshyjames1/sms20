'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Button from '@/components/Button';
import type { CBTExam } from '@/lib/types';

export default function CBTExam({ params }: { params: { schoolId: string; examId: string } }) {
  const [exam, setExam] = useState<CBTExam | null>(null);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const fetchExam = async () => {
      const examDoc = await getDoc(doc(db, `schools/${params.schoolId}/cbtExams`, params.examId));
      if (examDoc.exists()) {
        const data = examDoc.data() as CBTExam;
        setExam(data);
        setTimeLeft(data.duration * 60);
      }
    };
    fetchExam();
  }, [params.schoolId, params.examId]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = async () => {
    // Save answers to Firestore (e.g., schools/{schoolId}/cbtSubmissions)
    alert('Exam submitted!');
  };

  if (!exam) return <p>Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8"
    >
      <h1 className="text-3xl font-bold mb-8">{exam.title}</h1>
      <p>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
      {exam.questions.map((q) => (
        <div key={q.id} className="mb-4">
          <p className="font-medium">{q.text}</p>
          {q.options.map((option, i) => (
            <label key={i} className="block">
              <input
                type="radio"
                name={q.id}
                value={option}
                checked={answers[q.id] === option}
                onChange={() => handleAnswer(q.id, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <Button onClick={handleSubmit}>Submit Exam</Button>
    </motion.div>
  );
}