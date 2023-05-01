import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lovin</title>
        <meta
          name="description"
          content="A small software studio making delightful apps to make your life better."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/lovin-logo.png" />
      </Head>
      <main className="flex h-screen w-full items-center justify-center gap-4">
        <p className="text-base font-normal text-[var(--bg-faint)]">
          We make wonderful things.
        </p>
      </main>
    </>
  );
}
