import { getApi } from '../util';

export const jiGuangPush = () =>
    getApi(api => {
        const jgPush = api.require('ajpush');
        const push = {};
        push.init = () =>
            new Promise((resolve, reject) =>
                jgPush.init(ret => (ret.status ? resolve() : reject())),
            );

        push.getRegistrationId = () =>
            new Promise(resolve =>
                jgPush.getRegistrationId(ret => resolve(ret.id)),
            );

        push.bindAliasAndTags = p =>
            new Promise(resolve =>
                jgPush.bindAliasAndTags(p, ret => resolve(ret.statusCode)),
            );

        return {
            ...push,
            onPause: jgPush.onPause,
            onResume: jgPush.onResume,
            setListener: jgPush.setListener,
            stopPush: jgPush.stopPush,
        };
    });
