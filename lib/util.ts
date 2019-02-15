declare const window: any;

export const clientDidInit = (
    ctx: any,
    cb?: () => void,
    beforeCb?: () => void,
) => {
    const init = () => {
        setTimeout(() => {
            beforeCb && beforeCb();
            // apis.on<LoginSuccEvent>('loginSucc', async ({ value }) => {
            //     // await saveAuthAsync(value.token);
            //     // await setAuthAsync();
            //     return ctx.reload ? ctx.reload() : location.reload();
            // });
            // apis.on<RefreshEvent>('refresh', ({ value }) => {
            //     if (value.ctxName === apis.getFrameName()) {
            //         ctx.reload ? ctx.reload() : location.reload();
            //     }
            // });
            if (ctx.props.status === 401) {
                // @bug 最后应该改成客户端请求接口
                // return openLogin();
            }
            cb && cb();
        }, 100);
    };
    if (checkIsAPICloud()) {
        (window as any).apiready = init;
        return;
    }
    init();
};

export const checkIsAPICloud = () =>
    typeof window !== undefined && /apiEnv/.test(window.location.href);

export const queryStringify = (queryObj: any) => {
    return Object.keys(queryObj)
        .map(name => `${name}=${queryObj[name]}`)
        .join('&');
};

export const getQueriedUrl = (url: string, query?: any) => {
    return { url: query ? `${url}?${queryStringify(query)}` : url };
};
