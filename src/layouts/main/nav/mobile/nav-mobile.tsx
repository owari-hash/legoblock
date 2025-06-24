import { useState, useEffect } from 'react';

import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import Iconify from 'src/components/iconify';
import { usePathname } from 'src/routes/hooks';
import Scrollbar from 'src/components/scrollbar';
import OrderDialog from 'src/components/order/order-dialog';

import { NavProps } from '../types';

import NavList from './nav-list';

// ----------------------------------------------------------------------

export default function NavMobile({ data }: NavProps) {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (openMenu) {
      setOpenMenu(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <IconButton onClick={() => setOpenMenu(true)} sx={{ ml: 1, color: 'inherit' }}>
        <Iconify icon="carbon:menu" />
      </IconButton>

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        PaperProps={{
          sx: {
            pb: 5,
            width: 260,
          },
        }}
      >
        <Scrollbar>
          <List sx={{ px: 2 }}>
            {data.map((link) => (
              <NavList key={link.title} item={link} />
            ))}

            <Button
              fullWidth
              variant="contained"
              color="inherit"
              onClick={() => {
                setOpenDialog(true);
                setOpenMenu(false);
              }}
              sx={{ mt: 2 }}
            >
              <Typography variant="subtitle2">Захиалга өгөх</Typography>
            </Button>
          </List>
        </Scrollbar>
      </Drawer>

      <OrderDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </>
  );
}
