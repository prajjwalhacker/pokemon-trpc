"use client"

import { trpc } from "@/utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "cc" });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
}

