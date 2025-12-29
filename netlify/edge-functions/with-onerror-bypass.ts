import type { Config, Context } from "@netlify/edge-functions";

export default async (_request: Request, context: Context) => {
  if (context.params.shouldFail !== "false") {
    console.debug("[onError=bypass] Simulating failure");
    throw new Error("Intentional failure");
  }
  console.debug("[onError=bypass] Simulating success");
  return new Response("Success!");
};

export const config: Config = {
  path: "/with-onerror-bypass/:shouldFail",
  onError: "bypass",
};
