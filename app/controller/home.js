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

  async addUser() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    try {
      const result = await ctx.service.home.addUser(name);
      ctx.body = {
        code: 200,
        msg: '添加成功',
        data: null,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '添加成功',
        data: null,
      };
    }
  }
}

module.exports = HomeController;
