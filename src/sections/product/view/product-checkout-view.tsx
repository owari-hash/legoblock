'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import FormProvider from 'src/components/hook-form';

import CheckoutNewCardForm from '../../checkout/checkout-new-card-form';
import CheckoutOrderSummary from '../../checkout/checkout-order-summary';
import CheckoutPaymentMethod from '../../checkout/checkout-payment-method';
import CheckoutShippingMethod from '../../checkout/checkout-shipping-method';
import CheckoutShippingDetails from '../../checkout/checkout-shipping-details';
import CheckoutPersonalDetails from '../../checkout/checkout-personal-details';

import { useCart } from 'src/contexts/cart-context';

// ----------------------------------------------------------------------

const SHIPPING_OPTIONS = [
  {
    label: 'Үнэгүй',
    value: 'free',
    description: 'Ажлын 5-7 өдөрт ',
    price: 0,
  },
  {
    label: 'Энгийн',
    value: 'standard',
    description: 'Ажлын 3-5 өдөрт',
    price: 10000,
  },
  {
    label: 'Шуурхай',
    value: 'express',
    description: 'Ажлын 2-3 өдөрт',
    price: 20000,
  },
];

const PAYMENT_OPTIONS = [
  {
    label: 'Paypal',
    value: 'paypal',
    description: '**** **** **** 1234',
  },
  {
    label: 'MasterCard',
    value: 'mastercard',
    description: '**** **** **** 3456',
  },
  {
    label: 'Visa',
    value: 'visa',
    description: '**** **** **** 6789',
  },
];

// ----------------------------------------------------------------------

export default function CheckoutView() {
  const router = useRouter();
  const formOpen = useBoolean();
  const { cart, clearCart } = useCart();

  const EcommerceCheckoutSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    emailAddress: Yup.string().required('Email address is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    streetAddress: Yup.string().required('Street address is required'),
    country: Yup.string().required('Country is required'),
    paymentMethods: Yup.string().required('Payment method is required'),
    shipping: Yup.string().required('Shipping method is required'),
    city: Yup.string().required('City is required'),
    zipCode: Yup.string().required('Zip code is required'),
  });

  const defaultValues = {
    firstName: 'Jayvion',
    lastName: 'Simon',
    emailAddress: 'nannie_abernathy70@yahoo.com',
    phoneNumber: '365-374-4961',
    password: '',
    confirmPassword: '',
    streetAddress: '',
    city: '',
    country: 'United States',
    zipCode: '',
    shipping: 'free',
    paymentMethods: 'mastercard',
    newCard: {
      cardNumber: '',
      cardHolder: '',
      expirationDate: '',
      ccv: '',
    },
  };

  const methods = useForm({
    resolver: yupResolver(EcommerceCheckoutSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const orderItems = cart.map((item) => ({
        product: item.id,
        quantity: item.quantity,
      }));

      const orderPayload = {
        full_name: `${data.firstName} ${data.lastName}`,
        phone_number: data.phoneNumber,
        email: data.emailAddress,
        delivery_address: `${data.streetAddress}, ${data.city}, ${data.zipCode}, ${data.country}`,
        notes: '',
        shipping_method: data.shipping,
        payment_method: data.paymentMethods,
        items: orderItems,
      };

      await axios.post('http://localhost:8000/orders/', orderPayload);

      reset();
      clearCart();
      router.push(paths.landing.orderCompleted);
      console.log('Order submitted successfully:', orderPayload);
    } catch (error) {
      console.error('Failed to submit order:', error);
    }
  });

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: 5,
        pb: { xs: 5, md: 10 },
      }}
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={8}>
            <Stack spacing={5} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
              <div>
                <StepLabel title="Хувийн мэдээлэл" step="1" />
                <CheckoutPersonalDetails />
              </div>

              <div>
                <StepLabel title="Хүргэлтийн мэдээлэл" step="2" />
                <CheckoutShippingDetails />
              </div>

              <div>
                <StepLabel title="Хүргэлтийн сонголт" step="3" />
                <CheckoutShippingMethod options={SHIPPING_OPTIONS} />
              </div>

              <div>
                <StepLabel title="Төлбөрийн сонголт" step="4" />

                <CheckoutPaymentMethod options={PAYMENT_OPTIONS} />

                <Divider sx={{ my: 3 }} />

                <Stack alignItems="flex-end">
                  <Button
                    color={formOpen.value ? 'error' : 'inherit'}
                    startIcon={
                      <Iconify icon={formOpen.value ? 'carbon:close' : 'carbon:add'} width={24} />
                    }
                    onClick={formOpen.onToggle}
                  >
                    {formOpen.value ? 'Цуцлах' : 'Шинэ карт нэмэх'}
                  </Button>
                </Stack>

                <Collapse in={formOpen.value} unmountOnExit>
                  <CheckoutNewCardForm />
                </Collapse>
              </div>
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <CheckoutOrderSummary loading={isSubmitting} />
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
}

// ----------------------------------------------------------------------

type StepLabelProps = {
  step: string;
  title: string;
};

function StepLabel({ step, title }: StepLabelProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ mb: 3, typography: 'h6' }}>
      <Box
        sx={{
          mr: 1.5,
          width: 28,
          height: 28,
          flexShrink: 0,
          display: 'flex',
          typography: 'h6',
          borderRadius: '50%',
          alignItems: 'center',
          bgcolor: 'primary.main',
          justifyContent: 'center',
          color: 'primary.contrastText',
        }}
      >
        {step}
      </Box>
      {title}
    </Stack>
  );
}
