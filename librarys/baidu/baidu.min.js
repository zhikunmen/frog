var baidu = {
    checkSession: function (object) {
        swan.checkSession({
            success: (res) => {
                object.success(res)
            },
            fail: (error) => {
                object.fail(error)
            }
        });
    },
    login: function (object) {
        swan.login({
            success: (res) => {
                object.success(res)
            },
            fail: (error) => {
                object.fail(error)
            }
        });
    },
    getUserInfo: function (object) {
        swan.getUserInfo({
            swanIdList: object.swanIdList,
            success: (res) => {
                object.success(res)
            },
            fail: (error) => {
                object.fail(error)
            }
        });
    },
    authorize: function (object) {
        swan.authorize({
            scope: object.scope,
            success: (res) => {
                object.success(res)
            },
            fail: (error) => {
                object.fail(error)
            }
        });
    },
    shareAppMessage: function (title, imageUrl) {
        swan.shareAppMessage({
            title: title,
            imageUrl: imageUrl
        });
    },
    createBannerAd: function (params) {
        var bannerAd = swan.createBannerAd({
            adUnitId: params.adUnitId,
            appSid: params.appSid,
            style: params.style
        });
        return bannerAd;
    },
    createRewardedVideoAd: function (params) {
        var bannerAd = swan.createRewardedVideoAd({
            adUnitId: params.adUnitId,
            appSid: params.appSid,
        });
        return bannerAd;
    },

    getSystemInfoSync: function () {
        let data = swan.getSystemInfoSync();
        return data;
    },
    createRecommendationButton: function (params) {
        var recommendationButton = swan.createRecommendationButton({
            type: params.type,
            style: params.style
        });
        return recommendationButton;
    }
}

window["baidu"] = baidu;