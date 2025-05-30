import Container from '@mui/material/Container';
import { MotionViewport } from 'src/components/animate';
import AboutContent from '../about-content';

export default function AboutView() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <AboutContent />
    </Container>
  );
}
