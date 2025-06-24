'use client';

import { useScroll } from 'framer-motion';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MainLayout from 'src/layouts/main';
import { _blogPosts } from 'src/_mock/_blog';
import { MotionViewport } from 'src/components/animate';
import BlogContent from 'src/sections/blog/blog-content';
import ScrollProgress from 'src/components/scroll-progress';

export default function BlogPage() {
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
        <Typography variant="h2" sx={{ mb: 8, textAlign: 'center' }}>
          Блог
        </Typography>
        <BlogContent posts={_blogPosts} />
      </Container>
    </MainLayout>
  );
}
