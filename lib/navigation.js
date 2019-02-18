import { openWin } from './api';

export const navigateToFactory = (pageName, getPages, options) => async () => {
    const config = getPages()[pageName];
    console.log(config);
    const winName = `${pageName}Win`;
    // const frameName = `${pageName}Frame`;
    // const query = {
    //     ...(options && options.query),
    // };

    // @todo env

    // const queryStr = queryStringify(query);
    const navbarInfo = (options && options.navbarInfo) || {};
    openWin({
        url: '/Win',
        name: winName,
        pageParam: {
            name: pageName,
            navbarInfo: Object.assign(config.navbarInfo, navbarInfo),
            frames: config.frames,
        },
        progress: {
            type: 'default',
        },
    });
    // || (location.href = `/frames/${frameName}?${queryStr}`);
};
