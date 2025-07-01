import Stack from '@mui/material/Stack';

import Iconify from 'src/components/iconify';
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function CheckoutNewCardForm() {
  return (
    <Stack spacing={2.5} sx={{ pt: 3 }}>
      <RHFTextField
        name="newCard.cardNumber"
        label="Картийн дугаар"
        placeholder="XXXX XXXX XXXX XXXX"
        InputLabelProps={{ shrink: true }}
      />

      <RHFTextField
        name="newCard.cardHolder"
        label="Эзэмшигчийн нэр"
        placeholder="Бат-Эрдэнэ Болд-Эрдэнэ"
        InputLabelProps={{ shrink: true }}
      />

      <Stack spacing={2} direction="row">
        <RHFTextField
          name="newCard.expirationDate"
          label="Дуусах хугацаа"
          placeholder="Сар/Жил"
          InputLabelProps={{ shrink: true }}
        />
        <RHFTextField
          name="newCard.ccv"
          label="CVV/CVC"
          placeholder="***"
          InputLabelProps={{ shrink: true }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        sx={{ typography: 'caption', color: 'text.disabled' }}
      >
        <Iconify icon="carbon:locked" sx={{ mr: 0.5 }} />
        Таны гүйлгээ аюулгүй байна. Бид таны картын мэдээллийг хамгаалах үүднээс
        <strong> PCI DSS </strong> стандартыг дагаж мөрддөг.
      </Stack>
    </Stack>
  );
}
