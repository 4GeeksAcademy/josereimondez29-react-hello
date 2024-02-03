import React from 'react'
import jumbotron from "./jumbotron";
import cards from './cards';

const container = () => {
  return (
    <div className='container'>
        <jumbotron/>
        <cards/>
    </div>
  )
}

export default container