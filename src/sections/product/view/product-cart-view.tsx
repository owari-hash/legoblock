'use client';

import { useCart } from 'src/contexts/cart-context';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';

import CartList from '../../cart/cart-list';
import CartSummary from '../../cart/cart-summary';

// ----------------------------------------------------------------------

export default function ProductCartView() {
  const { totalItems } = useCart();

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: 5,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={{ xs: 5, md: 8 }}>
        <Grid xs={12} md={8}>
          {totalItems === 0 ? (
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 5 }}>
              Таны сагс хоосон байна.
            </Typography>
          ) : (
            <CartList />
          )}
        </Grid>

        <Grid xs={12} md={4}>
          <CartSummary />
        </Grid>
      </Grid>

      <Button
        component={RouterLink}
        href={paths.landing.productList}
        color="inherit"
        startIcon={<Iconify icon="carbon:chevron-left" />}
        sx={{ mt: 3 }}
      >
        Бүтээгдэхүүн рүү буцах
      </Button>
    </Container>
  );
}
