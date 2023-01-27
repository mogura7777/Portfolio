/** @format */

// libs/client.ts

import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN as string,
  apiKey: process.env.FIREBASE_API_KEY as string,
});
