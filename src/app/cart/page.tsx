'use client';
import { Container } from '@mui/material';
import { useScroll } from 'framer-motion';
import ScrollProgress from 'src/components/scroll-progress';
import MainLayout from 'src/layouts/main';
import ProductCartView from 'src/sections/product/view/product-cart-view';

// ----------------------------------------------------------------------

export default function CheckoutPage() {
  const { scrollYProgress } = useScroll();
  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <Container>
        <ProductCartView />
      </Container>
    </MainLayout>
  );
}
