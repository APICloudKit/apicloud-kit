import {
    OpenWinParams,
    ApiRes,
    OpenFrameParams,
    OpenFrameGroupParams,
    BringFrameToFrontParams,
    SetFrameGroupIndexParams,
    DownloadParams,
    DownloadCb,
} from './apiParams';

export namespace api2 {
    export declare function openWin<T, T2>(p: OpenWinParams<T, T2>): ApiRes;
    export declare function openFrame<T, T2>(p: OpenFrameParams<T, T2>): ApiRes;
    export declare function openFrameGroup<T1, T2>(
        p: OpenFrameGroupParams<T1, T2>,
    ): ApiRes;
    export declare function closeWin(): ApiRes;
    export declare function closeFrame(): ApiRes;
    export declare function closeFrameGroup(name: string): ApiRes;
    export declare function bringFrameToFront(
        p: BringFrameToFrontParams,
    ): ApiRes;
    export declare function setFrameGroupIndex(
        p: SetFrameGroupIndexParams,
    ): ApiRes;
    export declare function closeToWin(name: string): ApiRes;
    export declare function download(p: DownloadParams, cb: DownloadCb): ApiRes;
    // export declare function getPrefs<T>(p: T extends {
    //     key:string;
    // }):Promise<any>;
}
