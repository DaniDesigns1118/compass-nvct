declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_AWS_ACCESS_KEY_ID: string;
      VITE_AWS_SECRET_ACCESS_KEY: string;
      VITE_AWS_REGION: string;
      VITE_SENDER_EMAIL: string;
      VITE_RECIPIENT_EMAIL: string;
      [key: string]: string | undefined;
    }
  }
}

export {};