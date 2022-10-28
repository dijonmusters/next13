"use client";

import { use } from "react";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/test?select=*`,
    {
      headers: {
        apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      },
    }
  );
  return res.json();
}

// this is discouraged by the Next team. They suggest fetching everything you can server-side
export default function Page() {
  const data = use(getData());
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
