import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { fPercent, fCurrency } from 'src/utils/format-number';
import { useCart } from 'src/contexts/cart-context';

// ----------------------------------------------------------------------

export default function CartSummary() {
  const { totalPrice, totalItems } = useCart();

  // For simplicity, let's assume fixed values for now or calculate based on total
  const shipping = totalItems > 0 ? 10000 : 0; // Example: 10,000 MNT shipping if there are items
  const discount = totalPrice * 0.15; // Example: 15% discount
  const tax = 0.05; // Example: 5% tax
  const subtotal = totalPrice;
  const total = subtotal - discount + shipping + subtotal * tax;

  return (
    <Stack
      spacing={3}
      sx={{
        p: 5,
        borderRadius: 2,
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
      }}
    >
      <Typography variant="h6"> Хураангуй </Typography>

      <Stack spacing={2}>
        <Row label="Үнийн дүн" value={fCurrency(subtotal)} />

        <Row label="Хүргэлт" value={fCurrency(shipping)} />
      </Stack>

      <TextField
        hiddenLabel
        placeholder="Урамшууллын код"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button>ОК</Button>
            </InputAdornment>
          ),
        }}
      />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Row
        label="Нийт"
        value={fCurrency(total)}
        sx={{
          typography: 'h6',
          '& span': { typography: 'h6' },
        }}
      />

      <Button
        component={RouterLink}
        href={paths.landing.checkout}
        size="large"
        variant="contained"
        color="inherit"
      >
        Захиалах
      </Button>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type RowProps = StackProps & {
  label: string;
  value: string;
};

function Row({ label, value, sx, ...other }: RowProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ typography: 'subtitle2', ...sx }}
      {...other}
    >
      <Box component="span" sx={{ typography: 'body2' }}>
        {label}
      </Box>
      {value}
    </Stack>
  );
}
