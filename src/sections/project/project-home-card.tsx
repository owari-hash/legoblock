import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IProject } from 'src/types/project';
import Image from 'src/components/image';

type Props = {
  project: IProject;
};

export default function ProjectHomeCard({ project }: Props) {
  return (
    <Card
      sx={{
        p: 5,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: (theme) => theme.customShadows.z8,
      }}
    >
      <Box sx={{ height: 200, overflow: 'hidden' }}>
        <Image
          src={project.image}
          alt={project.title}
          ratio="1/1"
          sx={{
            borderRadius: 1.5,
            objectFit: 'cover',
            height: '100%',
            width: '100%',
          }}
        />
      </Box>

      <Stack spacing={3} sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ minHeight: 50 }}>
          {project.title}
        </Typography>

        <Stack spacing={1}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Байршил: {project.location}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Хугацаа: {project.duration}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Хэмнэлт: {project.savings}
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Тайлбар:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              minHeight: 80,
            }}
          >
            {project.description}
          </Typography>
        </Stack>

        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          {project.benefits.map((benefit, index) => (
            <li key={index}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {benefit}
              </Typography>
            </li>
          ))}
        </Box>
      </Stack>
    </Card>
  );
}
