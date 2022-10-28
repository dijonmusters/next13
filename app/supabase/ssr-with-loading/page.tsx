import supabase from "../../../utils/supabase";
import wait from "../../../utils/wait";

// by setting revalidate to 0, we are telling Next.js to not cache the page
// similar to using getServerSideProps
// https://beta.nextjs.org/docs/api-reference/segment-config#revalidate
export const revalidate = 0;

const getData = async () => {
  // this `wait` function simulates a slow network - pauses for 3 seconds before doing any work
  await wait(3000);
  const { data } = await supabase.from("test").select("*");
  return data;
};

export default async function Page() {
  const data = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
