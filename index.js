/**
 * 自动打开浏览器
 */

const openBrowser = require('./lib/openBrowser');
const namespace = 'ibird-open';

/**
 * 加载插件
 * @param app
 * @param options
 */
function onLoad(app, options) {
    app.on('ibird:app:listen', (app, url) => {
        openBrowser(url);
    });
}

/**
 * 导出模块
 */
module.exports = {
    namespace,
    onLoad
};