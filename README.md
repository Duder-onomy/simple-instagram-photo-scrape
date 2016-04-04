# Simple Instagram Photo Scrape

Lets you scrape top Instagram photos by hashtag. It works decently. Use at your own risk or fork it.

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
