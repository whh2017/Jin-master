/**
 * Created by stevenzwzhai on 2017/8/16.
 */
import Mock from 'mockjs'
const baseUrl = "http://localhost:8080"
const Random = Mock.Random

export default function () {

  // 验证用户登录
  Mock.mock(`${baseUrl}/confirmlogin`, {
    loginFlag: true
  });

   // 系统首页获取新增数据
  Mock.mock(`${baseUrl}/getalldata`, {
    "Ydata": [
      {
        name: '新注册用户',
        type: 'line',
        smooths: true,
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '新增订单',
        type: 'line',
        smooths: true,
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '新增管理员',
        type: 'line',
        smooths: true,
        data: [150, 232, 201, 154, 190, 330, 410]
      }
    ],
    'Xdata': ['2018-07-18', '2018-07-19', '2018-07-20', '2018-07-21', '2018-07-22', '2018-07-23', '2018-07-24']
  });




}
