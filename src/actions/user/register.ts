/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import envVars from '@/config/env.config';

export type RegisterPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
};

const registerAction = async (data: RegisterPayload) => {
  try {
    const res = await fetch(`${envVars.baseUrl}/user/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      cache: 'no-store',
    });

    const result = await res.json();
    console.log(result);

    if (!res.ok) {
      throw new Error(result.message || 'Failed to create user');
    }

    return result;
  } catch (error: any) {
    console.error('Register Error:', error);
    throw new Error(error.message || 'Something went wrong');
  }
};

export { registerAction };
