import { queryStringify } from './util';
import { ak } from '.';
import { WinPageParam } from '../types/win';
import { IPage, INavigateToOptions } from '../types/navigation';

export const navigateToFactory = <Q>(
    pageName: string,
    pages: { [k: string]: IPage },
    options?: INavigateToOptions<Q>,
) => async () => {
    const config = pages[pageName];
    const winName = `${pageName}Win`;
    const frameName = `${pageName}Frame`;
    const query = {
        ...(options && options.query),
    };
    // const envs = await (async () => {
    //     try {
    //         return await getEnv();
    //     } catch (e) {
    //         return { client: '', server: '' };
    //     }
    // })();
    // envs && Object.assign(query, { apiEnv: `${envs.client}-${envs.server}` });
    const queryStr = queryStringify(query);
    const navbarInfo = (options && options.navbarInfo) || {};
    ak.openWin<void, WinPageParam<string>>({
        url: '/Win',
        name: winName,
        pageParam: {
            name: pageName,
            url: `/frames/${frameName}`,
            frameQuery: Object.assign(config.frameQuery || {}, query),
            frameRect: config.frameRect,
            navbarInfo: Object.assign(config.navbarInfo, navbarInfo),
            frameGroup: config.frameGroup,
            frameGroupActiveIndex: options && options.frameGroupActiveIndex,
        },
        progress: {
            type: 'default',
        },
    }) || (location.href = `/frames/${frameName}?${queryStr}`);
};
