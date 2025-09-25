import { Alert, Snackbar } from '@mui/material';
import useSnackBarStore from '../../store/snackBarStore';
import { Fragment, useEffect, useState } from 'react';

const SnackbarWrapper = ({ children }: { children: React.ReactNode }) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const { open, message, severity, closeSnackBar } = useSnackBarStore();

  const handleClose = () => {
    setShowSnackbar(false);
    closeSnackBar();
  };

  useEffect(() => {
    if (open) {
      setShowSnackbar(true);
    }
  }, [open]);

  return (
    <Fragment>
      {children}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default SnackbarWrapper;
