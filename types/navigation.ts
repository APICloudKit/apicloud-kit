import { ObjectLiteral } from './common';
import { Rect } from './apiParams';

export interface INavbarFrameQuery {
    type?: string;
    title?: string;
    pageName?: string;
    rightText?: string;
    height?: number;
    hasNoBack?: boolean;
    isTransparent?: boolean;
    icon?: 'message';
    [query: string]: string | number | boolean | undefined;
}

export interface INavigateToOptions<Q> {
    query?: Q;
    navbarInfo?: INavbarFrameQuery;
    frameGroupActiveIndex?: number;
}

export type IPage = {
    frameQuery?: ObjectLiteral;
    frameGroup?: {
        url?: string;
        frameQuery?: ObjectLiteral;
    }[];
    frameRect?: Rect;
    frameBgColor?: string;
    navbarInfo: INavbarFrameQuery;
};
