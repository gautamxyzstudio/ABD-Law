import React from 'react';
import { MenuItem, Select, Typography, type SxProps } from '@mui/material';

interface DropdownInputProps {
  label?: string;
  value: string;
  sx?: SxProps;
  data: {
    label: string;
    value: string;
  }[];
  containerClassName?: string;
  onChange: (
    value: React.ChangeEvent<
      Omit<HTMLInputElement, 'value'> & { value: string }
    >
  ) => void;
}

const DropdownInput = ({
  label,
  containerClassName,
  value,
  data,
  onChange,
}: DropdownInputProps) => {
  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <Typography
          sx={{ mb: 1, textTransform: 'uppercase', fontWeight: 600 }}
          color="primary"
          variant="body1"
        >
          {label}
        </Typography>
      )}
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        sx={{
          width: '100%',
        }}
        defaultValue={'Choose Type'}
        label={''}
        size="small"
        onChange={(event) =>
          onChange(
            event as React.ChangeEvent<
              Omit<HTMLInputElement, 'value'> & { value: string }
            >
          )
        }
      >
        {data.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default DropdownInput;
