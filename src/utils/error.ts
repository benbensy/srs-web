class FlvJSError extends Error {}

export function createFlvJSError(msg: string) {
  return new FlvJSError(msg);
}

export const isFlvJsError = (e: unknown) => e instanceof FlvJSError;
