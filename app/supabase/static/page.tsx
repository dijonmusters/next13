import supabase from "../../../utils/supabase";

// by default all pages are static
// similar to using getStaticProps
// https://beta.nextjs.org/docs/data-fetching/fetching#static-and-dynamic-fetches

const getData = async () => {
  const { data } = await supabase.from("test").select("*");
  return data;
};

export default async function Page() {
  const data = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
