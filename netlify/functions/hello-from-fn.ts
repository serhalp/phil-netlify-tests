import type { Config } from "@netlify/functions";

export default async () => {
  return new Response("Hello from a Function");
};

export const config: Config = {
  path: "/hello-from-fn",
};
