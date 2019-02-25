import { AK } from './api.interface';

export declare namespace ak {
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
    const safeArea: AK.GetSafeAreaRes;

    function getPageParam<T>(): T | false;
    function getFrameName(): string | false;
    function getWinName(): string | false;
    function getSafeArea(): AK.GetSafeAreaRes;
    function getSystemType(): AK.SystemType;
    function getWindows(): AK.GetWindowsRes;
    function getFrames(): AK.GetFramesRes;

    function onKeyBack(cb: () => void): AK.ApiRes<true>;
    function onNoticeclicked(cb: (ret: any) => void): AK.ApiRes<true>;
    function makePhoneCall(number: string): AK.ApiRes<true>;
    function openWin<Q, Param>(
        params: AK.OpenFrameParams<Q, Param>,
    ): AK.ApiRes<true>;
    function openFrame<T, T2>(
        params: AK.OpenFrameParams<T, T2>,
    ): AK.ApiRes<true>;
    function closeFrame(): AK.ApiRes<true>;
    function closeFrameGroup(name: string): AK.ApiRes<true>;
    function setFrameAttr(params: AK.SetFrameAttrParams): AK.ApiRes<true>;
    function setFrameGroupAttr(p: AK.SetFrameGroupAttrParams): AK.ApiRes<true>;
    function bringFrameToFront(
        params: AK.BringFrameToFrontParams,
    ): AK.ApiRes<true>;
    function openFrameGroup<T, T2>(
        params: AK.OpenFrameGroupParams<T, T2>,
        cb: AK.OpenFrameGroupCb,
    ): AK.ApiRes<true>;
    function setFrameGroupIndex(
        params: AK.SetFrameGroupIndexParams,
    ): AK.ApiRes<true>;
    function closeWin(name?: string): AK.ApiRes<true>;
    function closeToWin(name: string): AK.ApiRes<true>;
    function imageCache(params: AK.ImageCacheParams): AK.ApiRes<ImageCacheRes>;
    function download(params: AK.DownloadParams): AK.ApiRes<DownloadRes>;
    function cancelDownload(p: AK.CancelDownloadParams): AK.ApiRes<true>;
    function sendEvent<T>(name: T['name'], args?: T['value']): AK.ApiRes<true>;
    function on<T>(
        name: T['name'],
        cb: (value: T['value']) => void,
    ): AK.ApiRes<true>;
    function setRefreshHeaderInfo(
        params: AK.SetRefreshHeaderInfoParams,
        cb: () => void,
    ): AK.ApiRes<true>;
    function refreshHeaderLoadDone(): AK.ApiRes<true>;

    function getPicture(
        params: AK.GetPictureParams,
        cb: AK.GetPictureCb,
    ): AK.ApiRes<true>;
    function alert(params: AK.AlertParams, cb?: AK.AlertCb): AK.ApiRes<true>;
    function confirm(p: AK.ConfirmParams, cb?: AK.ConfirmRes): AK.ApiRes<true>;
    function showProgress(p: AK.ShowProgressParams): AK.ApiRes<true>;
    function hideProgress(): AK.ApiRes<true>;
    function toast(p: AK.ToastParams): AK.ApiRes<true>;
    function execScript(p: AK.ExecScriptParams): AK.ApiRes<true>;
    function setPrefs<T extends AK.Prefs<T['value']>>(p: T): AK.ApiRes<true>;
    export function getPrefs<T extends AK.Prefs<T['value']>>(
        p: T,
    ): Promise<T['value'] | null>;
    function removePrefs<T extends AK.Prefs<T['value']>>(p: T): AK.ApiRes<true>;
    function rebootApp(): AK.ApiRes<true>;
    /**
     * 设置指定 frame 的页面加载监听，仅在 window 中调用生效，可以对多个 frame 进行监听
     */
    function setFrameClient(p: AK.SetFrameClientParams): AK.ApiRes<true>;
    /**
     * 获取当前所有打开的window。该方法为同步方法。
     */
    function windows(): AK.ApiRes<WindowsRes>;
    /**
     * 获取当前window中所有打开的frame（包括frameGroup中的frame）。该方法为同步方法。
     */
    function frames(): AK.ApiRes<FramesRes>;
    /**
     * 在指定 window 或者 frame 中加载HTML数据，对于 frameGroup 里面的 frame 也有效。
     */
    function loadData(): AK.ApiRes<true>;

    function ajax(p: AjaxParams): AK.ApiRes<AjaxRes>;
    function cancelAjax(p: AK.CancelAjaxParams): AK.ApiRes<true>;
    function addEventListener<T>(
        p: AK.AddEventListenerParams,
        cb: AK.AddEventListenerCb<T>,
    ): AK.ApiRes<true>;
    function setStatusBarStyle(style: AK.StatusBarStyle): AK.ApiRes<true>;
}

// third
export declare namespace ak {
    function getJiGuangPush(): AK.ApiRes<AK.JiGuangPush>;
    function getWx(): AK.ApiRes<Wx>;
    function getClipBoard(): AK.ApiRes<AK.Clipboard>;
}
