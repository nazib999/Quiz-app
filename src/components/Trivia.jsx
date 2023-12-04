import React, { useState,useEffect } from 'react'
import './Trivia.css'

const Trivia = ({data,qnumber,ctime}) => {
  const [question,setQuestion]=useState(null);

 useEffect(() => {
   setQuestion(data[qnumber-1])
 }, [data,qnumber])
 

  return (
    <div className='trivia'>
        <div className='question'>{question?.question}</div>
        <div className='answers'>
           {question?.answers.map((q)=>
            <div className='answer correct'>{q.text}</div>)}
            
        </div>
    </div>
  )
}

export default Trivia