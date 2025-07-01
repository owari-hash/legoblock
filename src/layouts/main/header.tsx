import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useCart } from 'src/contexts/cart-context';
import Badge from '@mui/material/Badge';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';

import Logo from 'src/components/logo';
import { bgBlur } from 'src/theme/css';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
import OrderDialog from 'src/components/order/order-dialog';

import { HEADER } from '../config-layout';
import HeaderShadow from '../common/header-shadow';
import SettingsButton from '../common/settings-button';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { navConfig } from './config-navigation';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  headerOnDark: boolean;
};

export default function Header({ headerOnDark }: Props) {
  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{ height: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ lineHeight: 0, position: 'relative' }}>
            <Logo />
          </Box>

          {mdUp && <NavDesktop data={navConfig} />}

          <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
            <Stack spacing={1} direction="row" alignItems="center">
              <SettingsButton />
              <CartButton />
            </Stack>
          </Stack>

          {!mdUp && <NavMobile data={navConfig} />}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}

      <OrderDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </AppBar>
  );
}

function CartButton() {
  const { totalItems } = useCart();

  return (
    <IconButton component={RouterLink} href={paths.landing.cart}>
      <Badge showZero badgeContent={totalItems} color="error" max={99}>
        <Iconify icon="carbon:shopping-cart" />
      </Badge>
    </IconButton>
  );
}
