'use client';

import { useScroll } from 'framer-motion';
import Container from '@mui/material/Container';
import MainLayout from 'src/layouts/main';
import ScrollProgress from 'src/components/scroll-progress';
import { MotionViewport } from 'src/components/animate';
import AboutContent from 'src/sections/about/about-content';

export default function AboutUsPage() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Container
        component={MotionViewport}
        sx={{
          py: { xs: 10, md: 15 },
        }}
      >
        <AboutContent />
      </Container>
    </MainLayout>
  );
}
