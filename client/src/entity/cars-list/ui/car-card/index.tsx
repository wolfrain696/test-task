import {
  Card,
  CardActionArea,
  CardMedia, Grid,
  Typography,
} from '@mui/material';
import Timer from 'common/components/timer';
import * as S from './styles';

interface Props {
  id: number
  title: string
  image: string
  finishTime: number,
  price: number
}

function CarCard({
  title, image, finishTime, price, id,
}: Props) {
  return (
    <S.Wrapper>
      <S.StyledLink to={`auction/${id}`}>
        <Card className="card">
          <CardActionArea>
            <S.StyledCardHeader
              color="red"
              title={(
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h3" fontSize="h5.fontSize">
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography color="gray" variant="h3" fontSize="h5.fontSize">
                      <Timer finishTime={finishTime} />
                    </Typography>
                  </Grid>
                </Grid>
                          )}
            />
            <CardMedia sx={{ height: 200 }} component="img" image={image} />
            <S.Price>
              <Typography variant="h3" fontSize="h5.fontSize">
                {`${price}р`}
              </Typography>
            </S.Price>
          </CardActionArea>
        </Card>
      </S.StyledLink>
    </S.Wrapper>

  );
}

export default CarCard;
