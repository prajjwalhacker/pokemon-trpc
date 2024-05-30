"use client"

import { trpc } from "@/utils/trpc";

export default function Home() {
  const hello = trpc.multiplePokemon.useQuery(['charizard', 'balbasaur']);
  const hello2 = trpc.singlePokemon.useQuery('balbasaur');


  if (!hello.data) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      sfdsfsdj
    </div>
  );
}

