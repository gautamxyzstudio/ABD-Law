import { useMemo } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import type { Theme } from '@emotion/react';
import type { SxProps } from '@mui/material';
import type { TextInputProps } from './TextInput.types';

const TextInput = ({ label, value, onChange, ...props }: TextInputProps) => {
  const styles: SxProps<Theme> = useMemo(
    () => ({
      '& .MuiInputLabel-root': {
        borderRadius: '8px !important',
      },
      '& .MuiInput-input': {
        borderRadius: '8px !important',
      },
      '& .MuiOutlinedInput-root': {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#CACACA', // Default border color
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#CACACA', // Same as default border color
        },
      },
    }),
    []
  );

  const handleClear = () => {
    const event = {
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  return (
    <TextField
      sx={styles}
      size="small"
      value={value}
      onChange={onChange}
      id="standard-basic"
      label={label}
      variant="outlined"
      className="w-full"
      InputProps={{
        endAdornment: value && (
          <InputAdornment position="end">
            <IconButton
              aria-label="clear input"
              onClick={handleClear}
              edge="end"
              size="small"
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default TextInput;
