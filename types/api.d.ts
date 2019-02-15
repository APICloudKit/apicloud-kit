export namespace api {
    /**
     * 应用的 ID，可以在网站控制台概览里面查看，字符串类型
     */
    const appId: string;
    const appName: string;
    const deviceModel: string;
    const connectionType: string;
    const screenWidth: number;
    const screenHeight: number;
    /**
     * 当前应用状态栏是否支持沉浸式效果，布尔类型
     */
    const statusBarAppearance: boolean;
    const pageParam: any;

    function onKeyBack(cb: () => void): ApiRes<true>;
    function onNoticeclicked(cb: (ret: any) => void): ApiRes<true>;
    function setStatusBarStyle(style: string): ApiRes<true>;
    function makePhoneCall(number: string): ApiRes<true>;
    function openWin<T, T2>(params: IOpenFrame<T, T2>): ApiRes<true>;
    function openFrame<T, T2>(params: IOpenFrame<T, T2>): ApiRes<true>;
    function closeFrame(): ApiRes<true>;
    function closeFrameGroup(name: string): ApiRes<true>;
    function setFrameAttr(params: SetFrameAttrParams): ApiRes<true>;
    function setFrameGroupAttr(p: SetFrameGroupAttrParams): ApiRes<true>;
    function bringFrameToFront(params: BringFrameToFrontParams): ApiRes<true>;
    function openFrameGroup<T, T2>(
        params: IOpenFrameGroup<T, T2>,
        cb: OpenFrameGroupCb,
    ): ApiRes<true>;
    function setFrameGroupIndex(params: SetFrameGroupIndexParams): ApiRes<true>;
    function closeWin(): ApiRes<true>;
    function closeToWin(name: string): ApiRes<true>;
    function imageCache(params: ImageCacheParams): ApiRes<ImageCacheRes>;
    function download(params: DownloadParams): ApiRes<DownloadRes>;
    function cancelDownload(p: CancelDownloadParams): ApiRes<true>;
    function sendEvent<T>(name: string, args?: T): ApiRes<true>;
    function on<T>(name: string, cb: (ret: { value: T }) => void): ApiRes<true>;
    function setRefreshHeaderInfo(
        params: SetRefreshHeaderInfoParams,
        cb: () => void,
    ): ApiRes<true>;
    function refreshHeaderLoadDone(): ApiRes<true>;
    function getSafeArea(): GetSafeAreaRes;
    function getPageParam<T>(): T | false;
    function getFrameName(): string | false;
    function getWinName(): string | false;
    function getPicture(
        params: GetPictureParams,
        cb: GetPictureCb,
    ): ApiRes<true>;
    function alert(params: AlertParams, cb?: AlertCb): ApiRes<true>;
    function confirm(p: ConfirmParams, cb?: ConfirmRes): ApiRes<true>;
    function showProgress(p: ShowProgressParams): ApiRes<true>;
    function hideProgress(): ApiRes<true>;
    function toast(p: ToastParams): ApiRes<true>;
    function execScript(p: ExecScriptParams): ApiRes<true>;
    function getClipBoard(): Clipboard;
    function setPrefs<T extends Prefs<T['value']>>(p: T): ApiRes<true>;
    function getPrefs<T extends Prefs<T['value']>>(
        p: T,
    ): Promise<T['value'] | null>;
    function removePrefs<T extends Prefs<T['value']>>(p: T): ApiRes<true>;
    function rebootApp(): ApiRes<true>;
    /**
     * 设置指定 frame 的页面加载监听，仅在 window 中调用生效，可以对多个 frame 进行监听
     */
    function setFrameClient(p: SetFrameClientParams): ApiRes<true>;
    /**
     * 获取当前所有打开的window。该方法为同步方法。
     */
    function windows(): ApiRes<WindowsRes>;
    /**
     * 获取当前window中所有打开的frame（包括frameGroup中的frame）。该方法为同步方法。
     */
    function frames(): ApiRes<FramesRes>;
    /**
     * 在指定 window 或者 frame 中加载HTML数据，对于 frameGroup 里面的 frame 也有效。
     */
    function loadData(): ApiRes<true>;

    function ajax(p: AjaxParams): ApiRes<AjaxRes>;
    function cancelAjax(p: CancelAjaxParams): ApiRes<true>;
}

export namespace apis {
    function getJiGuangPush(): ApiRes<JiGuangPush>;
    function getWx(): ApiRes<Wx>;
}
