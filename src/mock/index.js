import Mock from 'mockjs'
import Api from '@/requests/api.js'
import templates from './templates.js'

for (var k in Api) {
  if (Api.hasOwnProperty(k)) {
    Mock.mock(RegExp(Api[k] + '.*'), templates[k])
  }
}
