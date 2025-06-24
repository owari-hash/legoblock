import { memo } from 'react';

import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

interface LogoProps extends BoxProps {
  single?: boolean;
}

function Logo({ single = false, sx }: LogoProps) {
  const theme = useTheme();

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          fontSize: single ? '1.5rem' : '2rem',
          fontWeight: 700,
          color: theme.palette.primary.main,
          ...sx,
        }}
      >
        LEGOBLOCK
      </Box>
    </Link>
  );
}

export default memo(Logo);
