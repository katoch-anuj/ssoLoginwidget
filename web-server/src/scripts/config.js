export const config = {
    dev: {
        staticPath: '//localhost/public/',
        apiEndPoint: '//localhost/tpapi',
    },

    qa: {
        staticPath: '/public/',
        apiEndPoint: '//qa.timespoints.com/tpapi',
    },
    stg: {
        staticPath: '//test-img.timespoints.com/static/tpwidgets',
        apiEndPoint: '//test.timespoints.com/tpapi/'
    },
    prod: {
        staticPath: '//image.timespoints.iimg.in/tpwidgets',
        apiEndPoint: '//tpapi.timespoints.com'
    }
}
const hostname = window && window.location && window.location.hostname;
if (hostname === 'www.timespoints.com') {
    env = 'prod'
} else if (hostname === 'test.timespoint.com') {
    env = 'stg'
} else if (hostname == 'localhost') {
    env = 'dev'
} else if (hostname == 'load.timespoints.com') {
    env = 'load'
} else if (hostname == 'qa2.timespoints.com') {
    env = 'qa2'
} else if (hostname == 'uat.timespoints.com') {
    env = 'uat'
}
else {
    env = 'qa'
}