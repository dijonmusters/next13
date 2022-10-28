"use client";

import { useEffect, useState } from "react";
import supabase from "../../../utils/supabase";

// this is discouraged by the Next team. They suggest fetching everything you can server-side
export default function Page() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("test").select("*");
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
