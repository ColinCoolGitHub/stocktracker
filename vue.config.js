module.exports = {
    lintOnSave: true,
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
    }
}