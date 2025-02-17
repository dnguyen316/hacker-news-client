import { ServiceResponse } from "./service-response";

export async function safeExec<T>(
  fn: () => Promise<T>
): Promise<ServiceResponse<T>> {
  try {
    const data = await fn();

    return {
      ok: true,
      data,
    };
  } catch (error) {
    // Capture any error, transform it into our standardized format
    const message = error instanceof Error ? error.message : String(error);
    return {
      ok: false,
      error: message,
    };
  }
}
