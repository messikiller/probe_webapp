import Mock from 'mockjs'
import ENV from '@/../env.js'

let Random = Mock.Random

let success = (data, message) => {
  let msg = message || 'OK'
  let ret = {
    code: ENV.HTTP_OK,
    data: data,
    msg: msg,
    ext: []
  }
  console.log('Trigger Mock:', {data, msg})
  return ret
}

export default {
  AuthLogin: (options) => {
    let params = JSON.parse(options.body)
    return success({
      access_token: Random.word(256),
      user: {
        username: params.username,
        nickname: Random.cname()
      }
    })
  },
  AuthTransformList: (options) => {
    return success([
      {id: 1, dest_username: Random.last(), dest_nickname: Random.cname(), dest_id: Random.integer(1, 100)},
      {id: 2, dest_username: Random.last(), dest_nickname: Random.cname(), dest_id: Random.integer(1, 100)},
      {id: 3, dest_username: Random.last(), dest_nickname: Random.cname(), dest_id: Random.integer(1, 100)},
      {id: 4, dest_username: Random.last(), dest_nickname: Random.cname(), dest_id: Random.integer(1, 100)},
      {id: 5, dest_username: Random.last(), dest_nickname: Random.cname(), dest_id: Random.integer(1, 100)}
    ])
  },
  AuthTransformQuick: (options) => {
    let params = JSON.parse(options.body)
    return success({
      access_token: Random.word(256),
      user: {
        username: params.username,
        nickname: Random.cname()
      }
    })
  },
  AuthTransformExecute: (options) => {
    let params = JSON.parse(options.body)
    return success({
      access_token: Random.word(256),
      user: {
        username: params.username,
        nickname: Random.cname()
      }
    })
  },
  UserList: (options) => {
    return success([
      {id: 1, username: Random.last(), nickname: Random.cname()},
      {id: 2, username: Random.last(), nickname: Random.cname()},
      {id: 3, username: Random.last(), nickname: Random.cname()},
      {id: 4, username: Random.last(), nickname: Random.cname()},
      {id: 5, username: Random.last(), nickname: Random.cname()}
    ])
  },
  CableOperate: (options) => {
    let msg = '操作成功， 当前步骤：' + Random.integer(1, 10) + '，全部步骤：' + Random.integer(10, 20) + '！'
    return success({}, msg)
  }
}
