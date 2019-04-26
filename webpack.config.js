const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path:path.resolve(__dirname,'public'),
        filename:'bundle.js'
    }
    ,
    module:{
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader:'babel-loader',
                options:{
                    presets:['env','react'],
                    plugins:"transform-class-properties"
                }
            }
        },  
        {
            test: /\.s?css$/,
            use: [
                'style-loader', 
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devServer:{
        contentBase:path.resolve(__dirname,'public')
    },
    devtool:'cheap-module-eval-source-map'
}