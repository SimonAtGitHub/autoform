var webpack = require('webpack');



let config = null;

let env = process.env.NODE_ENV || 'dev';


switch (env) {
    case 'dev':
        config = require('./build/webpack.dev.config');
        break;
    case 'build':
        config = require('./build/webpack.autoform.build.config');
        break;
    case 'lib':
        config = require('./build/webpack.autoformlib.build.config');
        break;
    default:
        break;
}


module.exports = config;