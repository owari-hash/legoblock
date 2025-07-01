import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';
import { IProductItemProps } from 'src/types/product';

import ProductPrice from '../../common/product-price';
import ProductColorPicker from '../../common/product-color-picker';
import { Alert, TextField } from '@mui/material';
import { useCart } from 'src/contexts/cart-context';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItemProps;
};

// ... your imports and constants stay the same ...

export default function ProductDetailsInfo({ product }: Props) {
  const mdUp = useResponsive('up', 'md');
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, 999));
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 0));
  };

  const handleQuantityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 999) {
      setQuantity(value);
    } else if (e.target.value === '') {
      setQuantity(0);
    }
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...product, id: String(product.id), quantity });
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Label color={product.in_stock ? 'success' : 'error'} sx={{ mb: 3 }}>
        {product.in_stock ? 'Байгаа' : 'Дууссан'}
      </Label>
      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography variant="h4">{product.name}</Typography>
      </Stack>
      <Stack spacing={2}>
        <ProductPrice
          price={product.price_mnt}
          priceSale={product.priceSale || 0}
          sx={{ typography: 'h5' }}
        />

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
        </Typography>
      </Stack>
      <Stack spacing={3} sx={{ my: 5 }}>
        <Stack spacing={2}>
          <Typography variant="subtitle2">Тоо ширхэг</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton onClick={handleDecrement}>
              <Iconify icon="ic:round-remove" />
            </IconButton>

            <TextField
              type="number"
              value={quantity}
              onChange={handleQuantityInput}
              inputProps={{
                min: 1,
                max: 99,
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
      </Stack>{' '}
      {/* ✅ This was missing */}
      <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'center' }}>
        <Button
          fullWidth={!mdUp}
          size="large"
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="carbon:shopping-cart-plus" />}
          onClick={() => {
            handleAddToCart();
          }}
        >
          Сагсанд нэмэх
        </Button>
        <Button
          fullWidth={!mdUp}
          size="large"
          color="primary"
          variant="contained"
          startIcon={<Iconify icon="carbon:shopping-cart-plus" />}
          onClick={() => {
            handleAddToCart();
            window.location.href = paths.landing.cart;
          }}
        >
          Захиалах
        </Button>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            Сагсанд амжилттай нэмэгдлээ!
          </Alert>
        </Snackbar>
      </Stack>
      <Divider sx={{ borderStyle: 'dashed', my: 3 }} />
    </>
  );
}
