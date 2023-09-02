import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { API_KEY, BASE_URL } from '../utils/constants';
import { GeolocationStateType } from '../utils/types';

export const fetchGeolocationFromIpAddress = createAsyncThunk<
  GeolocationStateType['geolocation'],
  string,
  { rejectValue: string }
>('geolocation/fetchGeolocationFromIpAddress', async (ipAddress, { rejectWithValue }) => {
  const localStorageGeolocation = localStorage.getItem(ipAddress);
  if (localStorageGeolocation) {
    return JSON.parse(localStorageGeolocation);
  }

  const { status, data, response } = await axios
    .get(`${BASE_URL}?apiKey=${API_KEY}&ipAddress=${ipAddress}`)
    .catch((error) => error);
  if (status === 200) {
    return data;
  }
  return rejectWithValue(response?.data?.messages);
});

const initialState: GeolocationStateType = {
  loading: false,
};

const geolocationSlice = createSlice({
  name: 'geolocation',
  initialState,
  reducers: {
    setGeolocation: (state, { payload }: PayloadAction<GeolocationStateType['geolocation']>) => {
      state.geolocation = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGeolocationFromIpAddress.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchGeolocationFromIpAddress.fulfilled, (state, { payload }) => {
        state.geolocation = payload;
        state.loading = false;
        state.error = undefined;
      })
      .addCase(fetchGeolocationFromIpAddress.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setGeolocation } = geolocationSlice.actions;

export const selectGeolocation = (state: RootState) => state.geolocationReducer.geolocation;

export default geolocationSlice.reducer;
