import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { IPricingHomeProps } from 'src/types/pricing';
import { varFade, MotionViewport } from 'src/components/animate';

import PlanCard from './pricing-home-card';

// ----------------------------------------------------------------------

type Props = {
  plans: IPricingHomeProps[];
};

export default function PricingHome({ plans }: Props) {
  return (
    <Container
      component={MotionViewport}
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Box
        sx={{
          mb: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            бүтээгдэхүүн
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2" sx={{ my: 3 }}>
            Танилцуулга
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography sx={{ color: 'text.secondary' }}>
            Манай лего блок бүтээгдэхүүнүүд нь барилгын чанарыг дээшлүүлэх, дулааны алдагдлыг
            бууруулах, барилгын хугацааг хэмнэх зорилготойгоор бүтээгдсэн. Стандартад нийцсэн, бат
            бөх, угсралт хялбар эдгээр блокыг Монголын нөхцөлд онцгой тохируулан үйлдвэрлэж байна.
          </Typography>
        </m.div>
      </Box>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {plans.map((plan) => (
          <m.div key={plan.license} variants={varFade().inUp}>
            <PlanCard plan={plan} />
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
