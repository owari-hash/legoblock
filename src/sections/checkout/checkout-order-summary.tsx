import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack, { StackProps } from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { IProductItemProps } from 'src/types/product';
import TextMaxLine from 'src/components/text-max-line';
import { fPercent, fCurrency } from 'src/utils/format-number';
import { useCart } from 'src/contexts/cart-context';

// ----------------------------------------------------------------------

type Props = {
  loading?: boolean;
};

export default function CheckoutOrderSummary({ loading }: Props) {
  const { cart, totalPrice } = useCart();

  const shipping = 0; // Assuming free shipping for now or a fixed value
  const discount = 0; // Assuming no discount for now
  const subtotal = totalPrice;
  const total = subtotal + shipping - discount;
  return (
    <Stack
      spacing={3}
      sx={{
        p: 5,
        borderRadius: 2,
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
      }}
    >
      <Typography variant="h6"> Захиалгын мэдээлэл </Typography>

      {!!cart.length && (
        <>
          {cart.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />
        </>
      )}

      <Row
        label="Нийт"
        value={fCurrency(total)}
        sx={{
          typography: 'h6',
          '& span': { typography: 'h6' },
        }}
      />

      <LoadingButton
        size="large"
        variant="contained"
        color="inherit"
        type="submit"
        loading={loading}
      >
        Захиалах
      </LoadingButton>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type ProductItemProps = StackProps & {
  product: IProductItemProps & { quantity: number };
};

function ProductItem({ product, ...other }: ProductItemProps) {
  return (
    <Stack direction="row" alignItems="flex-start" {...other}>
      <Image
        src={product.image_url}
        sx={{
          mr: 2,
          width: 64,
          height: 64,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack flexGrow={1}>
        <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
          {product.name}
        </TextMaxLine>

        <Typography variant="subtitle2" sx={{ mt: 0.5, mb: 1.5 }}>
          {fCurrency(product.price_mnt)}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          x{product.quantity}
        </Typography>
      </Stack>

      <IconButton>
        <Iconify icon="carbon:trash-can" />
      </IconButton>
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
