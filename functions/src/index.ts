import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const createSchoolOnSignup = functions.auth.user().onCreate(async (user) => {
  const userDoc = {
    email: user.email,
    role: 'admin',
    schoolId: '',
    name: user.displayName || user.email?.split('@')[0],
  };

  const schoolDoc = {
    name: `School-${user.uid}`,
    adminId: user.uid,
  };

  const schoolRef = await admin.firestore().collection('schools').add(schoolDoc);
  userDoc.schoolId = schoolRef.id;

  await admin.firestore().collection('users').doc(user.uid).set(userDoc);
});