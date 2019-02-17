import { queryStringify } from './util';

export const openWin = p => {
    location.href = `${p.url}?${queryStringify(p.url)}`;
};

export const openFrame = p => {
    location.href = `${p.url}?${queryStringify(p.url)}`;
};
