import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Placeholder{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Dashboard
          </a>
        </h1>
        <p>Styled with tailwind</p>
      </main>
    </div>
  );
}
