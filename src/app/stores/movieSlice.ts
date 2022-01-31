import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { MovieSummary } from '../types/movie'
import Axios from 'axios';
import { environment } from '../../environment/environment';
import { RootState } from './store';


export type movieType = 'movie' | 'series' | 'episode' | undefined

export interface MovieState {
  page: number,
  movieList: MovieSummary[],
  type: movieType,
  s: string,
  loading: boolean,
  y?: string,
}

const initialState: MovieState = {
  page: 1,
  movieList: [],
  type: undefined,
  s: "star wars",
  loading: true,
  y: undefined,
}

interface bySearchResult {
  Search: MovieSummary[],
  Response: string;
  totalResults: string;
}

export const fetchMovies = createAsyncThunk<bySearchResult, void, {state: RootState}>('movies/fetch', async (status, thunkApi) => {
  const { page, type, s, y } = thunkApi.getState()['movies'];

  const { data } = await Axios.get(environment.apiUrl, { params: { page: page, type: type ? "" : type, s: s, y: y } });

  return data;
})

export const movieSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.page += 1
    },
    decrement: (state) => {
      state.page -= 1
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.s = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setType: (state, action: PayloadAction<movieType>) => {
      state.type = action.payload
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.y = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movieList = action.payload.Search;
      state.loading = false;
    })
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setSearch, setLoading, setType, setDate } = movieSlice.actions

export default movieSlice.reducer