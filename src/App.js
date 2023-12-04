import React, { useState } from 'react'
import './App.css'
import Trivia from './components/Trivia';
import data from './components/Data'

const allItems=[
  {
    id:1,
    amount:"$ 100",
  },
  {
    id:2,
    amount:"$ 200",
  },
  {
    id:3,
    amount:"$ 1000",
  },
  {
    id:4,
    amount:"$ 1000000",
  },
  {
    id:5,
    amount:"$ 100009900",
  },
  {
    id:6,
    amount:"$ 1000000000",
  },
  {
    id:7,
    amount:"$ 10000000000",
  }
].reverse();

const App = () => {

  const [cnumber,setCnumber] = useState(1);
  const [ctime,setCtime] =useState(false)
  return (
    <div className='app'>
      <div className='main'>
        <div className='top'>
          <div className='clock'>30</div>
        </div>
        <div className='bottom'>
          <Trivia data={data} qnumber={cnumber} ctime={ctime}/></div>
      </div>
      <div className='side'>
        <ul className='items'>
          {allItems.map((item)=>
          <li  className={cnumber==item.id?"listItem active":"listItem"}>
          <span className='numberCount'>{item.id}</span>
          <span className='amount'>{item.amount}</span>
        </li>)}
          
          
        </ul>
      </div>
    </div>
  )
}

export default App