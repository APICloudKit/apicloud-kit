import { AK } from './api.interface';

export namespace akUtil {
    declare function clientDidInit(
        cb: () => void,
        opts?: {
            // statusBarStyle?: AK.StatusBarStyle;
        },
    ): void;

    declare function checkIsAPICloud(): boolean;

    declare function getSafeAreaBottom(): number;

    declare function queryStringify<T>(): T;

    declare function getQueryUrl(url, query): { url: string };

    declare function getScript<T>(path: string, varName: string): Promise<T>;
}
