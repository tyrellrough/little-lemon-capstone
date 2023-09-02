import React, { Fragment, useEffect, useState } from "react";
import Restaurant from '../images/restaurant.jpg';
import { useFormik, validateYupSchema } from "formik";
import * as Yup from 'yup';
import useSubmit from "../Hooks/useSubmit";
import { useAlertContext } from "../Context/alertContext";
import { FormLabel, FormControl, FormErrorMessage, Input, Box, VStack, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button } from "@chakra-ui/react";
import dayjs from "dayjs";



const BookingForm = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();
    const {availableTimes, setTimes} = useState(0);

  

    useEffect(() => {
        if (response != null) {
            onOpen(response.type, response.message)
        }
    }, [response]);

    const formik = useFormik({
        initialValues: {
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            time: '',
            numSeats: '',
        },

        onSubmit: (values) => {
            console.log("hello")
            submit("", values);
        },

        validationSchema: Yup.object({
            title: Yup.string().required("Required"),
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string().email('Must be a valid email').required("Required"),
            date: Yup.date().required("Required").min(dayjs(), "Please select tomorrow or later"),
            time: Yup.string().required("Required"),
            numSeats: Yup.number().required("Required").min(1, "Please select 1-12").max(12, "Please select 1-12"),
        }),
    });

    const printA = () => {
        console.log(formik.values.title);
        console.log(formik.values.firstName);
        console.log(formik.values.lastName);
        console.log(formik.values.email);
        console.log(formik.values.date);
        console.log(formik.values.time);
        console.log(formik.values.numSeats);
    }

//     const getTimes = (date) => {
//         console.log(fetchAPI(date));
//         //setTimes(fetchApi(date));
//     }

//     useEffect(() => {
//         getTimes(formik.values.date);
//    }, [formik.values.date])

    return (
        <Fragment>

            <div className="zero-three bg-[#495E57]"></div>
            <div className="segment three-nine bg-[#495E57] pt-[3%] pb-[3%]"><h1>Book a table</h1></div>
            <div className="eleven-twelve bg-[#495E57]"></div>


            <Box className="segment three-nine" p={5} rounded="md" w="100%">
                <VStack alignItems="center">
                    <Box>
                        <form onSubmit={formik.handleSubmit}>
                            <VStack spacing={4}>

                                <FormControl className="flex justify-between">
                                    <FormLabel className="self-center m-auto">Title</FormLabel>
                                    <Select
                                        placeholder='Select Option'
                                        id="title"
                                        name="title"
                                        onChange={formik.handleChange}
                                        value={formik.values.title}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="mr">Mr</option>
                                        <option value="ms">Ms</option>
                                        <option value="dr">Dr</option>
                                        <option value="sir">Sir</option>



                                    </Select>
                                </FormControl>

                                <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName} className="flex justify-between">
                                    <FormLabel htmlFor="firstName" className="self-center m-auto">Firstname</FormLabel>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        placeholder='firstname'
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        onBlur={formik.handleBlur}

                                    />
                                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={!!formik.errors.lastName && formik.touched.lastName}
                                    className="flex justify-between">
                                    <FormLabel htmlFor="lastName" className="self-center m-auto">Lastname</FormLabel>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        placeholder='lastname'
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                        onBlur={formik.handleBlur}

                                    ></Input>
                                    <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={!!formik.errors.email && formik.touched.email}
                                    className="flex justify-between">
                                    <FormLabel htmlFor="email" className="self-center m-auto">Email</FormLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder='email'
                                        type="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}

                                    ></Input>
                                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={!!formik.errors.date && formik.touched.date}
                                    className="flex justify-between">
                                    <FormLabel htmlFor="date" className="self-center m-auto">Date</FormLabel>
                                    <Input
                                        id="date"
                                        name="date"
                                        placeholder='date'
                                        type="date"
                                        onChange={formik.handleChange}
                                        value={formik.values.date}
                                        onBlur={formik.handleBlur}

                                    ></Input>
                                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                                </FormControl>


                                <FormControl className="flex justify-between">
                                    <FormLabel className="self-center m-auto">Title</FormLabel>
                                    <Select
                                        placeholder='Select Option'
                                        id="time"
                                        name="time"
                                        onChange={formik.handleChange}
                                        value={formik.values.time}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="8:30">8:30</option>
                                        <option value="9:30">9:30</option>
                                        <option value="10:00">10:00</option>
                                        <option value="11:00">11:00</option>



                                    </Select>
                                </FormControl>

                                <FormControl isInvalid={!!formik.errors.numSeats && formik.touched.numSeats}
                                    className="flex justify-between">
                                    <FormLabel htmlFor="numSeats" className="self-center m-auto">Number of Seats</FormLabel>
                                    <Input
                                        id="numSeats"
                                        name="numSeats"
                                        placeholder='Number of Seats'
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.numSeats}
                                        onBlur={formik.handleBlur}

                                    ></Input>
                                    <FormErrorMessage>{formik.errors.numSeats}</FormErrorMessage>
                                </FormControl>

                                <Button
                                    type="submit"
                                    colorScheme="yellow"
                                    width="full"
                                    isLoading={isLoading}>
                                    Submit
                                </Button>
                            </VStack>


                           
                        </form>

                    </Box>



                </VStack>

            </Box>

            <div className="segment three-nine pt-[3%] pb-[3%]">
                <img src={Restaurant}></img>
            </div>

        </Fragment>

    );



}
export default BookingForm;