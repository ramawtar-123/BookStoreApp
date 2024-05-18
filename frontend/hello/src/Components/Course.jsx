// eslint-disable-next-line no-unused-vars
import React from 'react'
import Cards from './Cards'
import Datalist from '../../public/Datalist.json'
import {Link} from 'react-router-dom'

function course() {
  return (
    <>

      <div className='max-w-screen-2xl container mx-auto md:px-28 px-4'>

        <div>
          <h1 className=' text-2xl md:text-4xl justify-center items-center text-center mt-32'>
            We're deligted to have you <span className=' text-pink-500 font-semibold'>here!</span>
          </h1>
          <br></br>
          <p className='items-center justify-center text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maiores magnam qui accusamus corporis dignissimos. Reiciendis ullam at delectus saepe autem commodi, dolor, explicabo sit suscipit incidunt minima, quia dicta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti possimus, placeat modi sunt qui molestias praesentium quas cum alias.
            <br></br>

            <Link to = '/'>

              <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 duration-300 mt-4">Back</button>

            </Link>

          </p>

        </div>
        <div className=' mt-12 grid grid-cols-1 md:grid-cols-4 max-w-screen-2xl container mx-auto md:px-16'>
          {

            Datalist.map((item) => (
              <Cards key={item.id} item={item} />
            ))

          }
        </div>

      </div>

    </>
  )
}

export default course