'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';

import CartList from '../../cart/cart-list';
import CartSummary from '../../cart/cart-summary';

import { IProductItemProps } from 'src/types/product';

// ----------------------------------------------------------------------

export default function ProductCartView() {
  const [products, setProducts] = useState<IProductItemProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<IProductItemProps[]>('http://localhost:8000/api/products/')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: 5,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Typography variant="h3" sx={{ mb: 5 }}>
        Shopping Cart
      </Typography>

      <Grid container spacing={{ xs: 5, md: 8 }}>
        <Grid xs={12} md={8}>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : (
            <CartList products={products.slice(0, 4)} />
          )}
        </Grid>

        <Grid xs={12} md={4}>
          <CartSummary tax={7} total={357.09} subtotal={89.09} shipping={55.47} discount={16.17} />
        </Grid>
      </Grid>

      <Button
        component={RouterLink}
        href={paths.landing.productList}
        color="inherit"
        startIcon={<Iconify icon="carbon:chevron-left" />}
        sx={{ mt: 3 }}
      >
        Continue Shopping
      </Button>
    </Container>
  );
}
