'use client';

import { useScroll } from 'framer-motion';
import MainLayout from 'src/layouts/main';
import ScrollProgress from 'src/components/scroll-progress';
import ProjectView from 'src/sections/project/view/project-view';

export default function ProjectPage() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ProjectView />
    </MainLayout>
  );
}
