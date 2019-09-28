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
         * @param data {Object} -请求数据
         * @return Promise
         */
        function get(url, data) {

            // 合并用户自定义配置
            data = Object.assign({
                body: data, // must match 'Content-Type' header
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, same-origin, *omit
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // *client, no-referrer
            }, data);

            // 合并url请求
            url += baseUrl;

            return fetch(url, data)
                .then(res => res.json())
        }

        /**
         * @time  2019/9/28 15:07
         * @author  Eric Wang <vuejs@vip.qq.com>
         * @desc   ajax post请求
         * @param url {String} -请求地址
         * @param data {Object} -请求数据
         * @return Promise
         */
        function post(url, data) {

            // 合并用户自定义配置
            data = Object.assign({
                body: data, // must match 'Content-Type' header
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, same-origin, *omit
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // *client, no-referrer
            }, data);

            // 合并url请求
            url += baseUrl;

            return fetch(url, data)
                .then(res => res.json())
        }

        // 暴露封装对象
        return {
            get,
            post
        }
    }
)();