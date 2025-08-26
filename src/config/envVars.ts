const getEnv = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

const envVars = {
  ENV: getEnv("NEXT_PUBLIC_ENV"),
};

export default envVars;
