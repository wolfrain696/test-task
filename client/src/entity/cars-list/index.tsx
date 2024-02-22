import { useGetAuctionCarsQuery } from 'store/services/carsApi';
import { IMAGES_BASEPATH, POLLING_INTERVAL } from 'common/constants/config';
import { ICar } from 'store/services/types';
import {
  Box, Divider, Grid, LinearProgress, TextField,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import useDebounceValue from 'common/hooks/use-debounce-value';
import CarCard from './ui/car-card';

const DEBOUNCE_DELAY = 1000;

function CarsList() {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounceValue(searchValue, DEBOUNCE_DELAY);

  // Тут я решил использовать готовое решение от Redux вместо axios
  // Если бы я делал через axios я бы сделал через рекурсивный setTimeout и useEffect
  const { data: cars, isLoading } = useGetAuctionCarsQuery(debouncedValue, {
    pollingInterval: Number(POLLING_INTERVAL) || undefined,
  });

  const handleChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Box>
      <Box>
        <TextField sx={{ mb: 3 }} onChange={handleChangeSearchValue} label="Поиск по названию" />
        <Divider />
      </Box>
      { isLoading && <LinearProgress />}
      <Grid sx={{ pt: 3 }} container justifyContent="space-between" gap={3}>
        {cars && cars?.auctions.map(({
          id, title, imgUrl, bid, finishTime,
        }: ICar) => (
          <CarCard
            key={id}
            id={id}
            image={IMAGES_BASEPATH + imgUrl}
            title={title}
            finishTime={finishTime}
            price={bid}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default CarsList;
