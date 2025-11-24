'use server';

import envVars from '@/config/env.config';
import { cookies } from 'next/headers';

const loginAction = async (formData: FormData) => {
  try {
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
      return { success: false, message: 'Email and password are required' };
    }

    const response = await fetch(`${envVars.baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      cache: 'no-store',
    });

    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      return {
        success: false,
        message: result?.message || 'Login failed',
      };
    }

    const { accessToken, refreshToken, user } = result.data;

    if (!accessToken || !refreshToken) {
      return {
        success: false,
        message: 'Tokens missing from server',
      };
    }

    const cookieStore = await cookies();

    cookieStore.set('accessToken', accessToken, {
      httpOnly: true,
      secure: envVars.nodeEnv === 'production',
      sameSite: 'lax',
      path: '/',
    });

    cookieStore.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: envVars.nodeEnv === 'production',
      sameSite: 'lax',
      path: '/',
    });

    return {
      success: true,
      message: 'Login successful',
      role: user.role,
    };
  } catch (error) {
    console.log('LOGIN_ERROR:', error);
    return { success: false, message: 'Something went wrong' };
  }
};

export { loginAction };
