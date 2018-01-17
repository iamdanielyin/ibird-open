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
function onload(app, options) {
    options = options || {};
    options.env = options.env || 'development';

    if (app.env === options.env) {
        app.on('ibird:app:listen', app => {
            if (!app.c().port) return;
            const url = `http://localhost:${app.c().port}`;
            openBrowser(url);
        });
    }
}

/**
 * 导出模块
 */
module.exports = {
    namespace,
    onload
};