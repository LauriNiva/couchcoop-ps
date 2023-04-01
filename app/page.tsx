'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { games as gamesData } from '../testdata/ps4Games_similarityChecked';

export default function Home() {
  const [games, setGames] = useState<any[]>([]);
  useEffect(
    () => setGames(gamesData.filter((game) => game.rawg.results[0])),
    []
  );
  return (
    <main>
      <div className='flex justify-center'>
        <Filters games={games} setGames={setGames} />
        <div className="m-16 pt-2">
          <div className="grid gap-12 grid-cols-fluid">
            {games.map((game) => (
              <GameCard key={game.cooptimusId} game={game} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function GameCard({ game }) {
  if (game.rawg.results.length === 0) return null;

  return (
    <div className="bg-gray-900 overflow-hidden rounded-md">
      <div className="relative">
        <Image
          src={game.rawg.results[0]?.background_image}
          alt={game.name}
          width={600}
          height={600}
        />
        <h3 className="text-3xl font-bold inline absolute top-2 bg-black p-2 mx-2 rounded-md bg-opacity-60">
          {game.name}
        </h3>
      </div>
      <div className="m-4">
        <p>{game.cooptimusData?.releasedate[0].split('-')[0]}</p>
        {game.rawg.results[0]?.metacritic && (
          <p>Metacritic: {game.rawg.results[0]?.metacritic}</p>
        )}
        {game.rawg.results[0]?.rating !== 0 && (
          <p>RAWG rating: {game.rawg.results[0]?.rating}</p>
        )}
        <p>{game.cooptimusData?.coopexp[0]}</p>
      </div>
    </div>
  );
}

function Filters({ games, setGames }) {
  return (
    <div className="bg-slate-900 m-2 p-2 fixed z-50 rounded-md border-slate-800 border-2">
      <button
        className="m-2"
        onClick={() =>
          setGames(
            [...games].sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            })
          )
        }
      >
        A-Z
      </button>
      <button
        className="m-2"
        onClick={() =>
          setGames(
            [...games].sort((a, b) => {
              if (a.rawg.results[0].rating > b.rawg.results[0].rating) {
                return -1;
              } else if (a.rawg.results[0].rating < b.rawg.results[0].rating) {
                return 1;
              } else {
                return 0;
              }
            })
          )
        }
      >
        Highest RAWG rating
      </button>
    </div>
  );
}
