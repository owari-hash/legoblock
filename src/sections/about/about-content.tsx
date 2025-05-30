import { m } from 'framer-motion';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';

export default function AboutContent() {
  return (
    <Grid container spacing={{ xs: 6, md: 3 }} justifyContent={{ md: 'space-between' }}>
      <Grid xs={12} md={4}>
        <MotionViewport
          sx={{
            pt: { md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Бидний тухай
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography variant="h2" sx={{ my: 3 }}>
              Legoblock.mn
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography sx={{ color: 'text.secondary', mb: 5 }}>
              2021 онд байгуулагдсан бөгөөд барилгын салбарын дэвшилтэт, байгальд ээлтэй технологиор
              үйлдвэрлэл явуулж буй үндэсний үйлдвэр юм.
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography sx={{ color: 'text.secondary', mb: 5 }}>
              Бид олон улсын стандартын дагуу үйлдвэрлэл явуулж, ISO 9001 чанарын менежментийн
              систем нэвтрүүлсэн. Манай бүтээгдэхүүнүүд барилгын норм, стандартын дагуу туршигдаж
              баталгаажсан.
            </Typography>
          </m.div>
        </MotionViewport>
      </Grid>

      <Grid xs={12} md={7}>
        <MotionViewport>
          <Stack
            spacing={5}
            sx={{
              borderRadius: 3,
              p: { xs: 3, sm: 5 },
              border: (theme) => `dashed 1px ${theme.palette.divider}`,
            }}
          >
            <m.div variants={varFade().inUp}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Бидний эрхэм зорилго:
              </Typography>

              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Эрчим хүч хэмнэдэг, бат бөх, хурдан барих боломжтой барилгын материалыг Монголын
                хэрэглэгчдэд хүргэх.
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Stack direction="row" spacing={2}>
                <Card sx={{ p: 3, textAlign: 'center', flexGrow: 1 }}>
                  <Iconify
                    icon="carbon:certificate"
                    width={40}
                    sx={{ color: 'primary.main', mb: 2 }}
                  />
                  <Typography variant="subtitle1">ISO 9001</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Чанарын баталгаа
                  </Typography>
                </Card>

                <Card sx={{ p: 3, textAlign: 'center', flexGrow: 1 }}>
                  <Iconify icon="carbon:tree" width={40} sx={{ color: 'primary.main', mb: 2 }} />
                  <Typography variant="subtitle1">Байгальд ээлтэй</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Дэвшилтэт технологи
                  </Typography>
                </Card>

                <Card sx={{ p: 3, textAlign: 'center', flexGrow: 1 }}>
                  <Iconify
                    icon="carbon:certificate-check" // Changed icon to certificate-check
                    width={40}
                    sx={{ color: 'primary.main', mb: 2 }}
                  />
                  <Typography variant="subtitle1">Баталгаат чанар</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Стандартын дагуу
                  </Typography>
                </Card>
              </Stack>
            </m.div>
          </Stack>
        </MotionViewport>
      </Grid>
    </Grid>
  );
}
