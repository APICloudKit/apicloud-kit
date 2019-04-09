export interface apicloudConfig {
    id: string;
    version: string;
    name: {
        text: string;
    };
    description: {
        text: string;
    };
    author: {
        text: string;
        email: string;
        href: string;
    };
    content: {
        src: string;
    };
    preference: { [key in Preference]?: string | boolean };
    feature: {
        [key in Feature]?: {
            [key: string]: string;
        }
    };
    permission: Permission[];
    access: {
        origin: string;
    };
}

type Permission = 'location' | 'internet' | 'fileSystem';

type Preference =
    | 'appBackground'
    | 'windowBackground'
    | 'frameBackgroundColor'
    | 'autoLaunch'
    | 'autoUpdate'
    | 'smartUpdate'
    | 'debug'
    | 'statusBarAppearance';

type Feature = 'ajpush' | 'wx';
