import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Image from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';
import { IProject } from 'src/types/project';

// ----------------------------------------------------------------------

type Props = {
  projects: IProject[];
};

export default function HomeNewStart({ projects }: Props) {
  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Paper
        sx={{
          pb: 10,
          borderRadius: 3,
          textAlign: 'center',
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ pt: 5, mb: 8 }}>
            Бидний
            <Box component="span" sx={{ color: 'primary.main' }}>
              {` Төслүүд `}
            </Box>
          </Typography>
        </m.div>

        <Grid container spacing={4} sx={{ px: 3 }}>
          {projects.map((project, index) => (
            <Grid key={project.id} item xs={12} md={6}>
              <m.div variants={varFade()[index % 2 === 0 ? 'inLeft' : 'inRight']}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'left',
                    height: '100%',
                    bgcolor: 'background.paper',
                  }}
                >
                  <Image
                    alt={project.title}
                    src={project.image}
                    ratio="16/9"
                    sx={{ borderRadius: 1, mb: 2 }}
                  />
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    {project.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                    {project.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </Box>
                </Paper>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
