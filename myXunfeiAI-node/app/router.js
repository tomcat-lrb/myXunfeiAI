/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.prefix('/api/v1') // 设置基础路径前缀

  router.get('/', controller.home.index)
  router.get('/getUserInfo', controller.userInfo.getUserInfo)
};
