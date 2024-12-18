const env = {
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET as string,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL as string,
  DATABASE_URL: process.env.DATABASE_URL as string,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID as string,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET as string,
};

export default env;
