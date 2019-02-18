import { AK } from './api.interface';

export namespace akEnv {
    type Env = 'development' | 'test' | 'production' | 'preProduction';

    declare const saveAuthToken: (
        token: string,
        authTokenKey?: string,
    ) => AK.ApiRes<true>;

    declare const getAuthToken: (
        authTokenKey?: string,
    ) => Promise<string | null>;
}
