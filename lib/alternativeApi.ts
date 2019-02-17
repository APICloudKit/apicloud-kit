import { queryStringify } from './util';

export const openWin = <T, T2>(p: AK.OpenFrameParams<T, T2>) => {
    location.href = `${p.url}?${queryStringify(p.url)}`;
};

export const openFrame = <T, T2>(p: AK.OpenFrameParams<T, T2>) => {
    location.href = `${p.url}?${queryStringify(p.url)}`;
};
