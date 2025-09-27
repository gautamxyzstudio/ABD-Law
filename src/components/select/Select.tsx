/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import React, { memo } from 'react';

interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  fullWidth?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  size?: 'small' | 'medium';
  sx?: any;
}

const SelectComponent: React.FC<SelectProps> = memo(
  ({
    label,
    value,
    onChange,
    options,
    fullWidth = true,
    disabled = false,
    required = false,
    error = false,
    size = 'small',
    sx,
  }) => {
    const handleChange = (event: SelectChangeEvent) => {
      onChange(event.target.value);
    };

    return (
      <Box
        sx={{
          minWidth: 120,
          '& .MuiInput-root::after': {
            borderBottom: '1px solid #E2E2E2 !important',
            borderRadius: '8px !important',
          },
          ...sx,
        }}
      >
        <FormControl
          fullWidth={fullWidth}
          error={error}
          required={required}
          disabled={disabled}
          size={size}
        >
          {label && (
            <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
          )}
          <MuiSelect
            labelId={label ? `${label}-select-label` : undefined}
            id={`${label}-select`}
            value={value}
            label={label}
            onChange={handleChange}
            size={size}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </MuiSelect>
        </FormControl>
      </Box>
    );
  }
);

SelectComponent.displayName = 'SelectComponent';

export default SelectComponent;
