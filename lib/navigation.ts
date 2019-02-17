// import { queryStringify } from './util';
import { ak } from '.';
import { Navigation } from '../types/navigation';

export const navigateToFactory = <Q>(
    pageName: string,
    pages: { [k: string]: Navigation.IPage },
    options?: Navigation.INavigateToOptions<Q>,
) => async () => {
    const config = pages[pageName];
    const winName = `${pageName}Win`;
    // const frameName = `${pageName}Frame`;
    // const query = {
    //     ...(options && options.query),
    // };

    // @todo env

    // const queryStr = queryStringify(query);
    const navbarInfo = (options && options.navbarInfo) || {};
    ak.openWin<void, Navigation.WinPageParam<string>>({
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
