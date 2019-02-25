import { getApi } from './util';

export const clipBoard = () =>
    getApi(api => {
        const clipBoard = api.require('clipBoard');
        const myClipBoard = {
            set: value =>
                new Promise(resolve =>
                    clipBoard.set({ value }, ret => resolve(ret)),
                ),
            get: () =>
                new Promise(resolve => clipBoard.get(ret => resolve(ret))),
            setListener: clipBoard.setListener,
            removeListener: clipBoard.removeListener,
        };
        return myClipBoard;
    });
