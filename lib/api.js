import { getQueryUrl, getApi } from './util';

/**
 * constants
 */
export const getPageParam = () => getApi(api => api.pageParam);

export const getFrameName = () => getApi(api => api.frameName);

export const getSafeArea = () => getApi(api => api.safeArea);

export const getWinName = () => getApi(api => api.winName);

/**
 * methods
 */
export const openWin = p =>
    getApi(api =>
        api.openWin({
            ...p,
            ...getQueryUrl(p.url, p.query),
            useWKWebView: true,
        }),
    );

export const openFrame = p =>
    getApi(api =>
        api.openFrame({
            ...p,
            ...getQueryUrl(p.url, p.query),
            useWKWebView: true,
        }),
    );

export const openFrameGroup = (params, cb) =>
    getApi(api => api.openFrameGroup(params, cb));

export const closeToWin = name => getApi(api => api.closeToWin(name));

export const closeWin = () => getApi(api => api.closeWin());

export const sendEvent = (name, value) =>
    getApi(api => api.sendEvent(name, value));

export const on = (name, cb) =>
    getApi(api => api.addEventListener({ name }, ({ value }) => cb(value)));

export const setRefreshHeaderInfo = (params, cb) =>
    getApi(api =>
        api.setRefreshHeaderInfo({ bgColor: '#f8f8f8', ...params }, cb),
    );

export const refreshHeaderLoadDone = () =>
    getApi(api => api.refreshHeaderLoadDone());

export const alert = params => getApi(api => api.alert(params));

export const confirm = (p, cb) => getApi(api => api.confirm(p, cb));

export const showProgress = p => getApi(api => api.showProgress(p));

export const hideProgress = _ => getApi(api => api.hideProgress());

export const toast = p => getApi(api => api.toast(p));

export const execScript = p => getApi(api => api.execScript(p));

// export const download = (params: DownloadParams) =>
//     new Promise((resolve, reject) =>
//         api.download(params, (ret, err) => (err ? reject(err) : resolve(ret))),
//     );
