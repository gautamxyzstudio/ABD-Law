import { Box, Paper, Skeleton } from '@mui/material';

const ListingCardLoading = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        mb: 2,
        display: 'flex',
        flexDirection: 'row',
        p: 3,
        gap: 2,
        justifyContent: 'space-between',
        borderLeft: '10px solid',
        borderColor: 'grey.300',
        borderRadius: 6,
      }}
    >
      <Box>
        <Skeleton
          variant="rectangular"
          sx={{ width: 300, height: 160, borderRadius: 6 }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 1,
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{ width: 150, height: 20, borderRadius: 2 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: 200, height: 30, borderRadius: 2 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: 150, height: 30, borderRadius: 2 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: 70, height: 20, borderRadius: 2 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: 100, height: 40, borderRadius: 2 }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 1,
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{ width: 150, height: 20, borderRadius: 2 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: 200, height: 30, borderRadius: 2 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: 150, height: 30, borderRadius: 2 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: 70, height: 20, borderRadius: 2 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: 100, height: 40, borderRadius: 2 }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 1,
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{ width: 150, height: 20, borderRadius: 2 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: 200, height: 30, borderRadius: 2 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: 150, height: 30, borderRadius: 2 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: 70, height: 20, borderRadius: 2 }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: 100, height: 40, borderRadius: 2 }}
        />
      </Box>
    </Paper>
  );
};

export default ListingCardLoading;
