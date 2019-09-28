export const request = (
    /*
     * 使用fetch发送ajax，减少第三方依赖
     */
    _ => {
        // baseUrl
        const baseUrl = 'http://47.94.45.249:666/';

        /**
         * @time  2019/9/28 15:02
         * @author  Eric Wang <vuejs@vip.qq.com>
         * @desc   ajax get请求
         * @param url {String} -请求地址
         * @param config
         * @return Promise
         */
        function get(url, config) {

            // 合并用户自定义配置
            config ? config = Object.assign({
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
            }, config) : config =
                {
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                };

            // 合并url请求
            url = baseUrl + url;

            // console.log(url,config)

            return fetch(url, config)
                .then(res => res.json())
        }

        /**
         * @time  2019/9/28 15:07
         * @author  Eric Wang <vuejs@vip.qq.com>
         * @desc   ajax post请求
         * @param url {String} -请求地址
         * @param data {Object} -请求数据
         * @param config  {Object} -请求配置
         * @return Promise
         */
        function post(url, data, config) {

            // 合并用户自定义配置
            !config ? config =
                {
                    body: JSON.stringify(data), // must match 'Content-Type' header
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cachedt
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                } : config = Object.assign({
                body: JSON.stringify(data), // must match 'Content-Type' header
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
            }, config);

            // 合并url请求
            url = baseUrl + url;

            return fetch(url, config)
                .then(res => res.json())
        }

        // 暴露封装对象
        return {
            get,
            post
        }
    }
)();