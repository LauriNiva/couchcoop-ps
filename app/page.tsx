import Image from 'next/image';
import { Inter } from 'next/font/google';
import { games } from '../testdata/ps4Games_similarityChecked';

export default function Home() {
  return (
    <main className="m-16">
      <div className="grid gap-12 grid-cols-fluid">
        {games.map((game) => (
          <GameCard key={game.cooptimusId} game={game} />
        ))}
      </div>
    </main>
  );
}

function GameCard({ game }) {
  if (game.rawg.results.length === 0) return null;

  return (
    <div className="bg-gray-900 overflow-hidden rounded-md">
      <Image
        src={game.rawg.results[0]?.background_image}
        alt={game.name}
        width={600}
        height={600}
      />
      <div className="m-4">
        <h3 className="text-xl">{game.name}</h3>
        {game.rawg.results[0]?.metacritic && (
          <p>Metacritic: {game.rawg.results[0]?.metacritic}</p>
        )}
        <p>{game.cooptimusData?.coopexp[0]}</p>
      </div>
    </div>
  );
}
