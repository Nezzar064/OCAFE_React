import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createStudent} from "../actions/students";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Container,
    Stack
} from "@chakra-ui/react"

//https://api.dataforsyningen.dk/steder?hovedtype=Bebyggelse&undertype=by api for all danish cities, could be used in form?
//TODO: add icons and stuff, style the form
const AddStudent = () => {

    //Defining initial state

    const initialStudentState = {
        id: null,
        firstName: '',
        lastName: '',
        birthDate: '',
        phone: '',
        email: '',
        role: '',
        country: '',
        zipCode: '',
        city: '',
        streetName: '',
        streetNumber: ''

    }

    const [student, setStudent] = useState(initialStudentState);
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();

    //Track values of the input and set that state for changes

    const handleInputChange = event => {
        const {name, value} = event.target;
        setStudent({...student, [name]: value});
    };

    //Get tutorial local state, send POST request, dispatchs action w. createStudent action creater with useDispatch.
    //Returns a reference to dispatch func from Redux store

    const saveStudent = () => {
        const {
            firstName,
            lastName,
            birthDate,
            phone,
            email,
            country,
            zipcode,
            city,
            streetName,
            streetNumber

        } = student;

        dispatch(createStudent(firstName, lastName, birthDate, phone, email, country, zipcode, city, streetName, streetNumber))
            .then(data => {
                setStudent({
                    id: data.id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    birthDate: data.birthDate,
                    phone: data.phone,
                    email: data.email,
                    role: data.role,
                    country: data.address.country,
                    zipCode: data.address.zipCode,
                    city: data.address.city,
                    streetName: data.address.streetName,
                    streetNumber: data.address.streetNumber

                });
                setSubmitted(true);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newStudent = () => {
        setStudent(initialStudentState);
        setSubmitted(false);
    }

    //Check submitted state, if true show Add button. Otherwise form with submit button will display.

    return (
        <Container>
            {submitted ? (
                <div>
                    <h1>Submit was successful!</h1>
                    <Button colorScheme="green" size="md" onClick={newStudent}>Add another?</Button>
                </div>
            ) : (
                <div>
                    <form>
                        <Stack direction={["column", "row"]} spacing="20px">
                            <FormControl id="first-name" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input w="250px"
                                       type="text"
                                       required
                                       value={student.firstName}
                                       onChange={handleInputChange}
                                       placeholder="Michael"
                                       name="firstName"
                                />
                            </FormControl>
                            <FormControl id="last-name" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input w="250px"
                                       type="text"
                                       required
                                       value={student.lastName}
                                       onChange={handleInputChange}
                                       placeholder="Scott"
                                       name="lastName"
                                />
                            </FormControl>
                        </Stack>
                        <FormControl id="birth-date" isRequired>
                            <FormLabel>Birth Date</FormLabel>
                            <Input w="200px"
                                   type="date"
                                   value={student.birthDate}
                                   onChange={handleInputChange}
                                   name="birthDate"
                            />
                        </FormControl>
                        <Stack direction={["column", "row"]} spacing="20px">
                            <FormControl id="phone" isRequired>
                                <FormLabel>Phone</FormLabel>
                                <Input w="250px"
                                       type="text"
                                       value={student.phone}
                                       onChange={handleInputChange}
                                       placeholder="40404040"
                                       name="phone"
                                />
                            </FormControl>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input w="250px"
                                       type="email"
                                       value={student.email}
                                       onChange={handleInputChange}
                                       placeholder="example@example.com"
                                       name="email"
                                />
                            </FormControl>
                        </Stack>
                        <Stack direction={["column", "row"]} spacing="20px">
                            <FormControl id="country" isRequired>
                                <FormLabel>Country</FormLabel>
                                <Input w="250px"
                                       type="text"
                                       value={student.country}
                                       onChange={handleInputChange}
                                       placeholder="Denmark"
                                       name="country"
                                />
                            </FormControl>
                            <FormControl id="city" isRequired>
                                <FormLabel>City</FormLabel>
                                <Input w="250px"
                                       type="text"
                                       value={student.city}
                                       onChange={handleInputChange}
                                       placeholder="Copenhagen"
                                       name="city"
                                />
                            </FormControl>
                        </Stack>
                        <FormControl id="zip-code" isRequired>
                            <FormLabel>Zip Code</FormLabel>
                            <Input w="80px"
                                   type="text"
                                   onChange={handleInputChange}
                                   value={student.zipCode}
                                   placeholder="2100"
                                   name="zipCode"
                            />
                        </FormControl>
                        <Stack direction={["column", "row"]} spacing="20px">

                            <FormControl id="street-name" isRequired>
                                <FormLabel>Street Name</FormLabel>
                                <Input w="250px"
                                       type="text"
                                       value={student.streetName}
                                       onChange={handleInputChange}
                                       placeholder="Street Name"
                                       name="streetName"
                                />
                            </FormControl>
                            <FormControl id="street-number" isRequired>
                                <FormLabel>Street Number</FormLabel>
                                <Input w="250px"
                                       type="text"
                                       value={student.streetNumber}
                                       onChange={handleInputChange}
                                       placeholder="Street Number"
                                       name="streetNumber"
                                />
                            </FormControl>
                        </Stack>
                    </form>
                    <br/>
                    <Button colorScheme="green" size="md" onClick={saveStudent}>Submit</Button>
                </div>
            )}
        </Container>
    );
};

export default AddStudent;