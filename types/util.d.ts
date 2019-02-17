export namespace akUtil {
    declare function clientDidInit(cb: () => void, beforeCb?: () => void): void;

    declare function checkIsApiCloud(): boolean;

    declare function getSafeAreaBottom(): number;

    declare function queryStringify<T>(): T;

    declare function getQueryUrl(url, query): { url: string };
}
