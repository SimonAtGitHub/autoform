const resolve = require('path').resolve
const webpack = require('webpack')
const url = require('url')
const publicPath = ''


module.exports = (options = {}) => ({
    entry: {
        index: './autoform_editor/index.js'
    },
    output: {
        path: resolve(__dirname, '../autoform_editor/dist/lib'),
        filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
        chunkFilename: '[id].js?[chunkhash]',
        publicPath: options.dev ? '/assets/' : publicPath,
        library: 'autoform',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        Vue: 'vue',
        'element-ui': 'ELEMENT'
    },
    devtool: '#source-map',
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['index']
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'autoform_editor': resolve(__dirname, '../autoform_editor'),
            'autoform': resolve(__dirname, '../autoform'),
            'autoform_component_lib': resolve(__dirname, '../autoform_component_lib'),
        }
    },
    devtool: options.dev ? '#eval-source-map' : '#source-map'
})