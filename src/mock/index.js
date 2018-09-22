import Mock from 'mockjs'
import Api from '@/requests/api.js'
import templates from './templates.js'

Mock.mock(Api.AuthLogin, 'post', templates.AuthLogin)
Mock.mock(Api.AuthTransformList, 'get', templates.AuthTransformList)
Mock.mock(Api.UserList, 'get', templates.UserList)
Mock.mock(Api.AuthTransformQuick, 'post', templates.AuthTransformQuick)
Mock.mock(Api.AuthTransformExecute, 'post', templates.AuthTransformExecute)
Mock.mock(Api.CableOperate, 'post', templates.CableOperate)
