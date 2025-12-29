import type { Config } from "@netlify/edge-functions";

export default async () => {
  return new Response("Hello from an edge function");
};

export const config: Config = {
  path: "/hello-from-edge-fn",
};
