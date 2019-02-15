import { Rect } from './apiParams';
import { ObjectLiteral } from './common';
import { INavbarFrameQuery } from './navigation';

export interface WinPageParam<P> {
    name: P;
    url: string;
    hasNoNavbar?: boolean;
    navbarInfo: INavbarFrameQuery;
    frameQuery?: ObjectLiteral;
    frameRect?: Rect;
    frameBgColor?: string;
    frameGroup?: {
        url?: string;
        frameQuery?: ObjectLiteral;
    }[];
    frameGroupActiveIndex?: number;
}
