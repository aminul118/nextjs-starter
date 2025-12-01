'use server';

import envVars from '@/config/env.config';

const contactActions = async (formData: FormData) => {
  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  try {
    const res = await fetch(`${envVars.baseUrl}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload), // now correct
      cache: 'no-store',
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || 'Failed to send message');
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export { contactActions };
