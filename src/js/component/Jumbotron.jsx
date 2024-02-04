import React from 'react'

const styles = {
  backgroundColor: "#D3D3D3",
  
}

const Jumbotron = () => {
  return (
    <div className='jumbotron'>
      <div className="card w-95 mb-3 mt-3 pt-5 pb-5 ms-5 me-5"  style={styles}>
        <div className="card-body">
          <h1 className="card-title">A Warm Welcome!</h1>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Call to Action!</a>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron;