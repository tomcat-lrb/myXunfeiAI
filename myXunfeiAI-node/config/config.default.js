/* eslint valid-jsdoc: "off" */

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
  config.keys = appInfo.name + '_1709401145203_719';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  const mysql = {
    client: {
      //host
      host: "localhost",
      //port
      port: "3306",
      // 用户名
      user: "root",
      // 密码
      password: "lrb4675wt",
      // 数据库
      database: "xunfeiai",
    },
    app: true,
    agent: false,
  };
  const cors = {
    // 这里是允许所有的跨域请求，如有需要可自己查阅文档进行特殊配置
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  };
  const security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };

  return {
    ...config,
    ...userConfig,
    security,
    mysql,
    cors
  };
};
