var path = require('path')
var webpack = require('webpack')

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            },
            {
                test: /\.(gif|jpe?g|png|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    query: {
                        limit: 10000
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    query: {
                        limit: 20000
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['commons'],
            filename: '[name].[hash].js'
            // minChunks: 2
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['commons', 'main']
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            // }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:16].css',
            allChunks: true
        })
    ]
   
}