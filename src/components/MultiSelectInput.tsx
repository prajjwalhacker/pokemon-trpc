import React, { useState } from 'react';
import { TextField, Button, Chip, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

interface Option {
  label: string;
  value: string;
}

interface MultiSelectInputProps {
  options: Option[];
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [newOption, setNewOption] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string[];
    setSelectedOptions(value);
  };

  const handleNewOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewOption(event.target.value);
  };

  const handleAddNewOption = () => {
    if (newOption.trim() !== '') {
      const newValue = newOption.trim();
      setSelectedOptions([...selectedOptions, newValue]);
      setNewOption('');
    }
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="multi-select-label">Select Options</InputLabel>
        <Select
          labelId="multi-select-label"
          id="multi-select"
          multiple
          value={selectedOptions}
          onChange={handleSelectChange}
          renderValue={(selected: string[]) => (
            <div>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </div>
          )}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id="new-option"
        label="New Option"
        variant="outlined"
        fullWidth
        value={newOption}
        onChange={handleNewOptionChange}
      />
      <Button variant="contained" color="primary" onClick={handleAddNewOption}>
        Add New Option
      </Button>
    </div>
  );
};

// Example usage:
const options: Option[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const App: React.FC = () => {
  return (
    <div>
      <MultiSelectInput options={options} />
    </div>
  );
};

export default App;
