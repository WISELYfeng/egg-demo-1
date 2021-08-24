'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async user() {
    return {
      name: 'test',
      slogan: '玩一玩，学一学，每天摸鱼没烦恼',
    };
  }
}
module.exports = HomeService;
