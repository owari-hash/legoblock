'use client';

import { useScroll } from 'framer-motion';

import MainLayout from 'src/layouts/main';
import HomeFAQs from 'src/sections/_home/home-faqs';
import ScrollProgress from 'src/components/scroll-progress';

export default function ContactPage() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <HomeFAQs />
    </MainLayout>
  );
}
