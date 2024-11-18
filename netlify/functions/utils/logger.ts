type LogLevel = 'info' | 'error' | 'warn' | 'debug';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  event: string;
  data?: any;
  error?: {
    message: string;
    stack?: string;
  };
}

function createLogEntry(
  level: LogLevel,
  event: string,
  data?: any,
  error?: Error
): LogEntry {
  return {
    timestamp: new Date().toISOString(),
    level,
    event,
    ...(data && { data }),
    ...(error && {
      error: {
        message: error.message,
        stack: error.stack
      }
    })
  };
}

export function logWebhookEvent(event: string, data?: any) {
  const entry = createLogEntry('info', event, data);
  console.log(JSON.stringify(entry));
}

export function logWebhookError(event: string, error: unknown, data?: any) {
  const entry = createLogEntry(
    'error',
    event,
    data,
    error instanceof Error ? error : new Error(String(error))
  );
  console.error(JSON.stringify(entry));
}

export function logWebhookDebug(event: string, data?: any) {
  if (process.env.NODE_ENV !== 'production') {
    const entry = createLogEntry('debug', event, data);
    console.debug(JSON.stringify(entry));
  }
}