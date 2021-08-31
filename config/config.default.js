/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1629770895371_1102';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 数据库配置
  exports.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 数据库密码
      password: '123456',
      // 数据库名
      database: 'test',
    },
    // 是否加载到app上，默认开启
    app: true,
    // 是否加载到agent上，默认关闭
    agent: false,
  };

  // 允许全部请求
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ],
  };

  // html模板插件配置
  config.view = {
    mapping: { '.html': 'ejs' },
  };
  return {
    ...config,
    ...userConfig,
  };
};
