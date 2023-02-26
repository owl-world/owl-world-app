import jwtDecode from 'jwt-decode';
import EncryptedStorage from 'react-native-encrypted-storage';
import { deleteHeader, setHeader } from '@/apis/fetcher';
import { TokenBody } from '@/types/auth';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type State = {
  accessToken: string;
  member?: TokenBody;
  isStandingWater?: boolean;
};

const USER_STORAGE_KEY = 'user';
const IS_STANDING_WATER_KEY = 'isStandingWater';

export const initAuth = createAsyncThunk('auth/initAuth', async () => {
  const user = await EncryptedStorage.getItem(USER_STORAGE_KEY);
  const isStandingWater = await EncryptedStorage.getItem(IS_STANDING_WATER_KEY);

  if (!user) {
    return;
  }

  return { ...JSON.parse(user), isStandingWater: Boolean(isStandingWater) };
});

const setAuthentication = async (state: State) => {
  setHeader(state.accessToken);
  storeToken(state);
};

export const setStandingWater = async (bool: boolean) => {
  EncryptedStorage.setItem(IS_STANDING_WATER_KEY, `${bool}`);
};

const storeToken = ({ accessToken, member }: State) => {
  return EncryptedStorage.setItem(
    USER_STORAGE_KEY,
    JSON.stringify({
      accessToken,
      member,
    })
  );
};

const initialState: State = {
  accessToken: '',
  isStandingWater: false,
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
      EncryptedStorage.removeItem(USER_STORAGE_KEY);
      // EncryptedStorage.removeItem(IS_STANDING_WATER_KEY);
      deleteHeader();

      state.accessToken = '';
      state.member = undefined;
      // state.isStandingWater = false;
    },
    updateStandingWater(state) {
      setStandingWater(true);
      state.isStandingWater = true;
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

export const { onLogin, onLogout, updateStandingWater } = authSlice.actions;
export default authSlice.reducer;
