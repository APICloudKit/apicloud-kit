export namespace AK {
    type ObjectLiteral = {
        [key: string]: any;
    };

    type ApiRes<T> = T | null;

    interface JiGuangPush {
        init(): Promise<void>;
        getRegistrationId(): Promise<string>;
        bindAliasAndTags(p: {
            alias?: string;
            tags?: string[];
        }): Promise<number>;
        onPause(): void;
        onResume(): void;
        setListener(
            cb: (ret: {
                id: string;
                title: string;
                content: string;
                extra: any;
            }) => void,
        ): void;
        stopPush(): void;
    }

    interface OpenFrameParams<Q, Param> {
        name: string;
        url: string;
        query?: Q;
        data?: ObjectLiteral;
        rect?: Rect;
        pageParam?: Param;
        useWKWebView?: boolean;
        bounces?: boolean;
        bgColor?: string;
        slidBackEnabled?: boolean;
        slidBackType?: 'full' | 'edge';
        progress?: {
            type?: 'page' | 'default';
            title?: string;
            text?: string;
            color?: string;
        };
    }

    interface OpenFrameGroupParams<T, T2> {
        name: string;
        rect: Rect;
        frames: {
            name: string;
            url: string;
            pageParam?: T2;
            query?: T;
            useWKWebView?: boolean;
            bgColor?: string;
            bounces?: boolean;
        }[];
    }

    interface RectBase {
        x?: number;
        y?: number;
        w?: number | string;
        h?: number | string;
    }

    interface RectMargin {
        marginLeft?: number; // 相对父 window 左外边距的距离
        marginTop?: number; // 相对父 window 上外边距的距离
        marginBottom?: number; // 相对父 window 下外边距的距离
        marginRight?: number; // 相对父 window 右外边距的距离
    }

    interface Rect extends RectBase, RectMargin {}

    interface SetFrameAttrParams {
        name: string;
        hidden?: boolean;
        bgColor?: string;
    }

    interface SetFrameGroupAttrParams {
        name: string;
        hidden?: boolean;
        scrollEnabled?: boolean;
        rect?: Rect;
    }

    interface BringFrameToFrontParams {
        from: string;
        to?: string;
    }

    type OpenFrameGroupCb = (ret: { name: string; index: number }) => void;

    interface SetFrameGroupIndexParams {
        index: number;
        name: string;
        scroll?: boolean;
    }

    interface ImageCacheParams {
        url: string;
        encode?: boolean;
        thumbnail?: boolean;
    }

    type ImageCacheRes = Promise<{ status: boolean; url: string }>;

    interface DownloadParams {
        url: string;
        savePath?: string;
        cache?: boolean;
        report?: boolean;
        allowResume?: boolean;
    }

    type DownloadRes = Promise<{
        filesize: number;
        savePath: string;
    }>;

    interface SetRefreshHeaderInfoParams {
        loadingImg?: string;
        bgColor?: string;
        textColor?: string;
        textDown?: string;
        textUp?: string;
        showTime?: boolean;
    }

    type GetSafeAreaRes = {
        top: number;
        left: number;
        bottom: number;
        right: number;
    } | null;

    interface GetPictureParams {
        /**
         * 图片源类型，从相册、图片库或相机获取图片
         */
        sourceType?: 'library' | 'camera' | 'album';
        /**
         * 返回图片类型，jpg或png
         */
        encodingType?: 'jpg' | 'png';
        /**
         * 媒体类型，图片或视频
         */
        mediaValue?: 'pic' | 'video' | 'all';
        /**
         * 返回数据类型，指定返回图片地址或图片经过base64编码后的字符串
         */
        destinationType?: 'url' | 'base64';
        /**
         * 选择前置或后置摄像头，取值范围（front、rear），只支持iOS
         */
        direction?: 'front' | 'rear';
        /**
         * 是否可以选择图片后进行编辑，支持iOS及部分安卓手机
         */
        allowEdit?: boolean;
        /**
         * 是否选择图片后进行预览，只支持iOS。
         */
        preview?: boolean;
        /**
         * 视频质量，调用相机录制视频时该参数生效。取值范围(low、medium、high)，质量越高，录制的视频文件占用存储空间越大。
         */
        videoQuality?: 'low' | 'medium' | 'high';
        /**
         * 压缩后的图片宽度，图片会按比例适配此宽度
         */
        targetWidth?: number;
        /**
         * 图片质量，只针对jpg格式图片（0-100整数）
         */
        quality?: number;
        /**
         * 压缩后的图片高度，图片会按比例适配此高度
         */
        targetHeight?: number;
        /**
         * 拍照或录制视频后是否保存到系统相册目录。注意此处仅是文件系统层面的操作，使用诸如“图库”App仍然有可能查看到。
         */
        saveToPhotoAlbum?: boolean;
        /**
         * 保存图片到自定义分组相册目录，相册不存在则会进行创建。
         */
        groupName?: string;
    }

    type GetPictureCb = (
        ret: {
            data: string; //图片路径
            base64Data: string; //base64数据，destinationType为base64时返回
            duration: number;
        },
        err: {
            msg: string;
        },
    ) => void;

    interface AlertParams {
        title?: string;
        msg: string;
        buttons?: string[];
    }

    type AlertCb = (ret: {
        // 从 1 开始
        buttonIndex: number;
    }) => void;

    interface ConfirmParams {
        title?: string;
        msg: string;
        /**
         * （可选项）按钮标题，若小于两个按钮，会补齐两个按钮；若大于三个按钮，则使用前三个按钮
         */
        buttons?: string[];
    }

    type ConfirmRes = (ret: {
        // 从 1 开始
        buttonIndex: number;
    }) => void;

    interface ShowProgressParams {
        title?: string;
        text?: string;
        modal?: boolean;
    }

    interface ToastParams {
        msg?: string;
        duration?: number;
        location?: 'top' | 'middle' | 'bottom';
        /**
         * （可选项）是否是全局的toast。若为false，toast将只在当前window范围可见；若为true，安卓手机上面弹出的位置将会固定在底部区域。
         */
        global?: boolean;
    }

    interface ExecScriptParams {
        name?: string;
        frameName?: string;
        script?: string;
    }

    interface ShareToWechatParams {
        scene: 'session' | 'timeline' | 'favorite';
        title: string;
        thumb: string;
        contentUrl: string;
        description: string;
    }

    interface Wx {
        isInstalled: () => Promise<boolean>;
        shareWebpage: (params: ShareToWechatParams) => Promise<boolean>;
    }

    interface Clipboard {
        get(): Promise<any>;
        set(value: string): Promise<void>;
        setListener(cb: (ret: { value: string; type: string }) => void): void;
        removeListener(): void;
    }

    interface Prefs<T> {
        key: string;
        value?: T;
    }

    interface SetFrameClientParams {
        frameName: string;
    }

    type SetFrameClientCb = (ret: {
        /**
         * 加载状态，数字类型，取值范围：0-开始加载；1-加载进度发生变化；2-结束加载；3-title发生变化；4-url发生变化
         */
        state: 0 | 1 | 2 | 3 | 4;
        progress?: number;
        title?: string;
        url?: string;
    }) => void;

    interface Windows {
        /**
         * window名字，字符串类型
         */
        name: string;
        /**
         * window中的子window，如drawerLayout中的leftPane和rightPane，JSON对象数组类型
         */
        children: Windows[];
    }

    type WindowsRes = Windows[];

    type FramesRes = {
        name: string;
        /**
         * 父窗口的名字，如果是frameGroup中的frame，该值为frameGroup的名字，字符串类型
         */
        parent: string;
    }[];

    interface LoadDataParams {
        /**
         * window 名称，若要跨 window ，该字段必须指定，首页的名称为 root
         */
        name?: string;
        /**
         * frame名称
         */
        frameName?: string;
        /**
         * 作为baseUrl，data中的html引用的资源文件根路径以该url为基础，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径
         */
        url?: string;
        /**
         * 页面加载的数据内容，可以为html片段或者整张html文件的数据
         */
        data?: string;
    }

    type RequestMethods =
        | 'get'
        | 'post'
        | 'put'
        | 'delete'
        | 'head'
        | 'options'
        | 'trace'
        | 'patch';

    interface AjaxParams {
        url: string;
        /**
         * 该字段用于传给cancelAjax方法来取消请求，如果传入该字段，请保证各个ajax的tag字段唯一
         */
        tag?: string;
        /**
         * 异步请求方法类型
         */
        method?: RequestMethods;
        /**
         * 是否缓存，若缓存，下次没网络时请求则会使用缓存，仅在get请求有效
         */
        cache?: boolean;
        /**
         * 超时时间，单位秒
         */
        timeout?: number;
        /**
         * 返回数据类型。若该字段传json，接收到服务器返回的数据后会尝试将其转换成JSON对象，如果无法转成JSON对象，将返回数据类型错误
         */
        dataType?: 'json' | 'text';
        /**
         * 当响应头里面没有返回字符集编码时，使用此编码来解析数据
         */
        charset?: 'utf-8';
        /**
         * 设置请求头数据。建议里面的key使用首字母大写的形式，如 User-Agent
         */
        headers?: any;
        /**
         * 是否实时返回上传文件进度
         */
        report?: boolean;

        /**
         * 是否需要返回所有 response 信息（包括响应头、消息体、状态码），为 true 时，返回的头信息获取方法(ret.headers)，消息体信息获取方法(ret.body)，状态码获取方法(ret.statusCode)
         */
        returnAll?: boolean;

        data: {
            /**
             * 以二进制流的方式提交文件。stream为文件路径（字符串类型），支持绝对路径，以及fs://、cache://、box://等文件路径协议。可直接使用其他端API返回的结果，如api.getPicture回调的ret.data等
             */
            stream: string;
            /**
             * 以纯文本的方式提交数据，body支持字符串及JSON对象。提交JSON对象时，需设置application/json类型的Content-Type头
             */
            body: any;
            /**
             * 以表单方式提交参数（JSON对象）, 如 {"field1": "value1", "field1": "value2"} (直接传JSON对像.)
             */
            values: any;
            /**
             * 以表单方式提交文件，支持多文件上传（JSON对象）,如 {"file": "path"}，也支持同一字段对应多文件：{"file":["path1","path2"]}。文件路径，支持绝对路径，以及fs://、cache://、box://等文件路径协议。可直接使用其他端API返回的结果，如api.getPicture回调的ret.data等.
             */
            files: {
                file: string | string[];
            };
        };

        certificate?: {
            /**
             * p12证书路径，支持fs://、widget://、cache://等文件路径协议，字符串类型
             */
            path: string;
            /**
             * 证书密码，字符串类型
             */
            password: string;
        };

        safeMode?: 'none' | 'both' | 'request' | 'response';
    }

    type AjaxRes = Promise<{
        ret: {
            statusCode: number;
            headers: any;
            body: any;
        };
    }>;

    interface CancelAjaxParams {
        tag: string;
    }

    interface CancelDownloadParams {
        url: string;
    }

    interface EventType {
        name: string;
        value: any;
    }

    interface AddEventListenerParams<T extends EventType> {
        name: T['name'];
    }

    type AddEventListenerCb<T> = (ret: { value: T }) => void;

    type SystemType = 'ios' | 'android';

    type StatusBarStyle = 'light' | 'dark';

    type GetWindowsRes = {
        name: string;
        children?: GetWindowsRes[];
    }[];

    type GetFramesRes = {
        name: string;
        parent?: GetFramesRes[];
    }[];

    type RequestMethods =
        | 'get'
        | 'post'
        | 'put'
        | 'delete'
        | 'head'
        | 'options'
        | 'trace'
        | 'patch';

    type RequestParams = {
        url: string;
        method?: RequestMethods;
        timeout?: number;
        dataType?: 'json' | 'text';
        headers?: any;
        returnAll?: boolean;
        data?: {
            body?: string;
            values?: any;
            files?: any;
        };
    };

    type RequestRes<T> = Promise<{
        statusCode: number;
        headers: { ['Set-Cookie']: string };
        body: T;
    }>;

    type QRCodeScannerOpenParams = {
        /**
         * （可选项）扫描结束后的提示音文件路径，要求本地路径（fs://、widget://），为保证兼容性，推荐使用 wav 格式的短音频文件
         */
        sound?: string;
        /**
         * （可选项）扫描页面是否自动旋转（横竖屏）
         */
        autorotation?: boolean;
        /**
         * （可选项）扫描的二维码/条形码图片是否自动保存到相册
         */
        saveToAlbum?: boolean;
        /**
         * (可选项) 字符串类型；竖屏时扫描线的颜色,支持支持rgb、rgba、#；
         */
        verticalLineColor?: string;
        /**
         * (可选项) 字符串类型；横屏时扫描线的颜色,支持支持rgb、rgba、#； (android不支持，android的横竖屏是一个颜色)
         */
        landscapeLineColor?: string;
        /**
         * (可选项) 字符串类型；二维码/条形码界面扫码界面底下的文字
         */
        hintText?: string;
        /**
         * (可选项) 灯光开启文字
         */
        lightText?: string;
        /**
         * (可选项) 灯光关闭文字
         */
        closeText?: string;
        /**
         * (可选项) 是否隐藏相册按钮
         */
        isAlbum?: boolean;
        /**
         * （可选项）文字样式
         */
        font?: {
            hintText?: {
                size: number; // 数字类型，二维码/条形码界面扫码界面底下的文字大小
                color: string; // 字符串类型；二维码/条形码界面扫码界面底下的文字颜色，支持#、rgb、rgba；默认：#FFFFFF
            };
            albumText?: {
                size: number; // 数字类型，相册按钮文字大小
                color: string; // 字符串类型；相册按钮文字颜色，支持#、rgb、rgba；默认：#FFFFFF
            };
            lightText?: {
                size: number; // 数字类型，灯光开启/关闭文字大小
                color: string; // 字符串类型；灯光开启/关闭文字颜色，支持#、rgb、rgba；默认：#FFFFFF
            };
        };
        saveImg?: {
            // 字符串类型；保存的文件路径；若路径不存在，则创建此路径，只支持fs://协议
            path: string;
            //（可选项）数字类型；生成图片的宽度，默认：200
            w?: number;
            //（可选项）数字类型；生成图片的高度，默认：200
            h?: number;
        };
    };

    type QRCodeScannerOpenRes = {
        ret: {
            eventType:  // 模块显示
                | 'show'
                // 访问摄像头失败
                | 'cameraError'
                // 访问相册失败
                | 'albumError'
                // 用户取消扫码
                | 'cancel'
                // 用户从系统相册选取二维码图片
                | 'selectImage'
                // 识别二维码/条码图片成功
                | 'success'
                // 扫码失败
                | 'fail';
            // 字符串类型；需要保存的二维码图片绝对路径（自定义路径
            imgPath: string;
            // 字符串类型；需要保存的二维码图片绝对路径（相册路径）
            albumPath: string;
            // 扫描的二维码/条形码信息
            content: string;
        };
    };

    type QRCodeScannerOpenViewParams = {
        rect: RectBase;
        rectOfInterest?: RectBase;
        sound?: string;
        saveToAlbum?: boolean;
        saveImg?: {
            // 字符串类型；保存的文件路径；若路径不存在，则创建此路径，只支持fs://协议
            path: string;
            //（可选项）数字类型；生成图片的宽度，默认：200
            w?: number;
            //（可选项）数字类型；生成图片的高度，默认：200
            h?: number;
        };
        /**
         * （可选项）连续扫描间隔；
         */
        interval?: number;
        /**
         * （可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
         */
        fixedOn?: number;
        /**
         * （可选项）模块是否随所属 window 或 frame 滚动;默认 true
         */
        fixed?: boolean;
    };

    type QRCodeScannerRes = {
        open(p: QRCodeScannerOpenParams): Promise<QRCodeScannerOpenRes>;
        openScanner(p: QRCodeScannerOpenParams): Promise<QRCodeScannerOpenRes>;
        openView(p: QRCodeScannerOpenViewParams): Promise<QRCodeScannerOpenRes>;
        /**
         * 通知当前本模块app进入回到前台。此时模块会进行一些资源的恢复操作，防止照相机回来之后黑屏
         */
        onResume(): void;
        /**
         * 通知当前本模块app进入后台。此时模块会进行一些资源的暂停存储操作，防止照相机回来之后黑屏
         */
        onPause(): void;
        /**
         * 重设可自定义的二维码/条形码扫描器的大小和位置
         */
        setFrame(p: RectBase): void;
        /**
         * 关闭自定义大小的二维码/条码扫描器
         */
        closeView(): void;
        /**
         * 二维码/条形码图片解码
         */
        decodeImg(p?: {
            sound?: string;
            path?: string;
        }): Promise<{
            /**
             * 是否解码成功
             */
            status: boolean;
            /**
             * 扫描的二维码/条形码信息
             */
            content: string;
        }>;

        /**
         * 将字符串生成二维码/条形码图片
         */
        encodeImg(p: {
            type?: 'bar_image' | 'qr_image';
            content?: string;
            saveToAlbum?: boolean;
            saveImg?: {
                // 字符串类型；保存的文件路径；若路径不存在，则创建此路径，只支持fs://协议
                path: string;
                //（可选项）数字类型；生成图片的宽度，默认：200
                w?: number;
                //（可选项）数字类型；生成图片的高度，默认：200
                h?: number;
            };
        }): Promise<{
            status: boolean;
            imgPath: string;
            albumPath: string;
        }>;

        /**
         * 打开/关闭闪光灯（在Android上，已打开扫码视图时有效）
         */
        switchLight(p: { status: 'on' | 'off' }): void;
    };
}
