import wait from "../../../utils/wait";

// by setting `cache: "no-store"` we are telling Next.js to not cache the page
// similar to using getServerSideProps
// https://beta.nextjs.org/docs/data-fetching/fetching#dynamic-data

const getData = async () => {
  // this `wait` function simulates a slow network - pauses for 3 seconds before doing any work
  await wait(3000);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/test?select=*`,
    {
      headers: {
        apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      },
      cache: "no-store",
    }
  );
  return res.json();
};

export default async function Page() {
  const data = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
