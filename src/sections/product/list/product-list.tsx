import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { IProductItemProps } from 'src/types/product';

import EcommerceProductViewListItem from '../item/product-view-list-item';
import EcommerceProductViewGridItem from '../item/product-view-grid-item';
import EcommerceProductViewListItemSkeleton from '../item/product-view-list-item-skeleton';
import EcommerceProductViewGridItemSkeleton from '../item/product-view-grid-item-skeleton';

export interface ProductListProps {
  products: IProductItemProps[];
  viewMode: string;
  page: number;
  productsPerPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalPages: number;
  loading: boolean;
}

export default function ProductList({
  products,
  viewMode,
  page,
  productsPerPage,
  onPageChange,
  totalPages,
  loading,
}: ProductListProps) {
  return (
    <>
      {viewMode === 'grid' ? (
        <Box
          rowGap={4}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(3, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {(loading ? [...Array(productsPerPage)] : products).map((product, index) =>
            product ? (
              <EcommerceProductViewGridItem key={product.id} product={product} />
            ) : (
              <EcommerceProductViewGridItemSkeleton key={index} />
            )
          )}
        </Box>
      ) : (
        <Stack spacing={4}>
          {(loading ? [...Array(productsPerPage)] : products).map((product, index) =>
            product ? (
              <EcommerceProductViewListItem key={product.id} product={product} />
            ) : (
              <EcommerceProductViewListItemSkeleton key={index} />
            )
          )}
        </Stack>
      )}

      <Pagination
        count={totalPages}
        page={page}
        onChange={onPageChange}
        color="primary"
        sx={{
          mt: 10,
          mb: 5,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
