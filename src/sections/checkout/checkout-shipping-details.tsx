import Box from '@mui/material/Box';
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function CheckoutShippingDetails() {
  return (
    <Box
      rowGap={2.5}
      columnGap={2}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
    >
      <RHFTextField name="streetAddress" label="Хаяг тоот" />

      <RHFTextField name="zipCode" label="Шуудангийн хаяг" />

      <RHFTextField name="city" label="Хот" />

      {/* Fixed Country Field */}
      <RHFTextField name="country" label="Country" value="Mongolia" disabled />
    </Box>
  );
}
