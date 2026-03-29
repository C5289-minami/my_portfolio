import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: import.meta.env.MICROCMS_API_KEY || '',
});

// いったん「タイトル」だけに絞ってテスト
export type Blog = {
  id: string;
  title: string;
};