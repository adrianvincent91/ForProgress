const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/ForProgress.ts",
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'ForProgress.js',
        globalObject: 'this',
        library: {
            type: 'umd',
            name: 'ForProgress',
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/, use: [
                    { loader: "css-loader", options: {  exportType: 'string', sourceMap: false }},
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.ts$/i,
                use: ["ts-loader"]
            },
        ],
    }
};
