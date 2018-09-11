# FasterYoutube
SCREENSHOT: "FasterYoutube-SCREENSHOT.png"

Ad-free Youtube Search. Uses React, Youtube API, & lodash.

Instantaneous search results as you type!
No advertisements.
Clean-looking platform.

Uses React + Youtube API.
Uses lodash to throttle search speed. Located in index.js. Line 38: _.debounce((term) => { this.videoSearch(term) }, 100);
Uses ReduxSimpleStarter boilerplate

npm install --save youtube-api-search
npm install --save lodash

console.developers.google.com --> API Library -> YouTube Data API v3. 
	Setup Credentials.
