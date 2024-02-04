import React from 'react'
import Card from './Card'
import Image from "/workspaces/josereimondez29-react-hello/src/img/500x325.jpg"

const Cards = () => {
    
  return (
    <div className="row row-cols-1 row-cols-md-4 g-5 mb-5 ms-4 me-4">
      <div className="col">
        <div className="card h-100">
          <img src={Image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div className="card-footer text-center">
        <button className="btn btn-primary">Find Out More!</button>
      </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={Image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a short card.</p>
          </div>
          <div className="card-footer text-center">
        <button className="btn btn-primary">Find Out More!</button>
      </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={Image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer text-center">
        <button className="btn btn-primary">Find Out More!</button>
      </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={Image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div className="card-footer text-center">
        <button className="btn btn-primary">Find Out More!</button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Cards;