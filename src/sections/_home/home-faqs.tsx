import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';
import { varFade, MotionViewport } from 'src/components/animate';
import Pattern01 from 'src/assets/illustrations/pattern/pattern-01';

// ----------------------------------------------------------------------

const CONTACTS = {
  phone: '9900-XXXX',
  email: 'info@legoblock.mn',
  address: 'Сонгинохайрхан дүүрэг, 20-р хороо, Үйлдвэрийн бүс',
  facebook: 'facebook.com/legoblock.mn',
};

// ----------------------------------------------------------------------

export default function HomeFAQs() {
  const smUp = useResponsive('up', 'sm');

  return (
    <Container
      component={MotionViewport}
      sx={{
        position: 'relative',
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={{ md: 3 }} justifyContent="center">
        <Grid xs={12} md={8}>
          <m.div variants={varFade().in}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Холбоо барих
            </Typography>
          </m.div>

          <Box
            sx={{
              borderWidth: 1,
              borderRadius: 3,
              textAlign: 'center',
              borderStyle: 'dashed',
              borderColor: (theme) => alpha(theme.palette.grey[500], 0.32),
              px: { xs: 3, md: 8 },
              py: { xs: 6, md: 8 },
              mt: { xs: 8, md: 10 },
            }}
          >
            <Stack spacing={3}>
              <m.div variants={varFade().inUp}>
                <Typography variant="h3">Та бидэнтэй холбогдох</Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Stack spacing={2} alignItems="center">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Iconify icon="carbon:phone" width={24} />
                    <Typography>Утас: {CONTACTS.phone}</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Iconify icon="carbon:email" width={24} />
                    <Typography>Имэйл: {CONTACTS.email}</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Iconify icon="carbon:location" width={24} />
                    <Typography>Байршил: {CONTACTS.address}</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Iconify icon="carbon:logo-facebook" width={24} />
                    <Typography>Facebook: {CONTACTS.facebook}</Typography>
                  </Box>
                </Stack>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Button
                  size="large"
                  color="inherit"
                  variant="contained"
                  href="#order-form"
                  startIcon={<Iconify icon="carbon:document" />}
                >
                  Захиалга өгөх
                </Button>
              </m.div>
            </Stack>
          </Box>

          {/* Order Form */}
          <Box
            id="order-form"
            component="form"
            sx={{
              mt: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <TextField fullWidth label="Нэр" variant="outlined" />
            <TextField fullWidth label="Утасны дугаар" variant="outlined" />
            <TextField fullWidth label="Блокын төрөл" select defaultValue="">
              <MenuItem value="standard">Стандарт Лего Блок</MenuItem>
              <MenuItem value="insulated">Дулаалгатай Лего Блок</MenuItem>
              <MenuItem value="light">Хөнгөн Блок</MenuItem>
            </TextField>
            <TextField fullWidth label="Хэмжээ" variant="outlined" />
            <Button fullWidth size="large" variant="contained" color="primary">
              Илгээх
            </Button>
          </Box>
        </Grid>
      </Grid>

      {smUp && (
        <Pattern01
          sx={{
            top: 80,
            left: 0,
            right: 0,
            zIndex: -1,
            mx: 'auto',
            maxWidth: 600,
            maxHeight: 600,
          }}
        />
      )}
    </Container>
  );
}
