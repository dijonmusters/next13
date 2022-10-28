import supabase from "../../../utils/supabase";

// by setting revalidate to 0, we are telling Next.js to not cache the page
// similar to using getServerSideProps
// https://beta.nextjs.org/docs/api-reference/segment-config#revalidate
export const revalidate = 0;

const getData = async () => {
  const { data } = await supabase.from("test").select("*");
  return data;
};

export default async function Page() {
  const data = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
