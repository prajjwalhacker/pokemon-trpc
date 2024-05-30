"use client"

import { trpc } from "@/utils/trpc";
import Image from "next/image";
import styles from "./page.module.css";
import TableComponent from "../components/TableComponent";
import PokemonTypeSelectiom from "../components/PokemonTypeSelection";
import { useEffect, useState } from "react";

export default function FilterablePokedex() {
   
  const [selectedType, setSelectedType] = useState<string>()
  const singlePokemon = trpc.singlePokemon.useQuery(selectedType || '');

  





  const formattedPokemonArray = [
    {
      id: singlePokemon?.data?.id || 1,
      name: singlePokemon?.data?.name || '',
      sprite: singlePokemon?.data?.sprite || '',
      types: ['grass'],
    }
  ]


  useEffect(() => {
     
  }, [])

 
  
  return (
    <div className={styles.main}>
      <PokemonTypeSelectiom selectedType={selectedType} selectType={(value) => {
           setSelectedType(value);
      }}/>
      {singlePokemon.data ? <TableComponent rows={formattedPokemonArray} /> : <div>
          Search Pokemon to show in table
          example type
          charizard, pokemon etc
      </div> }
    </div>
  );
}
