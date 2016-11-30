// this file isn't transpiled so it must use CommonJS and ES5

// register babel to transpile before our tests run
require('babel-register')();

// disable any webpack features that Mocha doesn't understand
// this just tells Mocha that if it sees a .css file
// it should just treat it like an empty function
require.extensions['.css'] = function() {};
