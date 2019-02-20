import { openWin } from './api';

export const navigateToFactory = (
    pageName,
    getPages,
    options = {},
) => async () => {
    const config = (await getPages())[pageName];
    const winName = `${pageName}Win`;

    // @todo env

    let navbarInfo = (options && options.navbarInfo) || {};
    navbarInfo = Object.assign(config.navbarInfo, navbarInfo);
    const query = Object.assign(config.query || {}, options.query, navbarInfo);
    openWin({
        url: '/Win',
        name: winName,
        pageParam: {
            name: pageName,
            frames: config.frames,
            query,
            hasNavbar: config.hasNavbar !== false,
            hasTabbar: !!config.hasTabbar,
            cannotClose: !!config.cannotClose,
        },
        query,
        slidBackEnabled: config.cannotClose !== true,
        // progress: {
        //     type: 'default',
        // },
    });
    // || (location.href = `/frames/${frameName}?${queryStr}`);
};
