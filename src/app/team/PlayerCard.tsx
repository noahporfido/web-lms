import { Image } from "next-sanity/image";
import { urlFor } from "../../sanity/lib/image";
import { Player } from "../../types/Player";

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="relative min-w-[300px] h-auto w-fill">
      <div className="relative w-full h-[200px] overflow-hidden">
        {player.image && (
          <Image
            src={urlFor(player.image).width(300).url()}
            fill
            className="object-cover"
            alt={player.name}
            priority
          />
        )}
      </div>
      <div className="p-2 ">
        <h2 className="text-lg font-bold">
          <span className="text-lg text-primary pr-2">{player.number}</span>
          {player.name}
        </h2>

        <p className="text-sm text-gray-600">{player.position}</p>
      </div>
    </div>
  );
}
