import { openWin } from './api';

export const navigateToFactory = (
    pageName,
    getPages,
    options = {},
) => async () => {
    const config = (await getPages())[pageName];
    const winName = `${pageName}Win`;

    // @todo env

    const getUrl = u => `widget:/${u}/index.html`;
    const url = options.isPkg ? getUrl('/Win') : '/Win';

    let navbarInfo = (options && options.navbarInfo) || {};
    navbarInfo = Object.assign(config.navbarInfo, navbarInfo);
    const query = Object.assign(config.query || {}, options.query, navbarInfo);

    if (options.isPkg) {
        config.frames = config.frames.map(el => {
            return {
                ...el,
                ...(() => {
                    if (el.url) return { url: getUrl(el.url) };
                    if (el.frameGroup)
                        return {
                            frameGroup: el.frameGroup.map(el => ({
                                ...el,
                                url: getUrl(el.url),
                            })),
                        };
                })(),
            };
        });
    }

    openWin({
        url,
        name: winName,
        pageParam: {
            name: pageName,
            frames: config.frames,
            query,
            hasNavbar: config.hasNavbar !== false,
            hasTabbar: !!config.hasTabbar,
            cannotClose: !!config.cannotClose,
            statusBarStyle: config.statusBarStyle,
        },
        query,
        slidBackEnabled: config.cannotClose !== true,
        // progress: {
        //     type: 'default',
        // },
    });
    // || (location.href = `/frames/${frameName}?${queryStr}`);
};
