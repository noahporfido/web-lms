"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Spielplan", path: "timetable" },
    { name: "Team", path: "team2" },
  ];

  return (
    <nav className="flex items-center justify-between p-8 sticky inset-0  z-40 ">
      <Link href={"/"}>
        <Image src={"/LMS_Logo.svg"} width={50} height={50} alt="Logo" />
      </Link>
      <ul className="list-none flex gap-4  items-center ">
        {navItems.map((item) => (
          <li key={item.path} className="group relative w-fit">
            <Link
              className={`relative w-fit before:bg-primary before:h-1 before:absolute before:-bottom-1 before:left-0 before:transition-all before:duration-300 ${
                pathname.substring(1) === item.path
                  ? "before:w-full"
                  : "before:w-0 group-hover:before:w-full"
              }`}
              href={item.path}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
