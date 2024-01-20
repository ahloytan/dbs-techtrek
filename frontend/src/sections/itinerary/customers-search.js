import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';
import { useState } from 'react';

export const CustomersSearch = ({onChildStateChange}) => {
  const [searchInput, setSearchInput] = useState("")
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchInput(newValue);
    onChildStateChange(newValue);
  };

  return (
    <Card sx={{ p: 2 }}>
      <OutlinedInput
        value={searchInput}
        onChange={handleInputChange}
        fullWidth
        placeholder="Search customer"
        startAdornment={(
          <InputAdornment position="start">
            <SvgIcon
              color="action"
              fontSize="small"
            >
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        )}
        sx={{ maxWidth: 500 }}
      />
    </Card>
  )
};
