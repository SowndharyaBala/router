import React from 'react'

function Card() {
  return (
    <div className="grid " >
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
     <div className="flex space-x-4">
     <div className="card w-72 bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="card-img-top w-full h-48 object-cover" src="https://via.placeholder.com/150" alt="Card image cap" />
          <div className="card-body p-4">
            <h5 className="card-title text-xl font-bold mb-2">Card title 2</h5>
            <p className="card-text text-gray-700 mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go somewhere</a>
          </div>
        </div>
        </div>
      </div>
    </div>
   )
  
}

export default Card;