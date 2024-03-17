const { Controller } = require('egg')

class UserInfoController extends Controller {
    async getUserInfo () {
        const { ctx } = this
        ctx.body = {
            code: '0',
            data: {
                userInfo: {
                    userName: 'lrb',
                    menuCode: ['lrb01', 'lrb02', 'lrb03']
                }
            },
            msg: 'success'
        }
    }
}

module.exports = UserInfoController