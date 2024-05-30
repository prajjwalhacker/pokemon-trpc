"use client"

import { trpc } from "@/utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery(['charizard', 'balbasaur']);


  if (!hello.data) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      sfdsfsdj
    </div>
  );
}

