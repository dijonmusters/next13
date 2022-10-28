import supabase from "../../../utils/supabase";

// will revalidate at most every minute
// similar to incremental static regeneration
// https://beta.nextjs.org/docs/api-reference/segment-config#revalidate
export const revalidate = 60;

const getData = async () => {
  const { data } = await supabase.from("test").select("*");
  return data;
};

export default async function Page() {
  const data = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
