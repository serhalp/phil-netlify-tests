import type { Config, Context } from "@netlify/edge-functions";

export default async (_request: Request, context: Context) => {
  const shouldFail = context.url.searchParams.get("shouldFail");
  if (shouldFail === "true" || shouldFail === "1") {
    console.debug("[path=* onError=/hello-from-edge-fn] Simulating failure");
    throw new Error("Intentional failure");
  }
};

export const config: Config = {
  path: "/*",
  onError: "/hello-from-edge-fn",
};
