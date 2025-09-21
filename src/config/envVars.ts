const getEnv = (key: string, fallback?: string): string => {
  const value = process.env[key] ?? fallback;
  if (!value) throw new Error(`Missing env var: ${key}`);
  return value;
};

const envVars = {
  Analytics: {
    GA_ID: getEnv('NEXT_PUBLIC_Google_Analytics_ID'),
    GTM_ID: getEnv('NEXT_PUBLIC_Google_Tag_Manager_ID'),
  },
  baseApi: getEnv('NEXT_PUBLIC_BASE_API'),
};

export default envVars;
