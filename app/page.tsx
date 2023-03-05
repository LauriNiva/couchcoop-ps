import Image from 'next/image';
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
      <div className='relative'>
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
        <p>{game.cooptimusData?.coopexp[0]}</p>
      </div>
    </div>
  );
}
