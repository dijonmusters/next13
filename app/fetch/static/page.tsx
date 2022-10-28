// by default all pages are static
// similar to using getStaticProps
// https://beta.nextjs.org/docs/data-fetching/fetching#static-data

const getData = async () => {
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
};

export default async function Page() {
  const data = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
