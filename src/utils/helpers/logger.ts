import axios from 'axios';

// Define log data type
type TLogData = {
  level: 'info' | 'warn' | 'error';
  message: string;
  data?: Record<string, unknown>;
  timestamp: string;
};

// Function to send logs to backend
const sendToBackend = (logData: TLogData) => {
  // In Future :Replace '/api/logs' with real log API endpoint in future that the backend can see our save in database
  // In practice project, this is just a placeholder
  axios.post('/api/logs', logData).catch(() => {
    // Ignore errors if logging fails
  });
};

export const logger = {
  info: (message: string, data?: Record<string, unknown>) =>
    sendToBackend({
      level: 'info',
      message,
      data,
      timestamp: new Date().toISOString(),
    }),
  warn: (message: string, data?: Record<string, unknown>) =>
    sendToBackend({
      level: 'warn',
      message,
      data,
      timestamp: new Date().toISOString(),
    }),
  error: (message: string, data?: Record<string, unknown>) =>
    sendToBackend({
      level: 'error',
      message,
      data,
      timestamp: new Date().toISOString(),
    }),
};
