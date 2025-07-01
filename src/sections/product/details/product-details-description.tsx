import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Markdown from 'src/components/markdown';

// ----------------------------------------------------------------------

type Props = {
  product: {
    description: string;
    size_length: number;
    size_width: number;
    size_height: number;
    weight_kg: string;
  };
};

export default function ProductDetailsDescription({ product }: Props) {
  const specifications = [
    { label: 'Length', value: `${product.size_length} cm` },
    { label: 'Width', value: `${product.size_width} cm` },
    { label: 'Height', value: `${product.size_height} cm` },
    { label: 'Weight', value: `${product.weight_kg} kg` },
  ];
  return (
    <Stack
      spacing={4}
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h6"> Үзүүлэлт </Typography>

        {specifications.map((row) => (
          <Stack
            key={row.label}
            spacing={0.5}
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ sm: 'center' }}
            sx={{ typography: 'body2' }}
          >
            <Box component="span" sx={{ width: 160, color: 'text.secondary' }}>
              {row.label}
            </Box>
            <Box component="span">{row.value}</Box>
          </Stack>
        ))}
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h6"> Тайлбар </Typography>
        <Markdown content={product.description} />
      </Stack>
    </Stack>
  );
}
