import { m } from 'framer-motion';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { varFade } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import { IBlogPost } from 'src/types/blog';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

export default function BlogContent({ posts }: { posts: IBlogPost[] }) {
  const router = useRouter();

  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <Grid key={post.id} xs={12} md={6}>
          <m.div variants={varFade().inUp}>
            <Card sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Stack spacing={3} sx={{ flexGrow: 1 }}>
                <Iconify icon={post.icon} width={40} sx={{ color: 'primary.main' }} />

                <Typography variant="h5">{post.title}</Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {post.description}
                </Typography>

                <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                  {format(new Date(post.date), 'yyyy.MM.dd')}
                </Typography>
              </Stack>

              <Button
                color="inherit"
                size="small"
                endIcon={<Iconify icon="carbon:chevron-right" />}
                onClick={() => router.push(`/blog/${post.id}`)}
                sx={{ mt: 3, alignSelf: 'flex-start' }}
              >
                Дэлгэрэнгүй
              </Button>
            </Card>
          </m.div>
        </Grid>
      ))}
    </Grid>
  );
}
