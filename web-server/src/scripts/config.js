export const config = {
    dev: {
        staticPath: '//localhost:9008/',
        apiEndPoint: '//localhost/tpapi',
    },

    qa: {
        staticPath: '/public/',
        apiEndPoint: '//qa.timespoints.com/tpapi',
    },
    test: {
        staticPath: '//test-img.timespoints.com/static/sso1',
        apiEndPoint: '//test.timespoints.com/tpapi/'
    },
    production: {
        staticPath: '//image.timespoints.iimg.in/sso1',
        apiEndPoint: '//tpapi.timespoints.com'
    }
}
