;(function() {
    /* Vervetag 2.0 - Copyright (c) 2013 Verve Wireless, Inc. */

    // params for AdCel request
    var reqParams = {};

    // merge in document-wide params on page
    var docParams = window.vrv || {};
    for (var i in docParams) reqParams[i] = docParams[i];

    // merge in params appended to # in script src
    var scriptTags = document.getElementsByTagName('script');
    var thisScript = scriptTags[scriptTags.length - 1];

    var hashPos = thisScript.src.lastIndexOf('#');
    if (hashPos > -1) {
        var srcParams = thisScript.src.substring(hashPos + 1).split('&');
        for (var i in srcParams) {
            var srcPairs = srcParams[i].split('=');

            // src param override blacklist
            if (['size', 'adunit'].indexOf(srcPairs[0]) > -1) continue;

            reqParams[srcPairs[0]] = srcPairs[1];
        }
    }

    // respect the outer call and detect secure
    var protocol = 'http:';
    if (location.protocol == 'https:') {
        protocol = 'https:';
    }

    // iterate params for special cases & reformat for AdCel request
    var baseURL = 'https://raw.githack.com/valarmathivrv/qatest/master/adtag.js';
    var keyMap = {
        'latitude'  : 'lat',
        'longitude' : 'long'
    };
    for (var i in reqParams) {
        // re-map some key names -> AdCel URL parameters
        if (keyMap[i]) {
            reqParams[keyMap[i]] = reqParams[i];
            delete reqParams[i];
        }

        // build special "ei" param
        if (['age', 'gender'].indexOf(i) > -1) {
            reqParams.ei = reqParams.ei || '';
            reqParams.ei += (i + '=' + reqParams[i] + ';');
            delete reqParams[i];
        }

        // use AdCel override URL if supplied
        if (i === 'adcel_url') {
            baseURL = reqParams[i];
            delete reqParams[i];
        }
    }

    // cache buster
    reqParams['cb'] = Math.floor(Math.random() * 1E10);

    // build AdCel request
    var reqPairs = [];
    for (var i in reqParams) reqPairs.push(i + '=' + encodeURIComponent(reqParams[i]));
    var req = baseURL + '?' + reqPairs.join('&');

    if (protocol === 'https:') {
        req += '&sc=s';
    }

    // make ad request
    document.write('<script type="text/javascript" src="' + req + '"></script>');

})();
