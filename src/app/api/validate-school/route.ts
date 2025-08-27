import { NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, getApps } from 'firebase-admin/app';

if (!getApps().length) {
  initializeApp();
}

export async function GET(request: Request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const token = authHeader.replace('Bearer ', '');
    const decoded = await getAuth().verifyIdToken(token);
    const userDoc = await getFirestore().collection('users').doc(decoded.uid).get();
    const user = userDoc.data();
    return NextResponse.json({ schoolId: user?.schoolId });
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}