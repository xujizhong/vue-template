import axios from 'axios';

/**
 * 请求配置
 * @see https://github.com/mzabriskie/axios
 */

const instance = axios.create({
    timeout: 2 * 60000, // 请求超时时间
    withCredentials: true // 跨域
});

instance.interceptors.request.use(
    async config => {
        let params = Object.assign(config.params || {}, {
            _: Date.now()
        });

        if (!config.params) {
            config.params = params;
        }

        return config;
    },
    error => {
        Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        let { status, data } = response;

        if (status !== 200) {
            return Promise.reject(response.data);
        } else {
            if (response.data && response.data.callback) {
                window.location.href = response.data.callback;
            }
            return response.data;
        }
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;
