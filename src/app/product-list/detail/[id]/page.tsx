'use client';

import { useScroll } from 'framer-motion';
import MainLayout from 'src/layouts/main';
import ScrollProgress from 'src/components/scroll-progress';
import ProductDetailsView from 'src/sections/product/view/product-details-view';

// ----------------------------------------------------------------------

export default function ProductDetailsPage() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ProductDetailsView />
    </MainLayout>
  );
}
