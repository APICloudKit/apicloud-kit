import { AK } from './api.interface';

export namespace akEnv {
    type Env = 'development' | 'test' | 'production' | 'preProduction';

    type UrlConfig = {
        auth: {
            baseURL: string;
            client_id: string;
            client_secret: string;
        };
        business: {
            baseURL: string;
        };
    };

    type EnvStoreConfig = {
        client: string;
        server: UrlConfig;
        isRemember?: boolean;
    };

    type EnvStore = {
        current: Env;
        config: { [key in Env]: EnvStoreConfig };
    };

    declare const saveAuthToken: (
        token: string,
        authTokenKey?: string,
    ) => // @bug ?
    AK.ApiRes<true>;

    declare const getAuthToken: (
        authTokenKey?: string,
    ) => Promise<string | null>;

    declare const rmAuthToken: (authTokenKey?: string) => Promise<void | null>;

    declare const getEnv: () => Promise<EnvStore | null>;

    declare const setEnv: (value: EnvStore) => Promise<void>;
}
