import { getSafeArea } from './api';

export const getApi = cb => {
    try {
        // @todo;
        return cb(window.api) || true;
    } catch (e) {
        console.log('not in apicloud');
        return false;
    }
};

export const clientDidInit = (cb, beforeCb) => {
    const init = () => {
        setTimeout(() => {
            beforeCb && beforeCb();
            cb && cb();
        }, 100);
    };
    if (checkIsAPICloud()) {
        window.apiready = init;
        return;
    }
    init();
};

export const checkIsAPICloud = () =>
    typeof window !== undefined && /apiEnv/.test(window.location.href);

export const getSafeAreaBottom = () => {
    const safeArea = getSafeArea();
    if (safeArea) {
        return safeArea.bottom;
    }
    return 0;
};

export const queryStringify = queryObj => {
    return Object.keys(queryObj)
        .map(name => `${name}=${queryObj[name]}`)
        .join('&');
};

export const getQueryUrl = (url, query) => {
    return { url: query ? `${url}?${queryStringify(query)}` : url };
};

export const jsonParse = string => {
    if (!/\{|\[/.test(string)) {
        return string;
    }
    try {
        return JSON.parse(string);
    } catch (e) {
        return null;
    }
};
