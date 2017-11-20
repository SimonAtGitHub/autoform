var webpack = require('webpack');



let env = process.env.NODE_ENV || 'dev';



let config = null;



switch (env) {
    case 'dev':
        break;
    case 'build':
    default:
        config = require('./build/webpack.build.config');
        break;
}


module.exports = config;