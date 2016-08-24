# Simple Instagram Photo Scrape

Lets you scrape top Instagram photos by hashtag. It works decently. Use at your own risk or fork it. 

Disclaimer: This is very clearly against instagram privacy policy. I personally, have never used this in any of my projects and only wrote it as a example of how it could be done. 

It will `memoize` the result to only be fetched at most once every 4 hours. Or, the first time it is called after the process is restarted.

It will only return the first 12 images.

Returns a promise.

Use like:

```javascript
var simpleInstagramScrape = require('simple-instagram-scrape');

simpleInstagramScrape('cats')
    .then(function(photos) {
        // Do something with the photos
    })

```
