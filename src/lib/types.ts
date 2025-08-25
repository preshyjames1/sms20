export interface User {
  id: string;
  email: string;
  role: 'admin' | 'teacher' | 'student' | 'parent' | 'accountant' | 'librarian';
  schoolId: string;
  name?: string;
}

export interface School {
  id: string;
  name: string;
  adminId: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  class: string;
  schoolId: string;
  profilePicture?: string;
}

export interface Class {
  id: string;
  name: string;
  teacherId: string;
  schoolId: string;
}

export interface Timetable {
  id: string;
  day: string;
  period: string;
  classId: string;
  subject: string;
  teacherId: string;
  schoolId: string;
}

export interface Subject {
  id: string;
  name: string;
  classId: string;
  syllabus: string;
  schoolId: string;
}

export interface Exam {
  id: string;
  name: string;
  classId: string;
  subjectId: string;
  date: string;
  time: string;
  schoolId: string;
}

export interface Grade {
  id: string;
  studentId: string;
  examId: string;
  score: number;
  schoolId: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  schoolId: string;
}

export interface CBTExam {
  id: string;
  title: string;
  questions: { id: string; text: string; options: string[]; correctAnswer: string }[];
  duration: number; // minutes
  schoolId: string;
}