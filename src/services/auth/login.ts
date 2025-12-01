/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import envVars from '@/config/env.config';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IUser } from '@/types';
import {
  getDefaultDashboardRoute,
  isValidRedirectForRole,
  UserRole,
} from '@/utils/auth';
import { setCookie, verifyToken } from '@/utils/jwt';
import { redirect } from 'next/navigation';

type UserRes = {
  accessToken: string;
  refreshToken: string;
  user: IUser;
};

const loginUser = async (_currentState: any, formData: any): Promise<any> => {
  try {
    const redirectTo = formData.get('redirect') || null;

    const loginData = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const res = await serverFetch.post<ApiResponse<UserRes>>('/auth/login', {
      body: JSON.stringify(loginData),
    });

    const { accessToken, refreshToken } = res.data;

    if (!accessToken || !refreshToken) {
      return {
        success: false,
        message: 'Tokens missing from server',
      };
    }

    await setCookie('accessToken', accessToken, {
      httpOnly: true,
      secure: envVars.nodeEnv === 'production',
      sameSite: 'lax',
      path: '/',
    });

    await setCookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: envVars.nodeEnv === 'production',
      sameSite: 'lax',
      path: '/',
    });

    const verifiedToken = verifyToken(accessToken);

    if (typeof verifiedToken === 'string') {
      return {
        success: false,
        message: 'Invalid token',
      };
    }

    const userRole: UserRole = verifiedToken.role;

    if (redirectTo) {
      const requestedPath = redirectTo.toString();
      if (isValidRedirectForRole(requestedPath, userRole)) {
        redirect(requestedPath);
      } else {
        redirect(getDefaultDashboardRoute(userRole));
      }
    }

    return {
      success: true,
      message: 'Login successful',
    };
  } catch {
    return { success: false, message: 'Something went wrong' };
  }
};

export { loginUser };
