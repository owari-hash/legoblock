'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'src/routes/hooks';
import { getProductById } from 'src/utils/api';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { _products } from 'src/_mock';

import ProductDetailsCarousel from '../details/product-details-carousel';
import ProductDetailsDescription from '../details/product-details-description';
import ProductDetailsInfo from '../details/product-details-info';

// ----------------------------------------------------------------------

export default function ProductDetailsView() {
  const params = useParams();

  const { id } = params;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id as string);
        setProduct(data);
      } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h6" color="error">
          Бараа олдсонгүй. Та дахин оролдоно уу.
        </Typography>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 8 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={{ xs: 5, md: 8 }}>
        <Grid xs={12} md={6} lg={7}>
          <ProductDetailsCarousel product={product} />
        </Grid>
        <Grid xs={12} md={6} lg={5}>
          <ProductDetailsInfo product={product} />
        </Grid>
        <Grid xs={12} md={6} lg={5}>
          <ProductDetailsDescription product={product} />
        </Grid>
      </Grid>
    </Container>
  );
}
