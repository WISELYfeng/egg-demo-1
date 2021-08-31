'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async user() {
    const { app } = this;
    const QUERY_STR = 'id, name';
    const sql = `select ${QUERY_STR} from list`;
    try {
      return await app.mysql.query(sql);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = HomeService;
