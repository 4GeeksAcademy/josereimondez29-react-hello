import React from 'react'
import rigoImage from "../../img/rigo-baby.jpg";

const card = () => {
  return (
    <div className="card" style="width: 18rem;">
      <img src={rigoImage} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title" id='title'></h5>
          <p className="card-text" id='text'></p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default card
