import NavBar from "../../components/navigation/navbar";
import { client } from "../../sanity/lib/client";
import { Player } from "../../types/Player";
import PlayerCard from "./PlayerCard";

export default async function Page() {
  const players = await client.fetch<Player[]>(
    `*[_type == "player"]`,
    {},
    {
      next: { revalidate: 1 },
    }
  );

  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <h1 className="text-8xl my-20 relative w-fit z-10 before:w-full before:bg-primary before:h-6 before:absolute before:z-[-1] before:bottom-0 before:left-0">
          THE TEAM
        </h1>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {players.map((player) => (
            <PlayerCard key={player._id} player={player} />
          ))}
          {players.map((player) => (
            <PlayerCard key={player._id} player={player} />
          ))}
          {players.map((player) => (
            <PlayerCard key={player._id} player={player} />
          ))}
          {players.map((player) => (
            <PlayerCard key={player._id} player={player} />
          ))}
          {players.map((player) => (
            <PlayerCard key={player._id} player={player} />
          ))}
          {players.map((player) => (
            <PlayerCard key={player._id} player={player} />
          ))}
          {players.map((player) => (
            <PlayerCard key={player._id} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
}
