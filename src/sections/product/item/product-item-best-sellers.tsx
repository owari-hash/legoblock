import Link from '@mui/material/Link';
import Stack, { StackProps } from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import { RouterLink } from 'src/routes/components';
import { IProductItemProps } from 'src/types/product';
import TextMaxLine from 'src/components/text-max-line';

import ProductPrice from '../../common/product-price';
import ProductRating from '../../common/product-rating';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  product: IProductItemProps;
}

export default function ProductItemBestSellers({ product, ...other }: Props) {
  return (
    <Link
      component={RouterLink}
      href={paths.product.details(product.id)}
      color="inherit"
      underline="none"
    >
      <Stack
        spacing={2}
        direction="row"
        sx={{
          transition: (theme) =>
            theme.transitions.create('opacity', {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest,
            }),
          '&:hover': { opacity: 0.72 },
        }}
        {...other}
      >
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

        <Stack spacing={0.5}>
          <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
            {product.name}
          </TextMaxLine>

          <ProductRating
            ratingNumber={product.ratingNumber || 0}
            label={`${product.sold || 0} sold`}
          />

          <ProductPrice price={product.price_mnt} priceSale={product.priceSale} />
        </Stack>
      </Stack>
    </Link>
  );
}
