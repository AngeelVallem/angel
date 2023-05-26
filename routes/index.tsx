import { Head } from "$fresh/runtime.ts";
import {} from "$fresh/plugins/twind.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>angel</title>
      </Head>

      <main
        id='main-container'
        class='w-screen h-screen cotainer bg-slate-800 '
        style={{ backgroundColor: "#0F0823" }}
      >
        <div class='w-full text-center'>
          <span class='color-white' style={{ color: "white" }}>
            angel
          </span>
        </div>
      </main>
    </>
  );
}
