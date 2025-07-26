import api from './client';

export const getAdmins = async () => {
    const { data } = await api.get('/admins');
    return data;
};

export const createAdmin = async (payload) => {
    const { data } = await api.post('/admins', payload);
    return data;
};
