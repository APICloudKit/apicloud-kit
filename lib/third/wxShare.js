import { getApi } from './util';

export const wxShare = () =>
    getApi(api => {
        const { isInstalled, shareWebpage } = api.require('wx');
        const wx = {};
        wx.isInstalled = () =>
            new Promise(resolve =>
                isInstalled(({ installed }) => resolve(installed)),
            );
        wx.shareWebpage = params =>
            new Promise((resolve, reject) =>
                shareWebpage(params, (ret, err) =>
                    err ? reject(err) : resolve(ret.status),
                ),
            );
        return wx;
    });
