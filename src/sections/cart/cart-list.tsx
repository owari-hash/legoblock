import Stack from '@mui/material/Stack';

import Scrollbar from 'src/components/scrollbar';
import { IProductItemProps } from 'src/types/product';
import { useCart } from 'src/contexts/cart-context';

import EcommerceCartItem from './cart-item';

// ----------------------------------------------------------------------

type Props = {
  wishlist?: boolean;
};

export default function CartList({ wishlist = false }: Props) {
  const { cart } = useCart();

  return (
    <Scrollbar>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          py: 2,
          minWidth: 720,
          typography: 'subtitle2',
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <Stack flexGrow={1}>Бараа</Stack>
        <Stack sx={{ width: 120 }}>Тоо Ширхэг</Stack>
        <Stack sx={{ width: 120 }}>Нийт</Stack>
        <Stack sx={{ width: 36 }} />
        {wishlist && <Stack sx={{ width: 36 }} />}
      </Stack>

      {cart.map((product) => (
        <EcommerceCartItem key={product.id} product={product} wishlist={wishlist} />
      ))}
    </Scrollbar>
  );
}
