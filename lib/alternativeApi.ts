import { queryStringify } from './util';
import { OpenWinParams, OpenFrameParams } from '../types/apiParams';

export const openWin = <T, T2>(p: OpenWinParams<T, T2>) => {
    location.href = `${p.url}?${queryStringify(p.url)}`;
};

export const openFrame = <T, T2>(p: OpenFrameParams<T, T2>) => {
    location.href = `${p.url}?${queryStringify(p.url)}`;
};
