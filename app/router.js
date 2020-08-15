'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);

  router.post('/user/login', controller.user.login);
  router.post('/user', jwt, controller.user.index);
};
