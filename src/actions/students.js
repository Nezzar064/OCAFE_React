import {
    CREATE_STUDENT,
    RETRIEVE_STUDENTS,
    UPDATE_STUDENT,
    DELETE_STUDENT
} from "./studentTypes";

import StudentService from "../services/StudentService";

export const createStudent = (student) => async (dispatch) => {
    try {
        const res = await StudentService.create({
            firstName: student.firstName,
            lastName: student.lastName,
            birthDate: student.birthDate,
            phone: student.phone,
            email: student.email,
            role: 'STUDENT',
            address: {
                country: student.country,
                zipCode: student.zipCode,
                city: student.city,
                streetName: student.streetName,
                streetNumber: student.streetNumber
            }
        });

        dispatch({
            type: CREATE_STUDENT,
            payload: res.data
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
};

export const retrieveStudents = () => async (dispatch) => {
    try {
        const res = await StudentService.getAll();

        dispatch({
            type: RETRIEVE_STUDENTS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
};

export const editStudent = (id, student, address) => async (dispatch) => {
    try {
        const res = await StudentService.edit(id,{
            firstName: student.firstName,
            lastName: student.lastName,
            birthDate: student.birthDate,
            phone: student.phone,
            email: student.email,
            role: 'STUDENT',
            address: {
                country: student.country,
                zipCode: student.zipCode,
                city: student.city,
                streetName: student.streetName,
                streetNumber: student.streetNumber
            }
        });

        dispatch({
            type: UPDATE_STUDENT,
            payload: res.data
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err)
    }
};

export const deleteStudent = (id) => async (dispatch) => {
    try {
        await StudentService.del(id);

        dispatch({
            type: DELETE_STUDENT,
            payload: { id }
        });
    } catch (err) {
        console.log(err);
    }
};

