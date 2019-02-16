import { getQueriedUrl } from './util';
import { AK } from '../types/api.interface';

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

// export const download = (params: DownloadParams) =>
//     new Promise((resolve, reject) =>
//         api.download(params, (ret, err) => (err ? reject(err) : resolve(ret))),
//     );
