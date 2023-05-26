import { Handlers, PageProps } from "$fresh/server.ts";
import { JSX } from "preact/jsx-runtime";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export const handler: Handlers<Game[]> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://www.freetogame.com/api/games`);
    if (resp.status === 404) {
      return ctx.render([]);
    }
    const games = await resp.json();

    return ctx.render(games);
  },
};

export default function F2p({ data }: PageProps<Game[]>) {
  return (
    <section class='text-center bg-black'>
      <header class='w-screen p-5 '>f2p</header>
      <main class='w-screen  text-center bg-black'>
        {data.length === 0 ? (
          <h1>No games {"(returned)"}</h1>
        ) : (
          <ul class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
            {data.map((game: Game) => {
              return (
                <li class='p-4 flex flex-col items-center justify-center'>
                  <a
                    href={game.game_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    class='text-green-500 hover:underline font-mono'
                    onTouchMoveCapture={() => {
                      return;
                    }}
                  >
                    <img src={game.thumbnail} alt={game.title} />
                    {game.title}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </section>
  );
}
