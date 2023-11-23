import axios from "axios";

export const httpService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'X-Custom-Value': 'My Custom Value'
    }
});

httpService.interceptors.request.use(config => {
    console.log('request interceptor', config.headers);
    config.headers['X-Interceptor-Header'] = 'Some value here';
    return config;
}, error => {
    console.log('request interceptor error', error);
});

httpService.interceptors.response.use((res) => {
    console.log('response interceptor', res);
    return res;
}, (error) => {
    console.log('response interceptor error', error);

    //  suppressing the error, in case you have a fallback content
    // return {data: []};

    //  percolating the error to the component
    return Promise.reject(error);
});