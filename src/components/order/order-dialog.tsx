import { forwardRef } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import Iconify from 'src/components/iconify';

type Props = {
  open: boolean;
  onClose: () => void;
};

const OrderDialog = forwardRef<HTMLDivElement, Props>(function OrderDialog({ open, onClose }, ref) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onClose();
  };

  return (
    <Dialog ref={ref} open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Захиалга өгөх
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Iconify icon="mingcute:close-line" />
        </IconButton>
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <Stack spacing={3}>
            <TextField fullWidth label="Нэр" required />
            <TextField fullWidth label="Утасны дугаар" required />
            <TextField select fullWidth label="Блокын төрөл" defaultValue="standard" required>
              <MenuItem value="standard">Стандарт Лего Блок</MenuItem>
              <MenuItem value="insulated">Дулаалгатай Лего Блок</MenuItem>
              <MenuItem value="light">Хөнгөн Блок</MenuItem>
            </TextField>
            <TextField fullWidth label="Хэмжээ" required />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="inherit">
            Цуцлах
          </Button>
          <Button type="submit" variant="contained">
            Илгээх
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
});

OrderDialog.displayName = 'OrderDialog';

export default OrderDialog;
