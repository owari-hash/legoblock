'use client';

import { useScroll } from 'framer-motion';

import MainLayout from 'src/layouts/main';
import ScrollProgress from 'src/components/scroll-progress';
import ProductView from 'src/sections/product/view/product-view';

export default function ProductPage() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ProductView />
    </MainLayout>
  );
}
