import React from 'react'

function Cards({item}) {
    console.log(item)
    return (
        <>

            <div>
                <div className="card w-11/12  bg-base-100 shadow-xl mt-4 mb-4 hover:scale-95 duration-300">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className=" flex card-actions justify-between">
                            <div className="badge badge-outline hover:bg-black hover:text-white">${item.price}</div>
                            <div className="badge badge-outline hover:bg-pink-500 hover:text-white "> Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards