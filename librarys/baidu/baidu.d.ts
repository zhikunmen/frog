export as namespace baidu;

export function checkSession(Object: {
    success?: (res: any) => void,
    fail?: (error: any) => void,
    complete?: () => void
}): void;

export function login(Object: {
    success?: (res: any) => void,
    fail?: (error: any) => void,
    complete?: () => void
}): void;

export function getUserInfo(Object: {
    swanIdList?: any,
    success?: (res: any) => void,
    fail?: (err: any) => void,
    complete?: () => void,
}): void;

export function authorize(Object: {
    scope?: any,
    success?: (res: any) => void,
    fail?: (err: any) => void,
    complete?: () => void,
}): void;

export function shareAppMessage(title, imageUrl): void;

export function createBannerAd(params: {
    adUnitId?: string,
    appSid?: string,
    style?: any
}): any;

export function createRewardedVideoAd(params: {
    adUnitId?: string,
    appSid?: string
}): any;

export function getSystemInfoSync(): any;

export function createRecommendationButton(params: {
    type?: string,
    style?: any
}): any;


