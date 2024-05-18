// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import ban from '../../public/Ban.jpg';

function banner() {
  return (
    <>
      <div className=' max-w-screen-2xl container mx-auto md:px-28 px-4 flex flex-col md:flex-row mt-20 '>
        <div className='w-full md:w-1/2 space-y-6 order-2 md:order-1 mt-14'>
          <h1 className=' font-bold text-3xl'>Hello, welcomes here to learn something
            <span className=' text-pink-600 text-2xl'>  new everyday!</span> </h1>

          <p className=' para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque repudiandae voluptatibus deserunt ipsa harum,
            est numquam quaerat doloribus recusandae totam nemo assumenda modi distinctio hic magnam maiores. Odio, enim!</p>

          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>

          <button className="btn btn-active btn-secondary ">Secondary</button>
          
        </div>

        <div className='img order-1 w-full md:w-1/2'>
          <img src={ban} className='' alt="" />
        </div>
      </div>
   
    </>
  )
}

export default banner