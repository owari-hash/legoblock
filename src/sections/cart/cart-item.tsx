import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { fCurrency } from 'src/utils/format-number';
import { IProductItemProps } from 'src/types/product';
import { useCart } from 'src/contexts/cart-context';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItemProps & { quantity: number };
  wishlist: boolean;
};

export default function CartItem({ product, wishlist }: Props) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 999) {
      updateQuantity(product.id, value);
    } else if (event.target.value === '') {
      updateQuantity(product.id, 0); // allow empty to become 0
    }
  };

  const handleIncrement = () => {
    updateQuantity(product.id, product.quantity + 1);
  };

  const handleDecrement = () => {
    updateQuantity(product.id, product.quantity - 1);
  };

  const handleRemoveItem = () => {
    removeFromCart(product.id);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        py: 3,
        minWidth: 720,
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      <Stack direction="row" alignItems="center" flexGrow={1}>
        <Image
          src={product.image_url}
          sx={{
            width: 80,
            height: 80,
            flexShrink: 0,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
          }}
        />

        <Stack spacing={0.5} sx={{ p: 2 }}>
          <Typography variant="subtitle2">{product.name}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {product.description}
          </Typography>
        </Stack>
      </Stack>

      <Stack sx={{ width: 240 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton onClick={handleDecrement}>
            <Iconify icon="ic:round-remove" />
          </IconButton>

          <TextField
            type="number"
            value={product.quantity}
            onChange={handleQuantityChange}
            inputProps={{
              min: 1,
              max: 999,
              style: { textAlign: 'center', width: 50 },
            }}
            size="small"
            variant="outlined"
          />

          <IconButton onClick={handleIncrement}>
            <Iconify icon="ic:round-add" />
          </IconButton>
        </Stack>
      </Stack>

      <Stack sx={{ width: 120, typography: 'subtitle2' }}>
        {' '}
        {fCurrency(product.price_mnt * product.quantity)}{' '}
      </Stack>

      <IconButton onClick={handleRemoveItem}>
        <Iconify icon="carbon:trash-can" />
      </IconButton>

      {wishlist && (
        <IconButton>
          <Iconify icon="carbon:shopping-cart-plus" />
        </IconButton>
      )}
    </Stack>
  );
}
