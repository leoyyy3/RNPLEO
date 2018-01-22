// var path = require('path')
// var webpack = require('webpack')
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// var nodeModulesPath = path.resolve(__dirname, 'node_modules')
// console.log(process.env.NODE_ENV)

{
    target: 'node',
    node: {
        __filename: true,
        __dirname: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                  presets: ['es2015', 'stage-0', 'react'],
                  plugins: ['transform-runtime', ['import', {
                      libraryName: 'antd',
                      style: 'css'
                    }]
                  ]
                },
            },
            { test: /\.less$/, exclude: /node_modules/,
                use: [
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'postcss-loader'},
                    {loader:'less-loader'}
                ]
            },
            { test: /\.css$/,
                // exclude: /node_modules/,
                use: [
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'postcss-loader'}
                ]
            },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i,
                use:[
                    {loader:'url-loader?limit=5000'},
                ]
                },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, use:'url-loader?limit=5000'} // 限制大小小于5k
        ]
        // preLoaders: [
        //     // 报错 ？？？？？
        //     {test: /\.(js|jsx)$/, loader: "eslint-loader", exclude: /node_modules/}
        // ],
        // loaders: [
        //     { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
        //     { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less' },
        //     { test: /\.css$/,
        //         // exclude: /node_modules/,
        //         loader: 'style!css!postcss'
        //     },
        //     { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
        //     { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
        // ]
    },

    // babel: {
    //     presets: ['es2015', 'stage-0', 'react'],
    //     plugins: ['transform-runtime', ['import', {
    //       libraryName: 'antd',
    //       style: 'css'
    //     }]]
    // },

    // eslint: {
    //     configFile: '.eslintrc' // Rules for eslint
    // },

    // postcss: [
    //     require('autoprefixer') //调用autoprefixer插件，例如 display: flex
    // ],

}
