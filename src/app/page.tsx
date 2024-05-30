"use client"

import { trpc } from "@/utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery(['balbasaur']);

  console.log(hello.data, "Fff")

  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      sfdsfsdj
    </div>
  );
}

