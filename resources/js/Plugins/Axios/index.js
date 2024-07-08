import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((request) => {
    const authStore = useAuthStore();

    if (request.url !== '/api/auth/user'){

    }
    if (authStore.authToken){
        //console.log(authStore.authToken);
        request.headers['Authorization'] = `Bearer ${authStore.token}`;
    }
    return request;
});

export { axiosInstance };