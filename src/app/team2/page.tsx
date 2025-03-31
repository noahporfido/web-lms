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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
  );
}
