module.exports = {
    lintOnSave: 'warning',
    devServer: {
        host: 'localhost',
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        // 配置多个代理
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    // '^/api': ''
                }
            }
        }
    }
};
