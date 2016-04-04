'use strict';

var requestPromise = require('request-promise'),
    memoizeClear = require('memoize-clear'),
    memoizedGetPhotos;

memoizedGetPhotos = memoizeClear(getRecentInstagramPhotos);

module.exports = memoizedGetPhotos;

setInterval(function() {
    console.info('Clearing Instagram Photo Cache.');
    memoizedGetPhotos.__clear();
}, 1000 * 60 * 60 * 4);

function getRecentInstagramPhotos(tag) {
    var options = {
        uri: `https://www.instagram.com/explore/tags/${ encodeURIComponent(tag) }/`
    };

    return requestPromise(options)
        .then(function(htmlString) {
            var instagramPage = JSON.parse(htmlString.match(/<script\stype="text\/javascript">window._sharedData\s?=\s?(.*)(?=<\/script>)/g)[0].substring(52).replace(/;/g, ''), null, 4);

            return instagramPage['entry_data'].TagPage[0].tag.media.nodes // jshint ignore:line
                .map(function(item) {
                    return item['display_src']; // jshint ignore:line
                })
                .slice(0, 12);
        })
        .catch(function (err) {
            console.error(`ERROR Instagram Scrape ${ err }`);
            console.error('Instagram Scrape Failed, Returning Default images.');
            return [];
        });
}

