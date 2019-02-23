import { AK } from './api.interface';

export namespace akEnv {
    type Env = 'development' | 'test' | 'production' | 'preProduction';

    type ClientEnv = Env | 'package';

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

    type EnvStore = {
        client: ClientEnv;
        server: Env;
        isRemember: boolean;
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
