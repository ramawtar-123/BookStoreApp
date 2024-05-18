// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Components/Navbar';
import Course from '../Components/Course';
import Footer from '../Components/Footer';


function Courses() {

    return (
        <>

            <Navbar />

            <div className= ' '>
                <Course />
            </div>
            
            <hr></hr>
            <div className=' bottom-0 left-0 right-0 z-50'>
                <Footer />
            </div>

        </>
    )
}

export default Courses