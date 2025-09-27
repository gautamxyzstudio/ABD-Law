import { Box, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = ({
  title,
  buttonTitle,
  backButton,
  secondaryButtonTitle,
  withButton = true,
  lastSync,
  onPressBackButton,
  withSecondaryButton,
  onPressSecondaryButton,
  disabled,
  onPress,
}: {
  title: string;
  withSecondaryButton?: boolean;
  lastSync?: Date;
  secondaryButtonTitle?: string;
  buttonTitle?: string;
  onPressBackButton?: () => void;
  backButton?: boolean;
  onPressSecondaryButton?: () => void;
  withButton?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {backButton && (
          <Button onClick={onPressBackButton}>
            <ArrowBackIcon />
          </Button>
        )}
        <Typography variant="h4">{title}</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        {withSecondaryButton && (
          <Button
            size="large"
            variant="contained"
            color="info"
            disabled={disabled}
            onClick={onPressSecondaryButton}
          >
            {secondaryButtonTitle}
          </Button>
        )}
        {lastSync && (
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            Last synced:{' '}
            {(() => {
              try {
                const date = new Date(lastSync);
                if (isNaN(date.getTime())) {
                  return 'Invalid date';
                }

                // Convert to Surrey time
                const surreyTime = new Date(
                  date.toLocaleString('en-US', {
                    timeZone: 'America/Vancouver',
                  })
                );

                const year = surreyTime.getFullYear();
                const month = surreyTime.toLocaleString('en-US', {
                  month: 'short',
                });
                const day = surreyTime.getDate();
                let hours = surreyTime.getHours();
                const minutes = surreyTime
                  .getMinutes()
                  .toString()
                  .padStart(2, '0');
                const ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12;
                const hoursStr = hours.toString().padStart(2, '0');

                return `${month} ${day}, ${year}, ${hoursStr}:${minutes} ${ampm}`;
              } catch {
                return 'Invalid date';
              }
            })()}
          </Typography>
        )}

        {withButton && (
          <Button
            size="large"
            variant="contained"
            disabled={disabled}
            color="info"
            onClick={onPress}
          >
            {buttonTitle}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Header;
