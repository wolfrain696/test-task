import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASEPATH } from 'common/constants/config';

const api = createApi({
  reducerPath: 'auction',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASEPATH }),
  endpoints: () => ({}),
});

export default api;
