const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello1.html?id=100&status=active');

//get serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//get host(root domain)
console.log(myUrl.host);

//hostname - does not get port number
console.log(myUrl.hostname);

//pathname-gives actual file path
console.log(myUrl.pathname);

//serialized query-stuff after ?
console.log(myUrl.search);

//get object from serialized query
console.log(myUrl.searchParams);

//add params dynamically
myUrl.searchParams.append('abc', '124');
console.log(myUrl.searchParams);

//loop through the params
myUrl.searchParams.forEach((value, key) => console.log(`${key}:${value}`));
