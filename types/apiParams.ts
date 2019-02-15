import { ObjectLiteral } from './common';

export interface ApiRes {}

export interface OpenWinParams<T, T2> extends IOpenFrameOrWinCommon<T, T2> {
    rect?: Rect;
}

export interface OpenFrameParams<T, T2> extends IOpenFrameOrWinCommon<T, T2> {}

export interface IOpenFrameOrWinCommon<T, T2> {
    name: string;
    url: string;
    query?: T;
    data?: ObjectLiteral;
    rect?: Rect;
    pageParam?: T2;
    useWKWebView?: boolean;
    bounces?: boolean;
    bgColor?: string;
    slidBackEnabled?: boolean;
    slidBackType?: 'full' | 'edge';
    progress?: {
        type?: 'page' | 'default';
        title?: string;
        text?: string;
        color?: string;
    };
}

export interface Rect {
    x?: number;
    y?: number;
    w?: number | string;
    h?: number | string;
    marginLeft?: number; // 相对父 window 左外边距的距离
    marginTop?: number; // 相对父 window 上外边距的距离
    marginBottom?: number; // 相对父 window 下外边距的距离
    marginRight?: number; // 相对父 window 右外边距的距离
}

export interface OpenFrameGroupParams<T, T2> {
    name: string;
    rect: Rect;
    frames: {
        name: string;
        url: string;
        pageParam?: T2;
        query?: T;
        useWKWebView?: boolean;
        bgColor?: string;
        bounces?: boolean;
    }[];
}

export interface CloseFrameGroupParams {}

export interface BringFrameToFrontParams {
    from: string;
    to?: string;
}

export interface SetFrameGroupIndexParams {
    index: number;
    name: string;
    scroll?: boolean;
}

export interface DownloadParams {
    url: string;
    savePath?: string;
    cache?: boolean;
    report?: boolean;
    allowResume?: boolean;
}

export type DownloadCb = (
    ret: {
        filesize: number;
        savePath: string;
    },
    err: any,
) => void;
