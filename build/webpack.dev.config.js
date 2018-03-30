const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        // autoform:"../index",
        'examples': './examples/main'
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../examples/dist/')
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js',
            'autoform': path.resolve(__dirname, '../autoform'),
            "autoform_component_lib": path.resolve(__dirname, '../autoform_component_lib'),
            "autoform_editor": path.resolve(__dirname, '../autoform_editor')
        }
    },
    devServer: {
        // contentBase: [path.join(__dirname, '../../../src/'), path.join(__dirname, '../../../build/')],
        compress: true,
        port: 8898,
        inline: true,
        // hot: true
    },
    // externals: {
    //     qq: 'qq',
    //     moment: 'moment'
    // },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        })
                    }
                },
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
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
                test: /\.json$/,
                use: ['json-loader']
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
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: '[name].[chunkhash].js',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './examples/index.html',
            chunks: ['commons', 'examples']
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:16].css',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"dev"'
            }
        })
    ]
};