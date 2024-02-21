import { useGetAuctionCarQuery } from 'store/services/carsApi';
import { useParams } from 'react-router';
import { Typography } from '@mui/material';
import Timer from 'common/components/timer';
import { IMAGES_BASEPATH } from 'common/constants/config';
import * as S from './styled';

function Auction() {
  const params = useParams();

  const { data } = useGetAuctionCarQuery(params?.id);

  if (!data) {
    return null;
  }

  const {
    auction: {
      title,
      finishTime,
      imgUrl,
      mileage,
    },
  } = data;

  return (
    <S.AuctionContainer>
      <Typography>
        Подробная информация об автомобиле
        {' '}
        {title}
      </Typography>
      <Typography>
        Осталось времени до конца аукциона :
        {' '}
        <Timer finishTime={finishTime} />
      </Typography>
      <S.ImageWrapper>
        <img src={IMAGES_BASEPATH + imgUrl} alt="carImage" />
      </S.ImageWrapper>
      <Typography>
        Пробег :
        {` ${mileage}km`}
      </Typography>
    </S.AuctionContainer>
  );
}

export default Auction;
