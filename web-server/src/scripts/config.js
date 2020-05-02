export const config = {
    dev: {
        staticPath: '//localhost:9008/',
        apiEndPoint: '//localhost/tpapi',
        jssoUrl:"https://jssocdnstg.indiatimes.com/crosswalk/jsso_crosswalk_0.5.81.js",
        versionapi:"https://test.timespoints.com/tpapi"
    },


    qa: {
        staticPath: '/public/',
        apiEndPoint: '//qa.timespoints.com/tpapi',
    },
    test: {
        staticPath: '//test-img.timespoints.com/static/sso',
        apiEndPoint: '//test.timespoints.com/tpapi/',
         jssoUrl:"//jssocdnstg.indiatimes.com/crosswalk/jsso_crosswalk_0.5.81.js",
        versionapi:"https://test.timespoints.com/tpapi"
    },
    production: {
        staticPath: '//image.timespoints.iimg.in/static/ssoWidget',
        apiEndPoint: '//tpapi.timespoints.com',
        jssoUrl:"//jssocdn.indiatimes.com/crosswalk/jsso_crosswalk_legacy_0.5.8.min.js",
        versionapi:"//tpapi.timespoints.com"
    }
}