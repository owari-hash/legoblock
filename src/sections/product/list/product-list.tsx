import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { IProductItemProps } from 'src/types/product';

import EcommerceProductViewListItem from '../item/product-view-list-item';
import EcommerceProductViewGridItem from '../item/product-view-grid-item';
import EcommerceProductViewListItemSkeleton from '../item/product-view-list-item-skeleton';
import EcommerceProductViewGridItemSkeleton from '../item/product-view-grid-item-skeleton';

import { getProducts } from 'src/utils/api'; // your API util to fetch products

type Props = {
  viewMode: string;
  page: number;
  productsPerPage: number;
  sort: string;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};

export default function ProductList({
  viewMode,
  page,
  productsPerPage,
  sort,
  onPageChange,
}: Props) {
  const [products, setProducts] = useState<IProductItemProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        // You may want to extend getProducts to accept sort/page params
        // e.g., getProducts({ page, perPage: productsPerPage, sort })
        const data = await getProducts({ page, perPage: productsPerPage, sort });
        setProducts(data.items); // assume API returns { items: [], totalCount: number }
        setTotalPages(Math.ceil(data.totalCount / productsPerPage));
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, productsPerPage, sort]);

  // slice is no longer needed, since API returns only current page items
  // but if your API returns all, you can slice here instead

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
