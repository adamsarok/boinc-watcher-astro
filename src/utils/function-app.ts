const FUNCTION_APP_URI = import.meta.env.FUNCTION_APP_URI;
const FUNCTIONS_KEY = import.meta.env.X_FUNCTIONS_KEY;

type FetchStatsResult =
  | { ok: true; data: Record<string, unknown> }
  | { ok: false };

export const fetchStats = async (endpoint: string): Promise<FetchStatsResult> => {
  if (!FUNCTION_APP_URI || !FUNCTIONS_KEY) {
    console.warn(
      "FunctionAppUri or x-functions-key not set; skipping build-time fetch for function app stats.",
    );
    return { ok: false };
  }
  const url = `${FUNCTION_APP_URI}/api/${endpoint}`;
  const response = await fetch(url, {
    headers: { "x-functions-key": FUNCTIONS_KEY },
  });
  return response.ok
    ? { ok: true, data: await response.json() }
    : { ok: false };
};
