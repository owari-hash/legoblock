import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { _projectHome } from 'src/_mock/_project';

import ProjectHomeCard from './project-home-card';

export default function ProjectHome() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3}>
        {_projectHome.map((project) => (
          <Grid key={project.id} item xs={12} md={6}>
            <ProjectHomeCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
