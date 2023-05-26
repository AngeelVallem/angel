import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>angel</title>
      </Head>

      <main class='w-screen h-screen cotainer bg-cyan-500'>
        <div class='w-full text-center'>
          <span>angel</span>
        </div>
      </main>
    </>
  );
}
