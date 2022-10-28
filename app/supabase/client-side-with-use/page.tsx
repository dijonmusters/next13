"use client";

import { use } from "react";
import supabase from "../../../utils/supabase";

// this is discouraged by the Next team. They suggest fetching everything you can server-side
const getData = async () => {
  const { data } = await supabase.from("test").select("*");
  return data;
};

export default function Page() {
  const data = use(getData());
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
