import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const MEMBER_QUERY = `*[_type == "member"]`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const members = await client.fetch<SanityDocument[]>(
    MEMBER_QUERY,
    {},
    options
  );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Members</h1>
      <ul className="flex flex-col gap-y-4">
        {members.map((member) => (
          <li className="hover:underline" key={member._id}>
            <Link href={`/${member.name}`}>
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p>{new Date(member.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
