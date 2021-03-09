/**
 *
 *作者：葛以伟
 *时间：14:44 2021-03-09
 *描述：
 *
 **/
import {request} from "./request";
export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}
