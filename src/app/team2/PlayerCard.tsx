import { Image } from "next-sanity/image";
import { urlFor } from "../../sanity/lib/image";
import { Player } from "../../types/Player";

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  const { image, name } = player;

  return (
    <div className="relative w-full h-[400px] cursor-pointer group overflow-hidden col-span-1">
      {image && (
        <Image
          src={urlFor(image).width(300).url()}
          className="object-cover inset-0 w-full h-full will-change-transform scale-100 transition-transform duration-500 ease-in-out group-hover:scale-110"
          alt={name || "Player image"}
          fill
          priority
        />
      )}
    </div>
  );
}
