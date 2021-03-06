const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
        chunkFilename: '[name].js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            vue$: 'vue/dist/vue.runtime.esm.js'
        },
        extensions: ['.js', '.vue', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: [{ loader: 'pug-plain-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }, { loader: 'postcss-loader' }]
            },
            {
                test: /\.scss$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' },
                      { loader: 'postcss-loader' }, { loader: "sass-loader" }]
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            appendTsSuffixTo: [
                                '\\.vue$'
                            ]
                        }
                    }
                ]
            },
            {
                test: /ttf|woff/,
                loader: "base64-inline-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new ForkTsCheckerWebpackPlugin({
                vue: true,
                tslint: true,
                formatter: 'codeframe',
                checkSyntacticErrors: true
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: "static"
        }),
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin()
    ],
    entry: {
        'typedoc-spa': './src/main.ts'
    }
}
