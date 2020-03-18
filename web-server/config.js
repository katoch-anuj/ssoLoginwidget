let config = {
    dev: {
        staticPath: '//localhost/public/',
        apiEndPoint: '//localhost/tpapi',
    },

    qa: {
        staticPath: '/public/',
        apiEndPoint: '//qa.timespoints.com/tpapi',
    },
    stg: {
        staticPath: '/public/',
        apiEndPoint: '//test.timespoint.com/tpapi',
    },
    prod: {
        staticPath: '//image.timespoints.iimg.in/static/public/',
        apiEndPoint: '//tpapi.timespoints.com',
    }
}