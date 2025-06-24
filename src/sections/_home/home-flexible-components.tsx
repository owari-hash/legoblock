import { useState, useEffect, useCallback } from 'react';

import Container from '@mui/material/Container';

import AboutContent from 'src/sections/about/about-content';


// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function HomeFlexibleComponents() {
  const [tab, setTab] = useState('angular');

  const [progress, setProgress] = useState(0);

  const [alignment, setAlignment] = useState('left');

  const [category, setCategory] = useState('clothes');

  const [rating, setRating] = useState<number | null>(5);

  const [date, setDate] = useState<Date | null>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  }, []);

  const handleChangeAlignment = useCallback(
    (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
      if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    },
    []
  );

  const handleChangeCategory = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  }, []);

  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: { xs: 5, md: 10 },
      }}
    >
      <AboutContent />
    </Container>
  );
}
