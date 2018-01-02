var path = require("path");
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [ 
             {
            test:  /\.(js|jsx)$/, //Check for all js files
            loader: 'babel-loader',
            query: {
              presets: [ "babel-preset-es2015" ].map(require.resolve)
            }
          },
        {
                     test: /\.css$/,
                     use: [
                        { loader: "style-loader" },
                        { loader: "css-loader" }
                     ]
                   },
                   {
                     test: /\.(png|svg|jpg|gif)$/,
                     use: [
                       'file-loader'
                     ]
                   },
                   {
                     test: /\.(woff|woff2|eot|ttf|otf)$/,
                     use: [
                       'file-loader'
                     ]
                   }
                ]
    }
    
};
module.exports = config;