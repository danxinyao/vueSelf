var path = require('path')
var webpack = require('webpack')
var buildFolder = 'dist';
var buildPath = './' + buildFolder + '/'
var proxyApi = '' // 代理服务器
var production = process.env.NODE_ENV//是否是生产环境
var fs = require('fs')
var folder_exists = fs.existsSync(buildPath)
if (!folder_exists) {
    fs.mkdirSync(buildFolder)
}
else {
    var dirList = fs.readdirSync(buildPath)
    dirList.forEach(function (fileName) {
        fs.unlinkSync(buildPath + fileName)
    })
    console.log("clearing " + buildPath)
}

// readfile
// 先把index.html里面关于style和js的hash值都删除掉，避免在使用 npm run dev 的时候，路径还是压缩后的路径
fs.readFile('index.html','utf-8',function (err, data) {
    if (err) {
        console.log("clear hash error")
    } else {
        var devhtml = data.replace(/((?:href|src)="[^"]+\.)(\w{20}\.)(js|css)/g, '$1$3')
        fs.writeFileSync('index.html',devhtml)
    }
})
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')// 独立样式文件
// 会将所有的样式文件打包成一个单独的style.css
var extractCSS = new ExtractTextPlugin({
    filename: production ? 'style.[chunkhash].css' : 'style.css',
    disable: false,
    allChunks: true
})
// 检测重用模块
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
var plugins = [
    new webpack.LoaderOptionsPlugin({
        minimize: true
    }),
    extractCSS,
    // 自动分析重用模块并且打包单独文件
    new CommonsChunkPlugin('vendor'),
    new HtmlWebpackPlugin({
        filename: '../index.html', // 会生成d.html在根目录下,并注入脚本
        template: 'index.tpl',
        inject: true, //此参数必须加上，不加不注入
        favicon: './src/assets/images/logo.png',        
    }),
    function () {
        return this.plugin('done', function (stats) {
            var content
            //这里可以拿到hash值   参考：http://webpack.github.io/docs/long-term-caching.html
            content = JSON.stringify(stats.toJson().assetsByChunkName, null, 2)
            console.log('版本是：'+JSON.stringify(stats.toJson().hash))
            return fs.writeFileSync(buildFolder + '/assets.json', content)
        })
    }

];
// 发布编译时,压缩,版本控制
var devtool = false,   // 是否开启source-map
    devServer = {}   // 代理设置
if (production) {
    console.log('压缩ing...')
    devtool = '#source-map';
    devServer = {}   // 代理为空
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        sourceMap: true,
        compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true,
            collapse_vars: true,
            reduce_vars: true
        }
    }))
}else {
    console.log('代理ing...')
    devtool = '#eval-source-map'
    devServer = {
        historyApiFallback: true,
        host: 'localhost',
        proxy: {
            '/Api/*': proxyApi,
            '/api/*': proxyApi,
            '/ImageTemp/*': proxyApi,
            '/Import/*': proxyApi,
            '/ImportImage/*': proxyApi,
            '/Export/*': proxyApi,
            '/Upload/*': proxyApi
        },
    }    
}

module.exports = {
    entry: {
        common: ['vue', 'vue-router','vuex','vuex-router-sync'],
        build: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, buildFolder),
        publicPath: '/' + buildFolder + '/',
        filename: production ? '[name].[chunkhash].js' : '[name].js' //"build.[hash].js"//[hash]MD5戳   解决html的资源的定位可以使用 webpack提供的HtmlWebpackPlugin插件来解决这个问题  见：http://segmentfault.com/a/1190000003499526 资源路径切换
    },
    plugins: plugins,
    devtool: devtool,
    devServer: devServer,
    module: {
        rules: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        {
            test: /\.less$/,
            loader: "style-loader!css-loader!autoprefixer-loader?{ browsers: ['last 100 versions'] }!less-loader"
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                extractCSS: extractCSS
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, 
        {
            test: /\.(woff|woff2?|svg|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader'
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    resolve: {
        alias: {
            /*'vue$': 'vue/dist/vue.esm.js',*/
            'src': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'src/assets'),
            'components': path.resolve(__dirname, 'src/components'),
            'views': path.resolve(__dirname, 'src/views'),
            'services': path.resolve(__dirname, 'src/services'),
        },
        modules: [
            path.join(__dirname, 'node_modules')
        ],
        extensions: ['.js', '.vue', '.json']
    }
}

