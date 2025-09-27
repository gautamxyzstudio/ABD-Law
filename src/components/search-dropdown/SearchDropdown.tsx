import { Autocomplete, TextField, Typography } from '@mui/material';

interface SearchDropdownProps {
  options: string[];
  label: string;
  initialValue?: string | null;
  heading?: string;
  onChange?: (value: string | null) => void;
}

const SearchDropdown = ({
  options,
  label,
  initialValue,
  onChange,
  heading,
}: SearchDropdownProps) => {
  const containerStyles = {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#dbdbdb !important',
      borderWidth: '1px !important',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#868686 !important',
    },
    '& .MuiInputLabel-root': {},
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px !important',

      paddingLeft: '10px',
    },
  };

  const inputStyles = {
    '& .MuiInputBase-input': {},
  };

  return (
    <div>
      <Typography variant="h6" component="h2" gutterBottom>
        {heading}
      </Typography>
      <Autocomplete
        className="mt-3"
        size="small"
        disablePortal
        options={options}
        sx={containerStyles}
        value={initialValue}
        onChange={(_, value) => onChange?.(value)}
        renderInput={(params) => (
          <TextField sx={inputStyles} {...params} label={label} />
        )}
      />
    </div>
  );
};

export default SearchDropdown;
