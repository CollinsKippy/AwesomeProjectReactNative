import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {BASE_URL} from '../../app/constants';
import {RootState} from '../../app/store';

const albumsUrl = BASE_URL + '/albums';

export interface Album {
  id: number;
  userId: number;
  title: string;
}

export interface AlbumState {
  albums: Album[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AlbumState = {
  albums: [],
  status: 'idle',
};

export const fetchAlbums = createAsyncThunk(
  '[PRODUCTS API] Load Albums',
  async () => {
    const res = await fetch(albumsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log({data});
    return data;
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAlbums.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.status = 'idle';
        state.albums = action.payload;
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const selectProducts = (state: RootState) => state.product.products;

// export const { loadProducts, loadProductsSuccess, loadProductsFailed } =
//   productSlice.actions;

export default productSlice.reducer;
