import { getQueryUrl, getApi, jsonParse } from './util';

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
    getApi(api => {
        const params = {
            ...p,
            ...getQueryUrl(p.url, p.query),
            useWKWebView: true,
        };
        return api.openWin(params);
    });

export const openFrame = p =>
    getApi(api => {
        const param = {
            ...p,
            ...getQueryUrl(p.url, p.query),
            useWKWebView: true,
        };
        return api.openFrame(param);
    });

export const openFrameGroup = (p, cb) =>
    getApi(api => {
        p.frames = p.frames.map(el => ({
            ...el,
            ...getQueryUrl(el.url, el.query),
            useWKWebView: true,
        }));
        return api.openFrameGroup(p, cb);
    });

export const setFrameAttr = params => getApi(api => api.setFrameAttr(params));

export const setFrameGroupAttr = p => getApi(api => api.setFrameGroupAttr(p));

export const setFrameGroupIndex = params =>
    getApi(api => api.setFrameGroupIndex(params));

export const closeToWin = name => getApi(api => api.closeToWin({ name }));

export const closeWin = name =>
    getApi(api => (name ? api.closeWin({ name }) : api.closeWin()));

export const sendEvent = (name, value) =>
    getApi(api => api.sendEvent({ name, extra: value }));

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

export const setPrefs = p => getApi(api => api.setPrefs(p));

export const getPrefs = p =>
    getApi(
        api =>
            new Promise(resolve =>
                api.getPrefs(p, ({ value }) => resolve(jsonParse(value))),
            ),
    );

// @bug;
export const getPrefsSync = p =>
    getApi(api => api.getPrefs({ key: p.key, sync: true }) || null);

export const removePrefs = p => getApi(api => api.removePrefs(p));

export const makePhoneCall = number =>
    getApi(api => api.call({ type: 'tel_prompt', number }));
// export const download = (params: DownloadParams) =>
//     new Promise((resolve, reject) =>
//         api.download(params, (ret, err) => (err ? reject(err) : resolve(ret))),
//     );
