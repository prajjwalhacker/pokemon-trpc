"use client"

import { trpc } from "@/utils/trpc";
import styles from "../page.module.css";
import TableComponent from "../../components/TableComponent";
import PokemonTypeSelectiom from "../../components/PokemonTypeSelection";
import { useEffect, useState } from "react";

export default function Home() {
   
  const [selectedType, setSelectedType] = useState()
  const multiPokemon = trpc.multiplePokemon.useQuery(selectedType?.split(' ') || []);


  
  const formattedPokemonArray = (multiPokemon.data || []).map((singlePokemon)  => {
     const types = singlePokemon?.types;
     return  {
        id: singlePokemon?.id || 1,
        name: singlePokemon?.name || '',
        sprite: singlePokemon?.sprite || '',
        types: types || [],
      }
  })



  useEffect(() => {
     
  }, [])

 
  
  return (
    <main className={styles.main}>
      <PokemonTypeSelectiom selectedType={selectedType} selectType={(value) => {
           setSelectedType(value);
      }}/>
      {multiPokemon.data?.length ? <TableComponent rows={formattedPokemonArray} /> : <div>
          Search Pokemon to show in table,
          You can search Multiple pokemons
          example type (balbasaur charizard) to get two pokemon row. 
      </div> }
    </main>
  );
}
