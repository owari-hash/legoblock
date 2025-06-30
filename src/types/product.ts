// ----------------------------------------------------------------------

export type IProductItemHeroProps = {
  title: string;
  caption: string;
  coverUrl: string;
  label: string;
};

export type IProductItemCompareProps = {
  id: string;
  name: string;
  price: number;
  coverUrl: string;
  details: string[];
  ratingNumber: number;
};

export type IProductItemProps = {
  id: number;
  name: string;
  size_length: number;
  size_width: number;
  size_height: number;
  weight_kg: string;
  loading?: boolean;
  price_mnt: number;
  description: string;
  image_url: string;
  in_stock: boolean;
  created_at: string;
  tags: string;
  is_featured: boolean;
  product_type: number;
  product_type_name?: string;
  sold: number;
  label?: string;
  caption?: string;
  stock: number;
  images?: string[];
  priceSale?: number;
  ratingNumber?: number;
  totalReviews?: number;
};

export type IProductFiltersProps = {
  filterTag: string[];
  filterStock: boolean;
  filterBrand: string[];
  filterShipping: string[];
  filterCategories: number | null;
  filterRating: string | null;
  filterPrice: {
    start: number;
    end: number;
  };
};

export type IProductOrderProps = {
  id: string;
  item: string;
  price: number;
  status: string;
  orderId: string;
  deliveryDate: Date;
};
