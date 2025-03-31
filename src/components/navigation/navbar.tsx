"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const navItems = [
  { name: "Team", path: "team" },
  { name: "Spielplan", path: "timetable" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="list-none flex gap-4 p-8">
        {navItems.map((item) => (
          <Link
            className={`cursor-pointer underline ${pathname.substring(1) === item.path ? "decoration-2" : " decoration-transparent"}`}
            key={item.path}
            href={item.path}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
