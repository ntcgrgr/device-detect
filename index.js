module.exports = function () {
    'use strict';
    var ua = window.navigator.userAgent,
        device,
        browser,
        version = undefined,
        data = {};

    // get device
    if (ua.match(/(iPhone)/)) {
        device = 'iPhone';
    } else if (ua.match(/(iPad)/)) {
        device = 'iPad';
    } else if (ua.match(/(iPod)/)) {
        device = 'iPod';
    } else if (ua.match(/(BlackBerry|BB10)/)) {
        device = 'BlackBerry';
    } else if (ua.match(/(IEMobile)/)) {
        device = 'WindowsMobile';
    } else if (ua.match(/(Android)/)) {
        device = 'Android';
    } else if (ua.match(/(Macintosh)/)) {
        device = 'Macintosh';
    } else if (ua.match(/(Windows)/)) {
        device = 'Windows';
    } else if (ua.match(/(Linux)/)) {
        device = 'Linux';
    }

    // get browser
    if (ua.indexOf('OPR') > 0 || ua.indexOf('Opera') > 0) {
        browser = 'Opera';
    } else if (ua.indexOf('MSIE ') > 0) {
        browser = 'deprecatedIE';
    } else if (ua.indexOf('Trident/') > 0) {
        browser = 'IE11';
    } else if (ua.indexOf('Edge/') > 0) {
        browser = 'Edge';
    } else if (ua.indexOf('Chrome') > 0) {
        browser = 'Chrome';
    } else if (ua.indexOf('Firefox') > 0) {
        browser = 'Firefox';
    } else if (ua.indexOf('Safari') > 0) {
        browser = 'Safari';
        version = parseInt(ua.match(/Version\/(.*)? /)[1]);
    }

    // create object
    data = {
        device: device,
        browser: browser,
        version: version
    };
    return data;
};
