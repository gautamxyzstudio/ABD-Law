import { Box, CircularProgress } from '@mui/material';
import { useLoadingStore } from '../../store/loadingStore';

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useLoadingStore();

  return (
    <div style={{ height: '100%', overflow: loading ? 'hidden' : 'auto' }}>
      {loading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            alignItems: 'center',
            height: '100%',
            zIndex: 2000,
            overflow: 'hidden',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width: '100%',
          }}
        >
          <CircularProgress size={80} color="primary" />
        </Box>
      )}
      {children}
    </div>
  );
};

export default LoaderWrapper;
