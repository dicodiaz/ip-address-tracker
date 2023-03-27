import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://geo.ipify.org/api/v2/country,city';
const API_KEY = 'at_vNW13sEuyWXo3iT3J6POo79iaKyAB';

export const fetchGeolocationFromIpAddress = createAsyncThunk(
  'geolocation/fetchGeolocationFromIpAddress',
  async (ipAddress) => {
    const { data } = await axios.get(`${BASE_URL}?apiKey=${API_KEY}&ipAddress=${ipAddress}`);
    return data;
  },
);

const initialState = {
  geolocation: null,
};

/* eslint-disable no-param-reassign */
const geolocationSlice = createSlice({
  name: 'geolocation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGeolocationFromIpAddress.fulfilled, (state, { payload }) => {
      state.geolocation = payload;
    });
  },
});
/* eslint-enable no-param-reassign */

export default geolocationSlice.reducer;
