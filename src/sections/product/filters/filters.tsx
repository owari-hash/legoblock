import { useState, useCallback } from 'react';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';

import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { IProductFiltersProps } from 'src/types/product';
import { useResponsive } from 'src/hooks/use-responsive';

import FilterTag from './filter-tag';
import FilterPrice from './filter-price';
import FilterBrand from './filter-brand';
import FilterStock from './filter-stock';
import FilterRating from './filter-rating';
import FilterShipping from './filter-shipping';
import FilterCategory from './filter-category';
import { InputAdornment, TextField } from '@mui/material';

// ----------------------------------------------------------------------

const BRAND_OPTIONS = ['Apple', 'Samsung', 'Xiaomi', 'Honor'];

const CATEGORY_OPTIONS = [
  'Apple iPhone',
  'Samsung Galaxy',
  'Nike Air Max',
  'Adidas Ultraboost',
  'Sony PlayStation',
];

const SHIPPING_OPTIONS = ['Шуурхай', 'Энгийн', 'Үнэгүй'];

const TAG_OPTIONS = ['1x1', '2x1', '3x1', 'Дулаалгатай', 'Хөнгөн'];

// ----------------------------------------------------------------------

const defaultValues = {
  filterBrand: [BRAND_OPTIONS[1]],
  filterCategories: null,
  filterRating: null,
  filterStock: false,
  filterShipping: [],
  filterTag: [],
  filterPrice: {
    start: 0,
    end: 0,
  },
};

type Props = {
  open: boolean;
  onClose: VoidFunction;
};

export default function EcommerceFilters({ open, onClose }: Props) {
  const mdUp = useResponsive('up', 'md');

  const [filters, setFilters] = useState<IProductFiltersProps>(defaultValues);

  const getSelected = (selectedItems: string[], item: string) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  const handleChangeCategories = useCallback(
    (id: number) => {
      setFilters({
        ...filters,
        filterCategories: id,
      });
    },
    [filters]
  );

  const handleChangeBrand = useCallback(
    (name: string) => {
      setFilters({
        ...filters,
        filterBrand: getSelected(filters.filterBrand, name),
      });
    },
    [filters]
  );

  const handleChangeShipping = useCallback(
    (name: string) => {
      setFilters({
        ...filters,
        filterShipping: getSelected(filters.filterShipping, name),
      });
    },
    [filters]
  );

  const handleChangeTag = useCallback(
    (name: string) => {
      setFilters({
        ...filters,
        filterTag: getSelected(filters.filterTag, name),
      });
    },
    [filters]
  );

  const handleChangeRating = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilters({
        ...filters,
        filterRating: (event.target as HTMLInputElement).value,
      });
    },
    [filters]
  );

  const handleChangeStartPrice = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilters({
        ...filters,
        filterPrice: {
          ...filters.filterPrice,
          start: Number(event.target.value),
        },
      });
    },
    [filters]
  );

  const handleChangeEndPrice = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilters({
        ...filters,
        filterPrice: {
          ...filters.filterPrice,
          end: Number(event.target.value),
        },
      });
    },
    [filters]
  );

  const handleChangeStock = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilters({
        ...filters,
        filterStock: event.target.checked,
      });
    },
    [filters]
  );

  const handleClearAll = useCallback(() => {
    setFilters(defaultValues);
  }, []);

  const renderContent = (
    <Stack
      spacing={3}
      alignItems="flex-start"
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: 280 },
      }}
    >
      <TextField
        fullWidth
        hiddenLabel
        placeholder="Хайх..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
      />
      <Block title="Төрөл">
        <FilterCategory
          selectedTypeId={filters.filterCategories}
          onSelectType={handleChangeCategories}
          sx={{ mt: 2 }}
        />
      </Block>

      <Block title="Үнээр эрэмбэлэх">
        <FilterPrice
          filterPrice={filters.filterPrice}
          onChangeStartPrice={handleChangeStartPrice}
          onChangeEndPrice={handleChangeEndPrice}
          sx={{ mt: 2 }}
        />
      </Block>

      <Block title="Хүргэлтийн төрөл">
        <FilterShipping
          filterShipping={filters.filterShipping}
          onChangeShipping={handleChangeShipping}
          options={SHIPPING_OPTIONS}
          sx={{ mt: 1 }}
        />
      </Block>

      <FilterStock filterStock={filters.filterStock} onChangeStock={handleChangeStock} />

      <Block title="Tags">
        <FilterTag
          filterTag={filters.filterTag}
          onChangeTag={handleChangeTag}
          options={TAG_OPTIONS}
          sx={{ mt: 2 }}
        />
      </Block>

      <Button
        fullWidth
        color="inherit"
        size="large"
        variant="contained"
        startIcon={<Iconify icon="carbon:trash-can" />}
        onClick={handleClearAll}
      >
        Цэвэрлэх
      </Button>
    </Stack>
  );

  return (
    <>
      {mdUp ? (
        renderContent
      ) : (
        <Drawer
          anchor="right"
          open={open}
          onClose={onClose}
          PaperProps={{
            sx: {
              pt: 3,
              px: 3,
              width: 280,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

interface BlockProps extends StackProps {
  title: string;
  children: React.ReactNode;
}

function Block({ title, children, ...other }: BlockProps) {
  const contentOpen = useBoolean(true);

  return (
    <Stack alignItems="flex-start" sx={{ width: 1 }} {...other}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={contentOpen.onToggle}
        sx={{ width: 1, cursor: 'pointer' }}
      >
        <Typography variant="h6">{title}</Typography>

        <Iconify
          icon={contentOpen.value ? 'carbon:subtract' : 'carbon:add'}
          sx={{ color: 'text.secondary' }}
        />
      </Stack>

      <Collapse unmountOnExit in={contentOpen.value} sx={{ px: 0.5 }}>
        {children}
      </Collapse>
    </Stack>
  );
}
