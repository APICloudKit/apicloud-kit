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
                    scanner[el](params, (ret, err) =>
                        err ? reject(err) : resolve(ret),
                    ),
                );
        });
        methods.forEach(el => {
            myScanner[el] = scanner;
        });

        return myScanner;
    });
