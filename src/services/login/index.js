import { get, post } from '@/services/http';

// 登陆
export const _login = (params = {}) => {
    return get('/api/users/login', params);
};
// 退出登录
export const _logout = (params = {}) => {
    return get('/api/users/logout', params);
};
