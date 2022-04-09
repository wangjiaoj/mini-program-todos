// 小程序开发api接口统一配置
// 如果你的域名是： https://www.baidu.com/cn 那么这里只要填写 cn
let subDomain = '' // 子域名,没有就等于''
const API_BASE_URL = 'http://localhost:3000' // 主域名


const request = (url, method, data) => {
    let _url = API_BASE_URL + subDomain + url
    return new Promise((resolve, reject) => {
        wx.request({
            url: _url,
            method: method,
            data: data,
            header: {
                'Content-Type': 'application/json'
            },
            success(request) {
                resolve(request.data)
            },
            fail(error) {
                reject(error)
            },
            complete(aaa) {
                // 加载完成
            }
        })
    })
}

/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function(callback) {
    var Promise = this.constructor;
    return this.then(
        function(value) {
            Promise.resolve(callback()).then(
                function() {
                    return value;
                }
            );
        },
        function(reason) {
            Promise.resolve(callback()).then(
                function() {
                    throw reason;
                }
            );
        }
    );
}

module.exports = {
    request,
    // 首页列表接口
    getList: data => request('/city', 'get', data),
    // 详情接口
    getDetail: (data) => request('/goods/detail', 'get', data),
}