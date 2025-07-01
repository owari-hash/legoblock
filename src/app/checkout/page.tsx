'use client';
import { Container } from '@mui/material';
import { useScroll } from 'framer-motion';
import ScrollProgress from 'src/components/scroll-progress';
import MainLayout from 'src/layouts/main';
import CheckoutView from 'src/sections/product/view/product-checkout-view';

// ----------------------------------------------------------------------

export default function CheckoutPage() {
  const { scrollYProgress } = useScroll();
  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <Container>
        <CheckoutView />
      </Container>
    </MainLayout>
  );
}
