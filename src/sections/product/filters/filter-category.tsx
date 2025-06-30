import { useState, useEffect } from 'react';
import axios from 'axios';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';
import { DJANGO_API_URL } from 'src/config-global';

interface ProductType {
  id: number;
  name: string;
  description: string;
}

interface Props extends StackProps {
  selectedTypeId: number | null;
  onSelectType: (id: number) => void;
}

export default function FilterCategory({ selectedTypeId, onSelectType, sx, ...other }: Props) {
  const [types, setTypes] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTypes() {
      setLoading(true);
      try {
        const res = await axios.get<ProductType[]>(`${DJANGO_API_URL}/product-types/`);
        setTypes(res.data);
      } catch (error) {
        console.error('Failed to load product types:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTypes();
  }, []);

  return (
    <Stack spacing={1} alignItems="flex-start" sx={sx} {...other}>
      {loading ? (
        <Typography>Loading categories...</Typography>
      ) : (
        types.map((type) => (
          <Stack
            key={type.id}
            direction="row"
            alignItems="center"
            onClick={() => onSelectType(type.id)}
            sx={{
              typography: 'body2',
              cursor: 'pointer',
              fontWeight: selectedTypeId === type.id ? 'bold' : 'normal',
            }}
          >
            <Iconify icon="carbon:chevron-right" width={12} sx={{ mr: 1 }} />
            {type.name}
          </Stack>
        ))
      )}
    </Stack>
  );
}
