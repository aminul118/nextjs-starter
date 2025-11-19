'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const logoutAction = async () => {
  const cookieStore = await cookies();

  cookieStore.delete({ name: 'accessToken', path: '/' });
  cookieStore.delete({ name: 'refreshToken', path: '/' });

  // Redirect to login page after logout
  redirect('/login');
};

export { logoutAction };
