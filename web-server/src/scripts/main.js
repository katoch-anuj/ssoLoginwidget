import { loadCSS } from 'fg-loadcss';

import {config} from "./config";
var assestPath=config[process.env.NODE_ENV];
function asyncRequest(methodType, uri, callback, postData, contentType, requestHeaders) {
    function handleReadyState(o, callback) {
        var poll = window.setInterval(function () {
            if (o && o.readyState == 4) {
                window.clearInterval(poll);
                if (callback) {
                    callback(o);
                }
            }
        }, 50);
    }
    var http;
    try {
        http = new XMLHttpRequest;
    } catch (e) {
        var msxml = ['MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'];
        for (var i = 0, len = msxml.length; i < len; ++i) {
            try {
                http = new ActiveXObject(msxml[i]);
                break;
            } catch (e) { }
        }
    }

    http.open(methodType, uri, true);

    if (contentType) {
        http.setRequestHeader("Content-Type", contentType);
    }

    if (requestHeaders) {
        var headerData = Object.keys(requestHeaders);
        for (var i = 0; i < headerData.length; i++) {
            http.setRequestHeader(headerData[i], requestHeaders[headerData[i]]);
        }
    }

    handleReadyState(http, callback);
    http.send(postData || null);
    return http;
}
function onloadCSS(ss, callback) {
    var called;
    function newcb() {
        if (!called && callback) {
            called = true;
            callback.call(ss);
        }
    }
    if (ss.addEventListener) {
        ss.addEventListener("load", newcb);
    }
    if (ss.attachEvent) {
        ss.attachEvent("onload", newcb);
    }

    if ("isApplicationInstalled" in navigator && "onloadcssdefined" in ss) {
        ss.onloadcssdefined(newcb);
    }
}



asyncRequest('GET', assestPath.versionapi + "/config/nocache/wversion", function (res) {
    window.__tpvar=1;
    if (res.status >= 200 && res.status < 400) {
        var data = res.responseText && typeof res.responseText == 'string' ? JSON.parse(res.responseText) : res.responseText;
        window.__tpvar = data.version;
    }
    var stylesheet = loadCSS(assestPath.staticPath + '/src/css/sso.css?v=' + window.__tpvar);
    onloadCSS(stylesheet, function () {
        var s = document.createElement('script');
        s.src = assestPath.staticPath + '/dist/centralLogin.bundle.js?v=' + window.__tpvar;
        s.type = "text/javascript";
        s.async = false;
        document.getElementsByTagName('head')[0].appendChild(s);
    });
    if(!window.JssoCrosswalk){
        onloadCSS(stylesheet, function () {
            var s = document.createElement('script');
            s.src = assestPath.jssoUrl;
            s.onload=function(){
                window.JssoCrosswalkWidget=JssoCrosswalk;
            }
            s.type = "text/javascript";
            s.async = false;
            document.getElementsByTagName('head')[0].appendChild(s);
        });   
    }
    var recaptchaInterval=setInterval(function(){
        var element=document.getElementsByClassName("g-recaptcha")[0]
        if(element){
            var s = document.createElement('script');
            s.src = "https://www.google.com/recaptcha/api.js";
            s.type = "text/javascript";
            s.async = false;
            document.getElementsByTagName('head')[0].appendChild(s);
            clearInterval(recaptchaInterval);
        }
    },1000)
    
});




