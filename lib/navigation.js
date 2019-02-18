import { openWin } from './api';

export const navigateToFactory = (pageName, getPages, options) => async () => {
    console.log(pageName);
    const config = getPages()[pageName];
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
            query: config.query,
        },
        progress: {
            type: 'default',
        },
    });
    // || (location.href = `/frames/${frameName}?${queryStr}`);
};
