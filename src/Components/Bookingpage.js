import React, { Fragment } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from './Header';
import Footer from './Footer';
import BookingForm from './BookingForm';
import { AlertProvider } from "../Context/alertContext";
import Alert from "./Alert";



const Bookingpage = () => {
    return (
        <ChakraProvider>
            <AlertProvider>
            <Header />
            <BookingForm />
            <Footer />
            <Alert />
            </AlertProvider>
        </ChakraProvider>


    );



}
export default Bookingpage;