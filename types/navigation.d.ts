import { ObjectLiteral } from './common';

export namespace Navigation {
    interface INavbarFrameQuery {
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

    interface INavigateToOptions<Q> {
        query?: Q;
        navbarInfo?: INavbarFrameQuery;
        frameGroupActiveIndex?: number;
    }

    type IPage = {
        frameQuery?: ObjectLiteral;
        frameGroup?: {
            url?: string;
            frameQuery?: ObjectLiteral;
        }[];
        frameRect?: Rect;
        frameBgColor?: string;
        navbarInfo: INavbarFrameQuery;
    };
}
