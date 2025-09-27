/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { type ChangeEvent } from 'react';
import TextInput from '../textInput/TextInput';
import { Typography, type SxProps } from '@mui/material';

interface FormInputProps {
  label?: string;
  value: string;
  customLabel?: React.ReactNode;
  sx?: SxProps;
  disabled?: boolean;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  errorMessage?: string;
  containerClassName?: string;
  inputProps?: any;
  onChange: (
    value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  multiline?: boolean;
  rows?: number;
}

const FormInput = ({
  label,
  containerClassName,
  value,
  disabled,
  customLabel,
  inputProps,
  placeholder,
  type,
  errorMessage,
  onChange,
  multiline,
  rows,
  sx,
}: FormInputProps) => {
  return (
    <div className={`form-input ${containerClassName}`}>
      {customLabel && customLabel}
      {label && (
        <Typography
          sx={{ mb: 1, textTransform: 'uppercase', fontWeight: 600 }}
          color="primary"
          variant="body1"
        >
          {label}
        </Typography>
      )}

      <TextInput
        sx={sx}
        InputProps={inputProps}
        disabled={disabled}
        placeholder={placeholder}
        label={''}
        error={errorMessage && errorMessage?.length > 0 ? true : false}
        helperText={errorMessage}
        multiline={multiline}
        rows={rows}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
