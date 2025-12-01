/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import envVars from '@/config/env.config';

const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get('email')?.toString();

  if (!email) {
    throw new Error('Email is required');
  }

  try {
    const res = await fetch(`${envVars.baseUrl}/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || 'Failed to send reset email');
    }

    return result;
  } catch (error: any) {
    console.log('ERROR-->', error);
    throw new Error(error.message || 'Something went wrong');
  }
};

export { forgotPasswordAction };
