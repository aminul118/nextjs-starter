const nodeEnv = process.env.NODE_ENV;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const googleAnalytics = process.env.GoogleAnalytics;
const accessSecret = process.env.JWT_SECRET;
const NODE = process.env.NODE_ENV;

const envVars = {
  NODE,
  nodeEnv,
  baseUrl,
  googleAnalytics,
  jwt: {
    accessSecret,
  },
};

export default envVars;
