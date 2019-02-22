import { setPrefs, getPrefs, removePrefs } from './api';

export const setEnv = value => setPrefs({ key: 'env', value });

export const getEnv = () => getPrefs({ key: 'env' });

const authTokenKey = 'authToken';

export const saveAuthToken = (value, key = authTokenKey) =>
    setPrefs({ key, value });

export const getAuthToken = (key = authTokenKey) => getPrefs({ key });

export const rmAuthToken = (key = authTokenKey) => removePrefs({ key });
