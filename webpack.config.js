const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {


    mode: "development",

    output: {
        filename: "scripts/[name].js",

    },
    devtool: "cheap-module-source-map",
    devServer: {
        hot: true,
        static: "./dist"
    },

    entry: {
        main: {
            import: ["./src/js/index.js", "./src/js/flexible.js"],
            filename: "main/[name].js"
        },
        user: {
            import: ["./src/js/user.js", "./src/js/flexible.js"],
            filename: "user/[name].js"
        }
    },

    output: {
        clean: true,
    },


    plugins: [
        new HtmlWebpackPlugin({
            title: "index",
            template: "./src/index.html",
            filename: "index.html",
            inject: "head",
            chunks: ["main"]
        }),
        new HtmlWebpackPlugin({
            title: "user",
            template: "./src/user.html",
            filename: "user.html",
            inject: "head",
            chunks: ["user"]
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })


    ],
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            ["@babel/transform-runtime"]
                        ]
                    }
                }
            },

            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: "asset/resource",
                generator: {
                    // 输出到 font 目录中，占位符 [name] 保留原始文件名，
                    // [hash] 防止出现相同文件名无法区分，[ext] 拿到后缀名
                    filename: 'font/[name].[hash:6][ext]'
                }
            },

            {
                test: /\.(jpe?g|png|gif|svg|webp)$/,
                type: "asset/resource",
                generator: {
                    filename: "img/[name][ext]"
                }
            }, {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    resolve: {
        // 别名
        alias: {
            "@": path.resolve(__dirname, "./src")
        },
        extensions: ['*', '.js']
    },

    optimization: {
        //缓存处理
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",

                }
            }
        }

    }

}