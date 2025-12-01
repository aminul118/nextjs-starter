'use server';

import envVars from '@/config/env.config';

const verifyOtpAction = async (data: FormData) => {
  const payload = {
    email: data.get('email'),
    otp: data.get('otp'),
  };

  try {
    const res = await fetch(`${envVars.baseUrl}/otp/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || 'OTP verification failed');
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export { verifyOtpAction };
