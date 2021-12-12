//模拟服务器

import Mock from 'mockjs'

//引入模拟的数据
import banner from './banner.json'
import floor from './floor.json'

//使用模拟的数据
Mock.mock('/mock/banner', {code: 200, data: banner})
Mock.mock('/mock/floor', {code: 200, data: floor})