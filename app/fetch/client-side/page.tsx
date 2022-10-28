"use client";

import { useEffect, useState } from "react";

// this is discouraged by the Next team. They suggest fetching everything you can server-side
export default function Page() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/test?select=*`,
        {
          headers: {
            apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            Authorization: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          },
          next: {
            revalidate: 10,
          },
        }
      );
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}
