// ----------------------------------------------------------------------

export const paths = {
  // Landing
  landing: {
    root: '/',
    products: '/products',
    productList: '/product-list',
    detail: '/product-list/detail',
    cart: '/cart',
    checkout: `/checkout`,
    orderCompleted: '/order-completed',
    project: '/project',
    aboutus: '/aboutus',
    blog: '/blog',
    contact: '/contact',
  },
  // Product
  product: {
    root: '/product-list',
    details: (id: number | string) => `/product-list/detail/${id}`,
  },
  // Common
  maintenance: '/maintenance',
  comingsoon: '/coming-soon',
  page404: '/error/404',
  page500: '/error/500',
};
