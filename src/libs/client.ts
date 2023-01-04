/** @format */

// libs/client.ts

import { createClient } from "microcms-js-sdk";

export const client = createClient({
  // serviceDomain: "kawamata",
  // apiKey: "4J3WzbXypCvCVWrkrnw3OfTfE3wZQKYQowLI",
  serviceDomain: process.env.SERVICE_DOMAIN || "kawamata",
  apiKey: process.env.API_KEY || "4J3WzbXypCvCVWrkrnw3OfTfE3wZQKYQowLI",
});
