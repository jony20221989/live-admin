import request from "@/utils/request";


// 获取验证码
export function getCode() {
    return request({
        url: '/code',
        method: 'get',
        timeout: 10000
    })
}