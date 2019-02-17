import { getQueriedUrl } from './util';
/// <reference path="../types/api.interface.d.ts" />
/// <reference path="../types/apicloud.d.ts" />

export const getPageParam = <T>() => api.pageParam as T;

export const getSafeArea = () => api.safeArea;

export const openWin = <T, T2>(p: AK.OpenFrameParams<T, T2>) =>
    api.openWin<T, T2>({
        ...p,
        ...getQueriedUrl(p.url, p.query),
        useWKWebView: true,
    });

export const openFrame = <T, T2>(p: AK.OpenFrameParams<T, T2>) =>
    api.openFrame<T, T2>({
        ...p,
        ...getQueriedUrl(p.url, p.query),
        useWKWebView: true,
    });

export const openFrameGroup = <T, T2>(
    params: AK.OpenFrameGroupParams<T, T2>,
    cb: AK.OpenFrameGroupCb,
) => api.openFrameGroup(params, cb);

export const closeToWin = (name: string) => api.closeToWin(name);

export const sendEvent = <T extends AK.EventType>(
    name: T['name'],
    value: T['value'],
) => api.sendEvent(name, value);

export const on = <T extends AK.EventType>(
    name: T['name'],
    cb: (value: T) => void,
) => api.addEventListener<T>({ name }, ({ value }) => cb(value));

// export const download = (params: DownloadParams) =>
//     new Promise((resolve, reject) =>
//         api.download(params, (ret, err) => (err ? reject(err) : resolve(ret))),
//     );
