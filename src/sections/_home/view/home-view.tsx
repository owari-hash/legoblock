'use client';

import { useScroll } from 'framer-motion';

import { _blogPosts, _pricingHome } from 'src/_mock';
import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../home-hero';
import HomeFAQs from '../home-faqs';
import HomeNewStart from '../home-new-start';
import PricingHome from '../../product/home/pricing-home';
import HomeFeatureHighlights from '../home-feature-highlights';
import HomeFlexibleComponents from '../home-flexible-components';
import { _projectHome } from 'src/_mock/_project';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <PricingHome plans={_pricingHome} />

      <HomeNewStart projects={_projectHome} />

      <HomeFlexibleComponents />

      <HomeFeatureHighlights posts={_blogPosts} />

      {/* <HomeForDesigner /> */}

      <HomeFAQs />

      {/* <HomeCombination /> */}

      {/* <HomeAdvertisement /> */}
    </>
  );
}
