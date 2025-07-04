import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Theme, SxProps } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { IProductItemProps } from 'src/types/product';
import TextMaxLine from 'src/components/text-max-line';
import { useResponsive } from 'src/hooks/use-responsive';

import ProductPrice from '../../common/product-price';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItemProps;
  sx?: SxProps<Theme>;
  variant?: 'small' | 'large';
};

export default function EcommerceProductItemTop({ product, variant = 'small', sx }: Props) {
  const mdUp = useResponsive('up', 'md');

  const isLarge = mdUp && variant === 'large';

  const coverUrl = <Image src={product.image_url} />;

  const nameText = (
    <TextMaxLine variant="h5" line={1}>
      {product.name}
    </TextMaxLine>
  );

  const priceText = (
    <ProductPrice price={product.price_mnt} sx={{ typography: 'h5', color: 'text.disabled' }} />
  );

  const moreBtn = (
    <Button
      component={RouterLink}
      href={paths.landing.productList}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
      sx={{ flexShrink: 0 }}
    >
      More Details
    </Button>
  );

  const renderLargeItem = (
    <Stack spacing={5}>
      {coverUrl}

      <Stack spacing={5} direction="row" alignItems="center">
        <Stack spacing={1} flexGrow={1}>
          {nameText}
          {priceText}
        </Stack>

        {moreBtn}
      </Stack>
    </Stack>
  );

  const renderSmallItem = (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
      sx={{ height: 1 }}
    >
      <Box
        sx={{
          order: { sm: 2 },
        }}
      >
        {coverUrl}
      </Box>

      <Stack spacing={1}>
        {nameText}
        {priceText}

        <Stack
          flexGrow={1}
          alignItems={{ xs: 'flex-end', sm: 'flex-start' }}
          justifyContent="flex-end"
          sx={{ pt: 5 }}
        >
          {moreBtn}
        </Stack>
      </Stack>
    </Box>
  );

  return (
    <Paper
      sx={{
        p: 5,
        borderRadius: 2,
        bgcolor: 'background.neutral',
        ...sx,
      }}
    >
      {isLarge ? renderLargeItem : renderSmallItem}
    </Paper>
  );
}
