import { IAuctionCar, IAuctionsCars } from 'store/services/types';
import api from './api';

const carsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAuctionCars: builder.query<IAuctionsCars, string >({
      query: (search) => ({
        url: 'filterAuctions',
        params: { search },
      }),
    }),
    getAuctionCar: builder.query<IAuctionCar, string | undefined>({
      query: (id) => ({
        url: `auction/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAuctionCarsQuery, useGetAuctionCarQuery } = carsApi;
