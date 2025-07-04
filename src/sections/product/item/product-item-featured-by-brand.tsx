import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import { RouterLink } from 'src/routes/components';
import { IProductItemProps } from 'src/types/product';
import TextMaxLine from 'src/components/text-max-line';

import ProductPrice from '../../common/product-price';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  product: IProductItemProps;
}

export default function ProductItemFeaturedByBrand({ product, sx, ...other }: Props) {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        p: 2,
        borderRadius: 2,
        border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        ...sx,
      }}
      {...other}
    >
      <Image
        src={product.image_url}
        sx={{
          width: 128,
          height: 128,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack spacing={0.5} flexGrow={1}>
        <TextMaxLine variant="body2" line={1} sx={{ fontWeight: 'fontWeightMedium' }}>
          {product.name}
        </TextMaxLine>

        <TextMaxLine variant="caption" line={1} sx={{ color: 'text.disabled' }}>
          {product.product_type}
        </TextMaxLine>

        <ProductPrice price={product.price_mnt} priceSale={product.priceSale} />

        <Stack flexGrow={1} alignItems="flex-end" justifyContent="flex-end">
          <Button
            component={RouterLink}
            href={paths.landing.productList}
            size="small"
            color="inherit"
            variant="contained"
          >
            Худалдаж авах
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
