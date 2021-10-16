const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { dirname } = require('path');
const NODE_ENV = process.env.NODE_ENV;
const is_DEV = NODE_ENV === 'development';
const is_PROD = NODE_ENV === 'production';

function setupDevTool() {
    if (is_DEV) return 'eval';
    if (is_PROD) return false;
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx' , '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/client/index.jsx'),
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js'
    },
    module: {
        rules: [
            {
            test: /\.[tj]sx?$/,
            use: [
                {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }}
            ]
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({template: path.resolve(__dirname , 'index.html')})
    // ],
    // devServer: {
    //     port: 3000,
    //     open: true,
    //     hot: is_DEV
    // },
    devtool: setupDevTool()
}