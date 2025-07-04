'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function ProductOrderCompletedView() {
  return (
    <Container
      component={MotionContainer}
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 20 },
      }}
    >
      <m.div variants={varBounce().in}>
        <Box sx={{ fontSize: 128 }}>🎉</Box>
      </m.div>

      <Stack spacing={1} sx={{ my: 5 }}>
        <Typography variant="h3">Таны захиалга амжилттай!</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Мэйл хаягаар захиалгын мэдээлэл илгээгдсэн болно.
        </Typography>
      </Stack>

      <Button
        component={RouterLink}
        href={paths.landing.productList}
        size="large"
        color="inherit"
        variant="contained"
        startIcon={<Iconify icon="carbon:chevron-left" />}
      >
        Бүтээгдэхүүн рүү буцах
      </Button>
    </Container>
  );
}
