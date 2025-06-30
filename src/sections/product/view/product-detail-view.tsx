// 'use client';

// import { useEffect, useState, useCallback } from 'react';

// import axios from 'axios';

// import Grid from '@mui/material/Unstable_Grid2';
// import Container from '@mui/material/Container';

// import { useBoolean } from 'src/hooks/use-boolean';
// import { SplashScreen } from 'src/components/loading-screen';
// import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// import ReviewProduct from '../../review/product/review-product';
// import ProductDetailsInfo from '../details/product-details-info';
// import ProductDetailsCarousel from '../details/product-details-carousel';
// import ProductDetailsDescription from '../details/product-details-description';
// import { DJANGO_API_URL } from 'src/config-global';

// // ----------------------------------------------------------------------

// type Props = {
//   id: string;
// };

// export default function DetailView({ id }: Props) {
//   const loading = useBoolean(true);
//   const [product, setProduct] = useState<any>(null);

//   const getProduct = useCallback(async () => {
//     try {
//       const response = await axios.get(`${DJANGO_API_URL}/products/${id}/`);
//       setProduct(response.data);
//     } catch (error) {
//       console.error('Failed to load product:', error);
//     } finally {
//       loading.onFalse();
//     }
//   }, [id, loading]);

//   useEffect(() => {
//     getProduct();
//   }, [getProduct]);

//   if (loading.value) {
//     return <SplashScreen />;
//   }

//   return (
//     <>
//       <Container sx={{ overflow: 'hidden' }}>
//         <CustomBreadcrumbs
//           links={[
//             { name: 'Home', href: '/' },
//             { name: 'Product', href: '/products' },
//             { name: product?.name || 'Loading...' },
//           ]}
//           sx={{ my: 5 }}
//         />

//         <Grid container spacing={{ xs: 5, md: 8 }}>
//           <Grid xs={12} md={6} lg={7}>
//             <ProductDetailsCarousel images={product?.images} />
//           </Grid>

//           <Grid xs={12} md={6} lg={5}>
//             <ProductDetailsInfo
//               name={product?.name}
//               price={product?.price_mnt ?? product?.price}
//               caption={product?.caption}
//               priceSale={product?.priceSale}
//               ratingNumber={product?.ratingNumber}
//               totalReviews={product?.totalReviews}
//             />
//           </Grid>
//         </Grid>

//         <Grid container columnSpacing={{ md: 8 }}>
//           <Grid xs={12} md={6} lg={7}>
//             <ProductDetailsDescription
//               product={product}
//               description={product?.description}
//               specifications={[
//                 { label: 'Category', value: product?.category ?? product?.product_type_name },
//                 { label: 'Manufacturer', value: product?.manufacturer },
//                 { label: 'Warranty', value: product?.warranty },
//                 { label: 'Ships From', value: product?.ships_from },
//               ]}
//             />
//           </Grid>
//         </Grid>
//       </Container>
//       <ReviewProduct />
//     </>
//   );
// }
