import http from '../http-common';

const getAll = () => {
    return http.get('/student-management/students');
}

const get = id => {
    return http.get(`/student-management/students/${id}`);
}

const create = data => {
    return http.post('/student-management/students/add', data);
}

const edit = (id, data) => {
    return http.put(`/student-management/students/${id}`, data);
}

const del = id => {
    return http.delete(`/student-management/students/${id}`);
}

const StudentService = {
    getAll,
    get,
    create,
    edit,
    del
};

export default StudentService;