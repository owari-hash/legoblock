import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { IBlogPost } from 'src/types/blog';
import { useRouter } from 'next/navigation';

// ----------------------------------------------------------------------

const FEATURE_HIGHLIGHTS = [
  { title: '5 Prebuilt Websites', icon: 'carbon:application-web' },
  { title: '60+ Demo Page', icon: 'carbon:stacked-scrolling-2' },
  { title: 'Easy to Customize', icon: 'carbon:settings-adjust' },
  { title: 'Color Presets', icon: 'carbon:color-switch' },
  { title: 'Dark Mode', icon: 'carbon:asleep' },
  { title: 'Awesome Animation', icon: 'carbon:boolean' },
  { title: 'Google Fonts', icon: 'carbon:text-font' },
  { title: 'Figma Design', icon: 'ph:figma-logo' },
  { title: 'Fully Responsive', icon: 'carbon:devices' },
  { title: 'Mega Menu', icon: 'carbon:list-dropdown' },
  { title: 'Clean Markup', icon: 'carbon:script' },
  { title: 'Free Updates', icon: 'carbon:update-now' },
  { title: 'Fast Support', icon: 'carbon:headset' },
  { title: 'Well Documented', icon: 'carbon:notebook' },
];

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPost[];
};

export default function HomeFeatureHighlights({ posts }: Props) {
  const router = useRouter();

  return (
    <Container
      component={MotionViewport}
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={{ xs: 8, md: 3 }} justifyContent={{ md: 'space-between' }}>
        <Grid
          xs={12}
          md={4}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Блог
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography variant="h2" sx={{ my: 3 }}>
              Сүүлийн үеийн
              <Box component="span" sx={{ color: 'primary.main' }}>
                {' мэдээ '}
              </Box>
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography sx={{ color: 'text.secondary' }}>
              Барилгын салбарын сүүлийн үеийн мэдээ, мэдээлэл
            </Typography>
          </m.div>
        </Grid>

        <Grid xs={12} md={7}>
          <Box
            sx={{
              gap: 3,
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
              },
            }}
          >
            {posts.map((post) => (
              <m.div key={post.id} variants={varFade({ distance: 40 }).in}>
                <Card sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
                    <Iconify icon={post.icon} width={32} sx={{ color: 'primary.main' }} />
                  </Box>

                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {post.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                    {post.description}
                  </Typography>

                  <Box sx={{ flexGrow: 1 }} />

                  <Button
                    color="inherit"
                    size="small"
                    endIcon={<Iconify icon="carbon:chevron-right" />}
                    onClick={() => router.push(`/blog/${post.id}`)}
                  >
                    Дэлгэрэнгүй
                  </Button>
                </Card>
              </m.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
