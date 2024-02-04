import React from 'react'
import Image from "/workspaces/josereimondez29-react-hello/src/img/500x325.jpg"

const styles = {
  width: "18rem"
}

const Card = (props) => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" id='title'>{props.title}</h5>
              <p className="card-text" id='text'>{props.text}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
