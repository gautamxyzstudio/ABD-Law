import type { TextFieldProps as MuiTextFieldProps } from '@mui/material';

export interface TextInputProps extends Omit<MuiTextFieldProps, 'onChange'> {
  label: string;
  value: string;
  onChange: (
    value: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}
