import { openWin } from './api';

export const navigateToFactory = (
    pageName,
    getPages,
    options = {},
) => async () => {
    const config = getPages()[pageName];
    const winName = `${pageName}Win`;
    // const frameName = `${pageName}Frame`;
    // const query = {
    //     ...(options && options.query),
    // };

    // @todo env

    // const queryStr = queryStringify(query);
    let navbarInfo = (options && options.navbarInfo) || {};
    navbarInfo = Object.assign(config.navbarInfo, navbarInfo);
    const query = Object.assign(config.query || {}, options.query, navbarInfo);
    openWin({
        url: '/Win',
        name: winName,
        pageParam: {
            name: pageName,
            // navbarInfo: Object.assign(config.navbarInfo, navbarInfo),
            frames: config.frames,
            query,
        },
        query,
        // progress: {
        //     type: 'default',
        // },
    });
    // || (location.href = `/frames/${frameName}?${queryStr}`);
};
