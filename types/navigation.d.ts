import { ObjectLiteral } from './common';
import { AK } from './api.interface';

export namespace Navigation {
    declare function navigateToFactory<Q>(
        pageName: string,
        getPages: () => {
            [k: string]: IPage;
        },
        options?: INavigateToOptions<Q>,
    ): () => Promise<void>;

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

    interface WinPageParam<P> {
        name: P;
        hasNoNavbar?: boolean;
        navbarInfo?: Navigation.INavbarFrameQuery;
        frames?: Navigation.IPageFrames[];
        query: any;
        hasTabbar?: boolean;
        hasNavbar?: boolean;
    }

    interface IPageFrames {
        name: string;
        rect: AK.Rect;
        url?: string;
        query?: AK.ObjectLiteral;
        bgColor?: string;
        frameGroup?: {
            name: string;
            url: string;
            query?: AK.ObjectLiteral;
        }[];
        frameGroupActiveIndex?: number;
    }

    type IPage = {
        navbarInfo?: Navigation.INavbarFrameQuery;
        frameBgColor?: string;
        frames?: IPageFrames[];
        hasTabbar?: boolean;
        hasNavbar?: boolean;
    };
}
