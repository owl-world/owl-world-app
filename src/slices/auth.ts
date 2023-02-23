import jwtDecode from 'jwt-decode';
import EncryptedStorage from 'react-native-encrypted-storage';
import { deleteHeader, setHeader } from '@/apis/fetcher';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type State = {
  accessToken: string;
  memberId: number | null;
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

const storeToken = ({ accessToken, memberId }: State) => {
  return EncryptedStorage.setItem(
    USER_STORAGE_KEY,
    JSON.stringify({
      accessToken,
      memberId,
    })
  );
};

const initialState: State = {
  accessToken: '',
  memberId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin(state, action) {
      const accessToken = action.payload;
      const decodedToken: { memberId: number } = jwtDecode(accessToken);
      const memberId = decodedToken.memberId;

      setAuthentication({ accessToken, memberId });

      state.accessToken = accessToken;
      state.memberId = memberId;
    },
    onLogout() {
      EncryptedStorage.clear();
      deleteHeader();

      return { ...initialState };
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

export const { onLogin } = authSlice.actions;
export default authSlice.reducer;
