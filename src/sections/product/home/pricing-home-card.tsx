import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Label from 'src/components/label';
import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import { IPricingHomeProps } from 'src/types/pricing';

// ----------------------------------------------------------------------

type Props = {
  plan: IPricingHomeProps;
};

export default function PricingHomeCard({ plan }: Props) {
  const standardLicense = plan.license === ' test';

  const plusLicense = plan.license === 'Plus';

  const extendedLicense = plan.license === 'Extended';

  return (
    <Card
      sx={{
        p: 5,
        height: '100%',
        maxHeight: 1000,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: (theme) => theme.customShadows.z8,
        ...(plusLicense && {
          py: 10,
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      {plusLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 40, left: 40 }}>
          ЭРЭЛТТЭЙ
        </Label>
      )}

      <Stack spacing={3}>
        <Image
          src={plan.image}
          alt={plan.license}
          ratio="4/3"
          sx={{ borderRadius: 1.5, objectFit: 'cover' }}
        />

        <Typography variant="h5" component="div" sx={{ textTransform: 'uppercase' }}>
          {plan.license}
        </Typography>

        <Stack spacing={2}>
          <Typography variant="body1">Хэмжээ: {plan.dimensions}</Typography>
          <Typography variant="body1">Жин: {plan.weight}</Typography>
          <Typography variant="body1">Үнэ: {plan.price}₮</Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Тайлбар:
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {plan.description}
          </Typography>
        </Stack>

        <Stack alignItems="flex-end" spacing={3}>
          <Button
            size="large"
            fullWidth
            variant={standardLicense ? 'outlined' : 'contained'}
            color={extendedLicense ? 'primary' : 'inherit'}
            target="_blank"
            rel="noopener"
            href={paths.comingsoon}
          >
            сонгох
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
