
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");


var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/",
        chunkFilename: "[id].js"

    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        
    ]
};

module.exports = config;
