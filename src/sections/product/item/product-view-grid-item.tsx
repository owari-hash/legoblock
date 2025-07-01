import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack, { StackProps } from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { IProductItemProps } from 'src/types/product';
import { useCart } from 'src/contexts/cart-context';
import TextMaxLine from 'src/components/text-max-line';
import { useSnackbar } from 'notistack';

import ProductPrice from '../../common/product-price';
import ProductRating from '../../common/product-rating';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  product: IProductItemProps;
  onAddToCart?: (product: IProductItemProps) => void;
}

export default function ProductViewGridItem({ product, sx, onAddToCart, ...other }: Props) {
  const { addToCart } = useCart();
  const { enqueueSnackbar } = useSnackbar();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    enqueueSnackbar(`${product.name} Сагсанд нэмэгдлээ!`, { variant: 'success' });
  };

  return (
    <Stack
      sx={{
        position: 'relative',
        '&:hover .add-to-cart': {
          opacity: 1,
        },
        ...sx,
      }}
      {...other}
    >
      {product.label === 'new' && (
        <Label color="info" sx={{ position: 'absolute', m: 1, top: 0, right: 0, zIndex: 9 }}>
          ШИНЭ
        </Label>
      )}

      {product.label === 'sale' && (
        <Label color="error" sx={{ position: 'absolute', m: 1, top: 0, right: 0, zIndex: 9 }}>
          ХЯМДРАЛТАЙ
        </Label>
      )}

      <Box sx={{ position: 'relative', mb: 2 }}>
        <Fab
          className="add-to-cart"
          color="primary"
          size="small"
          onClick={handleAddToCart}
          sx={{
            right: 8,
            zIndex: 9,
            bottom: 8,
            opacity: 0,
            position: 'absolute',
            transition: (theme) =>
              theme.transitions.create('opacity', {
                easing: theme.transitions.easing.easeIn,
                duration: theme.transitions.duration.shortest,
              }),
          }}
        >
          <Iconify icon="carbon:shopping-cart-plus" />
        </Fab>

        <Image
          src={product.image_url}
          sx={{
            flexShrink: 0,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
          }}
        />
      </Box>

      <Stack spacing={0.5}>
        {product.product_type && (
          <TextMaxLine variant="caption" line={1} sx={{ color: 'text.disabled' }}>
            {product.product_type}
          </TextMaxLine>
        )}

        <Link component={RouterLink} href={paths.product.details(product.id)} color="inherit">
          <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
            {product.name}
          </TextMaxLine>
        </Link>

        <ProductPrice price={product.price_mnt} priceSale={product.priceSale} />

        <ProductRating
          ratingNumber={product.ratingNumber || 0}
          label={`${product.sold || 0} sold`}
        />
      </Stack>
    </Stack>
  );
}
