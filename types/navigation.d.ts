import { ObjectLiteral } from './common';

export namespace Navigation {
    declare function navigateToFactory<Q>(
        pageName: string,
        pages: {
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
    };
}
