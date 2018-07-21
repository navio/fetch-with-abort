# fetch-with-abort
A function that returns fetch object that when run will abort previous request. Kind of a debouncer but for fetching data.

## Dependencies
There are dependencies.
Footprint:
* 222 B: index.js
* 71 B: index.mjs
* 146 B: index.umd.js

## Requirements
If the browser doesn't support [Abort Controller.](https://caniuse.com/#search=AbortController) 
 You can include in your build/release [ Abort Controller Polyfill](https://www.npmjs.com/package/abortcontroller-polyfill)

## How
```javascript
import FetchOneAtTime from 'fetch-with-abort';
let searchInApi = new FetchOneAtTime();


```