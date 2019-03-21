import { getApi } from '../util';

export const qrcodeScanner = () =>
    getApi(api => {
        const scanner = api.require('FNScanner');
        const asyncMethods = [
            'open',
            'openScanner',
            'openView',
            'decodeImg',
            'encodeImg',
        ];
        const methods = [
            'onResume',
            'onPause',
            'setFrame',
            'closeView',
            'switchLight',
        ];
        let myScanner = {};
        asyncMethods.forEach(el => {
            myScanner[el] = params =>
                new Promise((resolve, reject) =>
                    scanner[el](params, (ret, err) => {
                        if (err) return reject(err);
                        if (ret.eventType) {
                            if (ret.eventType === 'success')
                                return resolve(ret);
                        } else {
                            resolve(ret);
                        }
                    }),
                );
        });
        methods.forEach(el => {
            myScanner[el] = scanner;
        });

        return myScanner;
    });
