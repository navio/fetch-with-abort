const fetcher = require('./dist/index.js');
let request1 = fetcher().request;
request1('hi').then(console.log);