import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/post1.jpg'
function NewCom() {
  return (
    
    <div className="card w-[200px] h-[400px]" >
    <img src={img1} className="card-img-top w-40 h-40" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-2xl">Unsplash</h5>
      <p className="card-text text-sm">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default NewCom