import { ak } from '.';

declare const window: any;

export const clientDidInit = (cb?: () => void, beforeCb?: () => void) => {
    const init = () => {
        setTimeout(() => {
            beforeCb && beforeCb();
            cb && cb();
        }, 100);
    };
    if (checkIsAPICloud()) {
        (window as any).apiready = init;
        return;
    }
    init();
};

export const checkIsAPICloud = () =>
    typeof window !== undefined && /apiEnv/.test(window.location.href);

export const getSafeAreaBottom = () => {
    const safeArea = ak.getSafeArea();
    if (safeArea) {
        return safeArea.bottom;
    }
    return 0;
};

export const queryStringify = (queryObj: any) => {
    return Object.keys(queryObj)
        .map(name => `${name}=${queryObj[name]}`)
        .join('&');
};

export const getQueriedUrl = (url: string, query?: any) => {
    return { url: query ? `${url}?${queryStringify(query)}` : url };
};
