import jwtDecode from 'jwt-decode';
import EncryptedStorage from 'react-native-encrypted-storage';
import { deleteHeader, setHeader } from '@/apis/fetcher';
import { TokenBody } from '@/types/auth';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type State = {
  accessToken: string;
  member?: TokenBody;
};

const USER_STORAGE_KEY = 'user';

export const initAuth = createAsyncThunk('auth/initAuth', async () => {
  const user = await EncryptedStorage.getItem(USER_STORAGE_KEY);

  if (!user) {
    return;
  }

  return JSON.parse(user);
});

const setAuthentication = (state: State) => {
  storeToken(state);
  setHeader(state.accessToken);
};

const storeToken = ({ accessToken, member }: State) => {
  EncryptedStorage.setItem(
    USER_STORAGE_KEY,
    JSON.stringify({
      accessToken,
      member,
    })
  );
};

const initialState: State = {
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin(state, action) {
      const accessToken = action.payload;
      const decodedToken: TokenBody = jwtDecode(accessToken);

      setAuthentication({ accessToken, member: decodedToken });

      state.accessToken = accessToken;
      state.member = decodedToken;
    },
    onLogout(state) {
      EncryptedStorage.clear();
      deleteHeader();

      state.accessToken = '';
      state.member = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(initAuth.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      const payload = action.payload;
      setAuthentication(payload);

      return { ...state, ...payload };
    });
  },
});

export const { onLogin, onLogout } = authSlice.actions;
export default authSlice.reducer;
