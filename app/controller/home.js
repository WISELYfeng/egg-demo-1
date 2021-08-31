'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.render默认会去view文件夹寻找index.html,由egg默认约定
    await ctx.render('index.html', {
      title: 'egg示例',
    });
  }

  async user() {
    const { ctx } = this;
    ctx.body = await ctx.service.home.user();
  }

  async add() {
    const { ctx } = this;
    const { title } = ctx.request.body;
    ctx.body = {
      title,
    };
  }
}

module.exports = HomeController;
