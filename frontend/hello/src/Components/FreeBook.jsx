// eslint-disable-next-line no-unused-vars
import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// eslint-disable-next-line no-unused-vars
import Datalist from '../../public/Datalist.json'
import Cards from './Cards';

function FreeBook() {
    // eslint-disable-next-line no-unused-vars
    const filterData = Datalist.filter((data) => data.category === "Free")

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl w container mx-auto md:px-28 px-4 mt-3'>
                <div>
                    <h1 className='font-bold text-xl'>Free Offered Courses</h1>
                    <p className=' '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit expedita excepturi officiis voluptate? Doloribus tempore delectus fugiat quisquam!</p>
                </div>


                <div>
                    <Slider {...settings}>
                        {filterData.map((item) =>(
                            <Cards item = {item} key={item.id}/>
                        ))}
                    </Slider>
                </div>
            </div>
            <hr></hr>
        </>

    )
}

export default FreeBook