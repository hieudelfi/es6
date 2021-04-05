const path = require('path');
module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname,'build')
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.m?js$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     preset: ['@babel/preset-env']
    //                 }
    //             }
    //         }
    //     ]
    // }

    
}