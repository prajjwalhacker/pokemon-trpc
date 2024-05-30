import React from "react";
import { TextField } from "@mui/material";

type PokemonTypeSelectionProps = {
    selectedType: (string | undefined),
    selectType: (type: string | undefined) => void
}

const PokemonTypeSelectiom = (props: PokemonTypeSelectionProps) => {
      const { selectedType, selectType } = props;

      return (
      <TextField
          label="Pokemon"
          name="pokemon"
          value={selectedType}
          onChange={(e) => { selectType(e.target.value) }}
          fullWidth
          margin="normal"
          sx={{ backgroundColor: 'white', input: { color: 'black' } }}
      />
      )
}

export default PokemonTypeSelectiom;