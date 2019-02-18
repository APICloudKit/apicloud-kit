import { setPrefs, getPrefs } from './api';

export const setEnv = () => {};

export const getEnv = () => {};

const authTokenKey = 'authToken';

export const saveAuthToken = (value, key = authTokenKey) =>
    setPrefs({ key, value });

export const getAuthToken = (key = authTokenKey) => getPrefs({ key });
