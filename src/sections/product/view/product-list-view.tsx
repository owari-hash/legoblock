'use client';

import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IProductItemProps } from 'src/types/product'; // or wherever your type is

import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';

import ProductFilters from '../filters/filters';
import ProductList from '../list/product-list';
import ProductListBestSellers from '../list/product-list-best-sellers';

import { getProducts } from 'src/utils/api'; // your API helper

const VIEW_OPTIONS = [
  { value: 'list', icon: <Iconify icon="carbon:list-boxes" /> },
  { value: 'grid', icon: <Iconify icon="carbon:grid" /> },
];

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

export default function ProductView() {
  const mobileOpen = useBoolean();

  const PRODUCTS_PER_PAGE = 9;

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('latest');
  const [viewMode, setViewMode] = useState('grid');
  const [products, setProducts] = useState<IProductItemProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const data = await getProducts({ page, perPage: PRODUCTS_PER_PAGE, sort });
        setProducts(data.items);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [page, sort, PRODUCTS_PER_PAGE]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChangeViewMode = useCallback(
    (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
      if (newAlignment !== null) setViewMode(newAlignment);
    },
    []
  );

  const handleChangeSort = useCallback((event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  }, []);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 5 }}>
        <Typography variant="h3">Catalog</Typography>

        <Button
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="carbon:filter" width={18} />}
          onClick={mobileOpen.onTrue}
          sx={{ display: { md: 'none' } }}
        >
          Filters
        </Button>
      </Stack>

      <Stack direction={{ xs: 'column-reverse', md: 'row' }} sx={{ mb: { xs: 8, md: 10 } }}>
        <Stack spacing={5} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
          <ProductFilters open={mobileOpen.value} onClose={mobileOpen.onFalse} />
          {/* Now products exist here */}
          <ProductListBestSellers products={(products || []).slice(0, 3)} />
        </Stack>

        <Box sx={{ flexGrow: 1, pl: { md: 8 }, width: { md: `calc(100% - 280px)` } }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
            <ToggleButtonGroup
              exclusive
              size="small"
              value={viewMode}
              onChange={handleChangeViewMode}
              sx={{ borderColor: 'transparent' }}
            >
              {VIEW_OPTIONS.map((option) => (
                <ToggleButton key={option.value} value={option.value}>
                  {option.icon}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            <FormControl size="small" hiddenLabel sx={{ width: 120 }}>
              <Select value={sort} onChange={handleChangeSort}>
                {SORT_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>

          <ProductList
            products={products}
            viewMode={viewMode}
            page={page}
            productsPerPage={PRODUCTS_PER_PAGE}
            onPageChange={handlePageChange}
            totalPages={Math.ceil(products.length / PRODUCTS_PER_PAGE)}
            loading={loading}
          />
        </Box>
      </Stack>
    </Container>
  );
}
